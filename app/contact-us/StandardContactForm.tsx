"use client";
import { useEffect, useState, type FormEvent } from "react";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };
const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const countryCodes = [["US", "+1"], ["CA", "+1"], ["ID", "+62"], ["PH", "+63"], ["GB", "+44"], ["AU", "+61"], ["NZ", "+64"], ["SG", "+65"], ["IN", "+91"], ["AE", "+971"], ["MX", "+52"], ["BR", "+55"], ["ZA", "+27"], ["DE", "+49"], ["FR", "+33"]];

export default function StandardContactForm({ endpoint = "/api/submit-lead", encoding = "json" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");
  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = { "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63", "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61", "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971" };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || ""), businessEmail: String(data.get("email") || ""), phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("positions") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      source: "contact-form", formId: "contactPageForm"
    };
    setSubmitting(true); setError("");
    try {
      const request = encoding === "form" ? { method: "POST", body: new URLSearchParams(payload) } : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      try {
        window.sessionStorage.setItem("acrPendingLead", JSON.stringify(payload));
        const tracker = (window as TrackerWindow).acrTracker;
        if (tracker?.trackLead) {
          tracker.trackLead(payload);
          window.sessionStorage.removeItem("acrPendingLead");
        }
      } catch {}
      window.location.assign("/thank-you");
    } catch {
      setError("We could not submit your request. Please try again."); setSubmitting(false);
    }
  }

  return <div className="sa-form-card"><div className="sa-form-heading"><h2>Book a free consultation</h2><p>Required fields help us prepare for the call.</p></div><form action={endpoint} method="post" onSubmit={submit} id="contactPageForm" data-acr-handled="1" aria-describedby={error?"contact-form-error":undefined}><input className="sa-hp" name="website_url" type="hidden" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty"/><div className="sa-grid"><label>First name *<input name="firstName" required autoComplete="given-name"/></label><label>Last name *<input name="lastName" required autoComplete="family-name"/></label></div><div className="sa-grid"><label>Business email *<input name="email" type="email" required autoComplete="email"/></label><label>Phone number *<span className="sa-phone"><select name="countryCode" aria-label="Country code" value={countryCode} onChange={e=>setCountryCode(e.target.value)}>{countryCodes.map(([country,code],i)=><option value={code} key={`${country}-${code}-${i}`}>{country} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number"/></span></label></div><div className="sa-grid"><label>Company name *<input name="companyName" required autoComplete="organization"/></label><label>Website / URL<input name="website" placeholder="example.com" autoComplete="url"/></label></div><div className="sa-grid"><label>Company size *<select name="companySize" required defaultValue=""><option value="" disabled>Select</option>{companySizes.map(x=><option key={x}>{x}</option>)}</select></label><label>Positions to fill *<select name="positions" required defaultValue=""><option value="" disabled>Select</option>{positions.map(x=><option key={x}>{x}</option>)}</select></label></div><div className="sa-grid sa-last-row"><label>How did you hear about us? *<select name="referral" required value={referral} onChange={e=>setReferral(e.target.value)}><option value="" disabled>Select</option>{referrals.map(x=><option key={x}>{x}</option>)}</select></label><label>Message<textarea name="message" rows={1} placeholder="What should your assistant handle?"/></label></div>{referral === "Other" ? <label className="sa-wide">Please specify<input name="referralSpecify" required/></label> : null}<button className="sa-submit" type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Book a Free Consultation"}</button>{error?<p className="sa-status" id="contact-form-error" role="alert" aria-live="assertive">{error}</p>:null}<p className="sa-trust-note">Your details are sent securely and used only to respond to your inquiry.</p></form></div>;
}

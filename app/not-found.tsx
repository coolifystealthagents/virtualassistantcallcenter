import { Header, Footer } from './components';

export default function NotFound() {
  return <>
    <Header />
    <main id="main-content" className="section"><section className="container legal-card" aria-labelledby="missing-title"><p className="eyebrow">404 - Page not found</p><h1 id="missing-title">That call lane is not here.</h1><p className="lead">The address may have changed, or the page may no longer be available.</p><div className="not-found-actions"><a className="btn primary" href="/">Return home</a><a className="btn" href="/services">Explore services</a><a className="btn" href="/contact-us">Contact us</a></div></section></main>
    <Footer />
  </>;
}

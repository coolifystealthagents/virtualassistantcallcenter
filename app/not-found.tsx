import { Header, Footer } from './components';

export default function NotFound() {
  return <>
    <Header />
    <main className="section"><section className="container legal-card" aria-labelledby="missing-title"><p className="eyebrow">404 - Page not found</p><h1 id="missing-title">That call lane is not here.</h1><p className="lead">The address may have changed, or the page may no longer be available.</p><a className="btn primary" href="/">Return to the homepage</a></section></main>
    <Footer />
  </>;
}

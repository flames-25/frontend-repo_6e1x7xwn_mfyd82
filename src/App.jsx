import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ModulesShowcase from './components/ModulesShowcase';

function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} MediLink. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#consent" className="hover:text-slate-900">Privacy</a>
          <a href="#appointments" className="hover:text-slate-900">Appointments</a>
          <a href="#auth" className="hover:text-slate-900">Sign in</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <ModulesShowcase />
        <section id="auth" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Secure Access</h2>
            <p className="text-slate-600">This is a design preview. Authentication and data features will be connected to a secure backend and database in the next step.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Register as Patient</button>
              <button className="border border-slate-300 px-4 py-2 rounded-md hover:bg-white">Doctor/Staff Sign In</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

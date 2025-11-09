import { ArrowRight, Shield, Bell, FileText, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Connected healthcare for patients, doctors, labs and pharmacies
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Securely manage records, appointments, lab results and prescriptions — all in one place.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#auth" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-white">
                Learn More
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-green-600"/>HIPAA-like security</div>
              <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-amber-600"/>Smart notifications</div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-blue-600"/>Unified records</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-white shadow-lg ring-1 ring-slate-200 p-4">
              <div className="h-full rounded-lg bg-gradient-to-br from-blue-100 via-white to-indigo-100 grid place-items-center">
                <Activity className="h-16 w-16 text-blue-600"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

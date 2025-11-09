import { Stethoscope, FlaskConical, Pill, User, ShieldCheck, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 text-lg">MediLink</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#patient" className="hover:text-blue-600 transition-colors flex items-center gap-2"><User className="h-4 w-4"/>Patient</a>
          <a href="#doctor" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Stethoscope className="h-4 w-4"/>Doctor</a>
          <a href="#lab" className="hover:text-blue-600 transition-colors flex items-center gap-2"><FlaskConical className="h-4 w-4"/>Laboratory</a>
          <a href="#pharmacy" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Pill className="h-4 w-4"/>Pharmacy</a>
        </nav>
        <a href="#auth" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors">
          <Calendar className="h-4 w-4"/>
          <span>Book Appointment</span>
        </a>
      </div>
    </header>
  );
}

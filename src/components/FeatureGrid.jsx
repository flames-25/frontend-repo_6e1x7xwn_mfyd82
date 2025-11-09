import { UserCheck, FileText, FlaskConical, Pill, Stethoscope, CalendarCheck2 } from 'lucide-react';

const Card = ({ icon: Icon, title, children, anchor }) => (
  <a href={anchor} className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center group-hover:bg-blue-100">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <div className="mt-1 text-sm text-slate-600">{children}</div>
      </div>
    </div>
  </a>
);

export default function FeatureGrid() {
  return (
    <section id="features" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={UserCheck} title="Patient Portal" anchor="#patient">
            Register/login securely, view history, prescriptions, lab results, and request appointments with reminders.
          </Card>
          <Card icon={Stethoscope} title="Doctor & Clinic" anchor="#doctor">
            Access consented records, write clinical notes, order labs and e-prescribe with ease.
          </Card>
          <Card icon={FlaskConical} title="Laboratory" anchor="#lab">
            Receive digital test orders, upload results and share with doctors and patients instantly.
          </Card>
          <Card icon={Pill} title="Pharmacy" anchor="#pharmacy">
            Receive electronic prescriptions, verify, dispense and notify patients when ready.
          </Card>
          <Card icon={FileText} title="Audit & Consent" anchor="#consent">
            Fine-grained patient consent with complete access logs for every action.
          </Card>
          <Card icon={CalendarCheck2} title="Appointments" anchor="#appointments">
            Smart scheduling, rescheduling and reminders via email/SMS.
          </Card>
        </div>
      </div>
    </section>
  );
}

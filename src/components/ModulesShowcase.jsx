import { User, Stethoscope, FlaskConical, Pill, CheckCircle2 } from 'lucide-react';

const Module = ({ id, icon: Icon, title, items, accent }) => (
  <section id={id} className="py-10">
    <div className={`rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm ${accent}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center">
          <Icon className="h-5 w-5"/>
        </div>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      </div>
      <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
        {items.map((text, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600 mt-1"/>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default function ModulesShowcase() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <Module
        id="patient"
        icon={User}
        title="Patient Module"
        items={[
          'Secure registration and login',
          'View medical history, prescriptions, and lab results',
          'Request appointments and receive notifications',
        ]}
      />
      <Module
        id="doctor"
        icon={Stethoscope}
        title="Doctor/Clinic Module"
        items={[
          'Access patient health records with consent',
          'Create and update clinical notes',
          'Order lab tests and prescribe medicines digitally',
        ]}
      />
      <Module
        id="lab"
        icon={FlaskConical}
        title="Laboratory Module"
        items={[
          'Receive test orders from doctors',
          'Upload test results and share with both doctor and patient',
        ]}
      />
      <Module
        id="pharmacy"
        icon={Pill}
        title="Pharmacy Module"
        items={[
          'Receive digital prescriptions from doctors',
          'Verify and dispense medicines',
          'Notify patients when medicines are ready',
        ]}
      />
    </div>
  );
}

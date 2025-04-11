import React from "react";
import { Mail, PhoneCall, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up space-y-10">
        <h2 className="text-4xl font-extrabold">Contact Us</h2>
        <p className="text-lg text-white/70">
          Have a question or want to start a project? We’d love to hear from
          you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-3">
            <Mail className="text-indigo-400" size={28} />
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-white/70">hello@neuronix.ai</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <PhoneCall className="text-emerald-400" size={28} />
            <h4 className="text-lg font-semibold">Phone</h4>
            <p className="text-white/70">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <MapPin className="text-pink-400" size={28} />
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-white/70">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

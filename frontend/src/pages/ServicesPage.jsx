import React from "react";
import { Wrench, BrainCircuit, DatabaseZap } from "lucide-react";

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12 text-center animate-fade-in-up">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <p className="text-lg text-white/70">
          We provide full-spectrum AI development services designed to
          future-proof your business.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 shadow-lg hover:scale-105 transition">
            <BrainCircuit className="mx-auto text-indigo-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">AI Development</h4>
            <p className="text-white/70 text-sm mt-2">
              NLP, computer vision, reinforcement learning, and more.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 shadow-lg hover:scale-105 transition">
            <Wrench className="mx-auto text-emerald-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">Custom Integrations</h4>
            <p className="text-white/70 text-sm mt-2">
              AI-powered integrations tailored to your stack and workflow.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 shadow-lg hover:scale-105 transition">
            <DatabaseZap className="mx-auto text-yellow-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">Data Engineering</h4>
            <p className="text-white/70 text-sm mt-2">
              Build scalable data pipelines and warehouses with automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

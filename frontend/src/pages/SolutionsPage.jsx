import React from "react";
import { Bot, ServerCog, Globe2 } from "lucide-react";

const SolutionsPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in-up space-y-12">
        <h2 className="text-4xl font-extrabold">Our Products</h2>
        <p className="text-lg text-white/70">
          Explore Neuronix’s intelligent products built for performance and
          scale.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition shadow-md">
            <Bot className="mx-auto text-cyan-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">Neuronix Agent</h4>
            <p className="text-sm text-white/70 mt-2">
              An autonomous AI agent for smart decision-making and task
              automation.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition shadow-md">
            <ServerCog className="mx-auto text-orange-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">Genomic Core</h4>
            <p className="text-sm text-white/70 mt-2">
              A distributed platform for processing and visualizing genomic
              data.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition shadow-md">
            <Globe2 className="mx-auto text-green-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">API Hub</h4>
            <p className="text-sm text-white/70 mt-2">
              Access powerful machine learning APIs for classification,
              generation, and search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPage;

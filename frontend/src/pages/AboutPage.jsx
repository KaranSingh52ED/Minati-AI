import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">
        <h2 className="text-4xl font-extrabold">
          About <span className="text-indigo-400">Minati AI</span>
        </h2>
        <p className="text-lg text-white/70">
          We are pioneers in artificial intelligence, delivering customized solutions for businesses
          and researchers to thrive in a rapidly evolving tech landscape. Minati AI is committed to
          making intelligence accessible, ethical, and impactful.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:scale-105 transition-all">
            <Users className="mx-auto text-indigo-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">Our Team</h4>
            <p className="text-sm text-white/70 mt-2">
              A multidisciplinary crew of AI engineers, scientists, and dreamers.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:scale-105 transition-all">
            <Lightbulb className="mx-auto text-yellow-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">Our Vision</h4>
            <p className="text-sm text-white/70 mt-2">
              Making intelligence accessible, ethical, and impactful.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:scale-105 transition-all">
            <Target className="mx-auto text-pink-400" size={32} />
            <h4 className="mt-4 text-xl font-semibold">Our Mission</h4>
            <p className="text-sm text-white/70 mt-2">
              Solve complex problems with simple, scalable AI-driven systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

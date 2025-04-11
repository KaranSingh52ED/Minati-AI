import React from "react";
import { Link } from "react-router-dom";
import { Brain, Rocket, Code, ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full text-center space-y-12 animate-fade-in-up">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight animate-slide-in-down">
            Welcome to <span className="text-indigo-400">Minati AI</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Empowering the future with intelligent automation. Discover how
            Neuronix AI transforms businesses through advanced machine learning
            and human-inspired intelligence.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-xl hover:shadow-indigo-600/50"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "AI Strategy",
              icon: <Brain className="text-indigo-400" size={36} />,
              description:
                "Tailored roadmaps and advisory to integrate AI into your core operations.",
            },
            {
              title: "Smart Automation",
              icon: <Rocket className="text-pink-400" size={36} />,
              description:
                "Automate tasks intelligently using NLP, computer vision, and RPA.",
            },
            {
              title: "Custom Solutions",
              icon: <Code className="text-purple-400" size={36} />,
              description:
                "Build scalable AI tools, models, and platforms tailored to your data.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-400 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-sm text-white/40 pt-8">
          Trusted by innovators and enterprises to lead the frontier of
          artificial intelligence.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

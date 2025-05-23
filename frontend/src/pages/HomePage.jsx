import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Rocket, Code, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white flex items-center justify-center px-6 pb-16 pt-32">
      <div className="max-w-6xl w-full text-center space-y-12 animate-fade-in-up">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight animate-slide-in-down">
            Welcome to <span className="text-indigo-400">Minati AI</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Empowering the future with intelligent automation. Discover how Minati AI transforms
            businesses through advanced machine learning and human-inspired intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-xl hover:shadow-indigo-600/50 w-full sm:w-auto text-base sm:text-lg justify-center"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              to="/user-search"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-xl hover:shadow-green-600/50 w-full sm:w-auto text-base sm:text-lg justify-center"
            >
              User Search
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {[
            {
              title: 'AI Strategy',
              icon: <Brain className="text-indigo-400" size={36} />,
              description:
                'Tailored roadmaps and advisory to integrate Minati AI into your core operations.',
            },
            {
              title: 'Smart Automation',
              icon: <Rocket className="text-pink-400" size={36} />,
              description:
                'Automate tasks intelligently using NLP, computer vision, and Minati AI RPA.',
            },
            {
              title: 'Custom Solutions',
              icon: <Code className="text-purple-400" size={36} />,
              description:
                'Build scalable AI tools, models, and platforms tailored to your data with Minati AI.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-400 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center"
            >
              <div className="flex justify-center mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-xs sm:text-sm text-white/40 pt-6 sm:pt-8">
          Trusted by innovators and enterprises to lead the frontier of Minati AI.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

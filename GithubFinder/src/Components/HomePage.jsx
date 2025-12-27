import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Search, Users, GitBranch, Star, ExternalLink, Code, TrendingUp } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header with Logo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
            <Github className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            GitHub Profile Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover developers, explore projects, and connect with the GitHub community instantly
          </p>
        </div>

        {/* Main Hero Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 mb-12">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Visual */}
            <div className="lg:w-2/5 p-8 md:p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <div className="relative h-full">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Explore the GitHub Universe</h2>
                  <p className="text-blue-100 mb-8">
                    Dive into millions of developer profiles, repositories, and contributions in real-time.
                  </p>
                  
                  {/* Stats Counter Animation */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold flex items-center">
                        <span className="animate-count">100</span>M+
                      </div>
                      <div className="text-sm text-blue-200">Developers</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                      <div className="text-2xl font-bold flex items-center">
                        <span className="animate-count">330</span>M+
                      </div>
                      <div className="text-sm text-blue-200">Repositories</div>
                    </div>
                  </div>
                  
                  {/* Trending Tags */}
                  <div>
                    <div className="text-sm text-blue-200 mb-3">Trending searches:</div>
                    <div className="flex flex-wrap gap-2">
                      {['octocat', 'torvalds', 'gaearon', 'sindresorhus'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
                          @{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <Search className="w-6 h-6 mr-3 text-blue-500" />
                Why Use GitHub Profile Finder?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    icon: <Search className="w-5 h-5" />,
                    title: "Instant Search",
                    desc: "Find any GitHub user in seconds",
                    color: "bg-blue-100 text-blue-600"
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Profile Analytics",
                    desc: "Detailed stats and insights",
                    color: "bg-purple-100 text-purple-600"
                  },
                  {
                    icon: <GitBranch className="w-5 h-5" />,
                    title: "Repository Explorer",
                    desc: "Browse public repositories",
                    color: "bg-green-100 text-green-600"
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Activity Tracking",
                    desc: "Follow coding activity",
                    color: "bg-orange-100 text-orange-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className="group p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                    <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Getting Started Steps */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-4">Get Started in 3 Steps:</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  {[
                    { step: "1", text: "Enter a GitHub username" },
                    { step: "2", text: "Click search to fetch data" },
                    { step: "3", text: "Explore profile & repositories" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/githubProfile"
              className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3"
            >
              <Search className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Start Searching Now
              <ExternalLink className="w-5 h-5" />
            </Link>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-3"
            >
              <Github className="w-5 h-5" />
              Visit GitHub
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            No account required • 100% free • Real-time data
          </p>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600">Built with React & Tailwind CSS</span>
            </div>
            <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-600">Powered by GitHub API</span>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p className="mb-2">Try searching for popular developers:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['octocat', 'torvalds', 'gaearon', 'addyosmani', 'sindresorhus', 'jakewharton'].map((dev) => (
                <span key={dev} className="px-3 py-1 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
                  @{dev}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-count {
          display: inline-block;
          animation: count 1s ease-out;
        }
        
        @keyframes count {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
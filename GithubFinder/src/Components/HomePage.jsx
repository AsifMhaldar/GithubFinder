import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, Search, Users, GitBranch, Star, ExternalLink, 
  Code, TrendingUp, Sparkles, Zap, Rocket, Shield, 
  Lock, Globe, Cpu, Database, Layers, Cloud, Terminal,
  Award, Trophy, Crown, Heart, Target, CheckCircle,
  ArrowRight, ChevronRight, Play, ShieldCheck, Infinity,
  Wifi, Cpu as Chip, BarChart3, PieChart, LineChart,
  Users as UserGroup, GitMerge, GitPullRequest, GitCommit,
  BookOpen, Book, FileCode, FolderGit, Package, Tag,
  Filter, Settings, Bell, Download, Upload, Share2,
  Link as LinkIcon, Mail, MessageSquare, Phone,
  MapPin, Navigation, Compass, Navigation2,
  Clock, Calendar, Watch, Timer,
  Sun, Moon, Coffee, Battery,
  Leaf, Flower, Droplets, Flame,
  Snowflake, CloudRain, CloudSnow, CloudLightning
} from 'lucide-react';

function HomePage() {
  const [counters, setCounters] = useState({ developers: 0, repos: 0, commits: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setCounters(prev => ({
        developers: prev.developers < 100 ? prev.developers + 1 : 100,
        repos: prev.repos < 330 ? prev.repos + 3 : 330,
        commits: prev.commits < 2100 ? prev.commits + 21 : 2100
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
  };

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Lightning Fast Search",
      description: "Find any GitHub user in milliseconds with our optimized search algorithm",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      stats: "0.2s response time"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Deep insights into repositories, contributions, and coding patterns",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      stats: "50+ metrics"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Zero data storage, end-to-end encryption, and complete privacy",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
      stats: "100% secure"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Live GitHub API integration with instant profile updates",
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      stats: "Live data"
    }
  ];

  const trendingDevelopers = [
    { name: "AsifMhaldar", role: "Full Stack Developer", stars: 42 },
    { name: "octocat", role: "GitHub Mascot", stars: 12500 },
    { name: "torvalds", role: "Linux Creator", stars: 89000 },
    { name: "gaearon", role: "React Core Team", stars: 67000 },
    { name: "sindresorhus", role: "Open Source Legend", stars: 45000 },
    { name: "addyosmani", role: "Chrome Engineer", stars: 38000 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px),
                          linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        {/* Moving Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Parallax Layer */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={parallaxStyle}
      >
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated Logo */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-gray-900 to-black p-6 rounded-3xl border border-gray-800 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl animate-spin-slow">
                    <Github className="w-12 h-12" />
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      GitHub Finder Pro
                    </div>
                    <div className="text-sm text-gray-400">Enterprise Edition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Discover
              </span>
              <br />
              <span className="text-white">GitHub Universe</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Advanced platform for exploring millions of developers, repositories, and contributions with real-time analytics and insights
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: <UserGroup className="w-8 h-8" />, value: `${counters.developers}M+`, label: "Developers", color: "from-blue-500 to-cyan-500" },
                { icon: <GitBranch className="w-8 h-8" />, value: `${counters.repos}M+`, label: "Repositories", color: "from-purple-500 to-pink-500" },
                { icon: <GitCommit className="w-8 h-8" />, value: `${counters.commits}M+`, label: "Commits", color: "from-green-500 to-emerald-500" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/githubProfile"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-500 ${isHovering ? 'translate-x-0' : '-translate-x-full'}`}></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Play className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  <span>Launch Search Portal</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping"></div>
              </Link>
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-5 bg-gradient-to-br from-gray-800 to-black text-white text-lg font-semibold rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-3">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Visit GitHub</span>
                  <ExternalLink className="w-5 h-5 group-hover:scale-125 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400">WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Advanced
                </span>{' '}
                Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Professional tools and insights for developers, recruiters, and open-source enthusiasts
              </p>
            </div>

            {/* Interactive Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveFeature(index)}
                  className={`relative group cursor-pointer ${activeFeature === index ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-2xl ${feature.gradient} transform group-hover:rotate-12 transition-transform duration-500`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold">{feature.title}</h3>
                          <div className="px-3 py-1 bg-gradient-to-r from-gray-800 to-black rounded-full text-sm">
                            {feature.stats}
                          </div>
                        </div>
                        <p className="text-gray-400 mb-4">{feature.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Zap className="w-4 h-4" />
                          <span>Powered by real-time GitHub API</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trending Developers */}
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Trending
                    </span>{' '}
                    Developers
                  </h3>
                  <p className="text-gray-400">Most searched profiles this week</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Updated in real-time</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingDevelopers.map((dev, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <UserGroup className="w-7 h-7 text-white" />
                        </div>
                        {index < 3 && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                            <Crown className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">@{dev.name}</h4>
                        <p className="text-sm text-gray-400">{dev.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">{dev.stars.toLocaleString()} stars</span>
                      </div>
                      <button
                        onClick={() => window.location.href = `/githubProfile?user=${dev.name}`}
                        className="px-4 py-2 bg-gradient-to-r from-gray-800 to-black rounded-lg text-sm hover:from-gray-700 hover:to-gray-900 transition-all duration-300 flex items-center gap-2"
                      >
                        View
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Technology
                  </span>{' '}
                  Stack
                </h3>
                <p className="text-gray-400">Built with modern technologies for ultimate performance</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Terminal className="w-8 h-8" />, name: "React 18", color: "from-blue-500 to-cyan-500" },
                  { icon: <Chip className="w-8 h-8" />, name: "Tailwind CSS", color: "from-purple-500 to-pink-500" },
                  { icon: <Database className="w-8 h-8" />, name: "GitHub API", color: "from-green-500 to-emerald-500" },
                  { icon: <Cloud className="w-8 h-8" />, name: "Vercel", color: "from-orange-500 to-red-500" }
                ].map((tech, index) => (
                  <div key={index} className="text-center group">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tech.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      {tech.icon}
                    </div>
                    <div className="font-bold">{tech.name}</div>
                    <div className="text-sm text-gray-400">Production Ready</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-12 rounded-3xl border border-gray-800">
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-6">
                  <Rocket className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Explore</span>?
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of developers who use GitHub Finder Pro to discover talent and explore code
                </p>
                <Link
                  to="/githubProfile"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  <Search className="w-5 h-5" />
                  Start Searching Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>No credit card required</span>
                  <span className="text-gray-700">•</span>
                  <CheckCircle className="w-4 h-4" />
                  <span>100% free forever</span>
                  <span className="text-gray-700">•</span>
                  <CheckCircle className="w-4 h-4" />
                  <span>Instant access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold">GitHub Finder Pro</div>
                  <div className="text-sm text-gray-400">Advanced Developer Discovery Platform</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { icon: <Code className="w-4 h-4" />, label: "React" },
                  { icon: <Database className="w-4 h-4" />, label: "GitHub API" },
                  { icon: <Zap className="w-4 h-4" />, label: "Real-time" },
                  { icon: <Shield className="w-4 h-4" />, label: "Secure" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-sm text-gray-400 text-center md:text-right">
                <div>© 2024 GitHub Finder Pro. All rights reserved.</div>
                <div className="mt-1">Built with ❤️ for the developer community</div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-20px); }
          75% { transform: translateY(-10px) translateX(15px); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, Search, User, Users, GitBranch, Star, MapPin, 
  Building, Calendar, Twitter, Globe, Mail, ExternalLink, 
  Home, Moon, Sun, ArrowLeft, RefreshCw, AlertCircle, 
  Loader2, Briefcase, Phone, Link as LinkIcon, Award,
  TrendingUp, Code, BookOpen, Zap, Heart, Download, 
  Cpu, Shield, Rocket, Sparkles, ThumbsUp, Eye,
  BarChart3, Clock, Target, Trophy, Crown, Bell,
  CheckCircle, XCircle, HelpCircle, Activity, Server,
  Database, Layers, Cpu as Chip, Wifi, Cloud
} from 'lucide-react';

function GitHubProfileFinder() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('github-theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
        }
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(history);
    }, []);

    useEffect(() => {
        localStorage.setItem('github-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const saveToHistory = (username) => {
        const updatedHistory = [username, ...searchHistory.filter(u => u !== username)].slice(0, 5);
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    const fetchUser = async () => {
        if (!username.trim()) return;
        
        setLoading(true);
        setError(null);
        setUserData(null);
        
        try {
            // Add artificial delay for better UX
            await new Promise(resolve => setTimeout(resolve, 800));
            
            const response = await fetch(`https://api.github.com/users/${username}`);
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('User not found. Please check the username and try again.');
                } else if (response.status === 403) {
                    throw new Error('Rate limit exceeded. Please try again in a few minutes.');
                }
                throw new Error('Failed to fetch data. Please check your connection and try again.');
            }
            
            const data = await response.json();
            setUserData(data);
            saveToHistory(username);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUser();
    };

    const handleReset = () => {
        setUsername('');
        setUserData(null);
        setError(null);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Not Available';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const getJoinDuration = (dateString) => {
        if (!dateString) return '';
        const joinDate = new Date(dateString);
        const now = new Date();
        const years = now.getFullYear() - joinDate.getFullYear();
        const months = now.getMonth() - joinDate.getMonth();
        return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
    };

    const calculateProfileScore = () => {
        if (!userData) return 0;
        const repos = userData.public_repos || 0;
        const followers = userData.followers || 0;
        const following = userData.following || 0;
        const gists = userData.public_gists || 0;
        
        return Math.min(Math.floor((repos * 2 + followers * 3 + following + gists) / 10), 100);
    };

    const theme = {
        bg: isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
        text: isDarkMode ? 'text-white' : 'text-gray-800',
        textMuted: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        card: isDarkMode 
            ? 'bg-gray-800/90 backdrop-blur-md border-gray-700/50' 
            : 'bg-white/90 backdrop-blur-md border-gray-200/50',
        border: isDarkMode ? 'border-gray-700/30' : 'border-gray-300/30',
        input: isDarkMode 
            ? 'bg-gray-700/50 text-white border-gray-600/50 placeholder-gray-400' 
            : 'bg-white text-gray-800 border-gray-300 placeholder-gray-500',
        button: isDarkMode 
            ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white' 
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white',
        buttonSecondary: isDarkMode 
            ? 'bg-gray-700/50 hover:bg-gray-600/50 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700',
        accent: isDarkMode 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
            : 'bg-gradient-to-r from-blue-400 to-purple-400',
    };

    return (
        <div className={`min-h-screen transition-all duration-500 ${theme.bg} ${theme.text} p-4 sm:p-6`}>
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
            </div>

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className={`absolute w-1 h-1 ${isDarkMode ? 'bg-white/20' : 'bg-gray-400/30'} rounded-full`}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <Link 
                            to="/" 
                            className={`group p-3 rounded-xl ${theme.card} border ${theme.border} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                            <Home className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </Link>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`p-2 rounded-xl ${theme.accent} shadow-lg`}>
                                    <Github className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                        GitHub Profile Finder
                                    </h1>
                                    <p className={`text-sm ${theme.textMuted} flex items-center gap-2 mt-1`}>
                                        <Sparkles className="w-3 h-3" />
                                        Discover developers in seconds
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        {searchHistory.length > 0 && !userData && !loading && !error && (
                            <div className={`px-4 py-2 rounded-lg ${theme.card} border ${theme.border} hidden sm:block`}>
                                <div className="flex items-center gap-2 text-sm">
                                    <Clock className="w-4 h-4" />
                                    <span>Recent: {searchHistory.slice(0, 2).join(', ')}</span>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={toggleTheme}
                            className={`group p-3 rounded-xl ${theme.card} border ${theme.border} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                            {isDarkMode ? (
                                <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                            ) : (
                                <Moon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Search Section */}
                {!loading && !userData && !error && (
                    <div className="mb-16">
                        {/* Hero Search Card */}
                        <div className={`rounded-3xl p-8 md:p-12 mb-12 border ${theme.border} ${theme.card} shadow-2xl transform hover:shadow-3xl transition-all duration-500`}>
                            <div className="text-center mb-10">
                                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-6">
                                    <Search className="w-10 h-10 text-blue-500" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Find <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Amazing</span> Developers
                                </h2>
                                <p className={`text-lg ${theme.textMuted} max-w-2xl mx-auto`}>
                                    Enter any GitHub username to explore profiles, contributions, and achievements
                                </p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                                setIsTyping(true);
                                                setTimeout(() => setIsTyping(false), 1000);
                                            }}
                                            placeholder="Enter GitHub username (e.g., AsifMhaldar)"
                                            className={`pl-12 w-full px-6 py-5 text-lg rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${theme.input} shadow-xl`}
                                            autoFocus
                                        />
                                        <button
                                            type="submit"
                                            disabled={!username.trim()}
                                            className={`absolute right-3 top-3 px-8 py-3 rounded-xl font-semibold transition-all ${theme.button} disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-105`}
                                        >
                                            {isTyping ? 'Type...' : 'Search'}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* Quick Actions */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <button
                                    onClick={() => {
                                        setUsername('AsifMhaldar');
                                        setTimeout(() => fetchUser(), 100);
                                    }}
                                    className={`group p-4 rounded-xl border ${theme.border} ${theme.card} hover:scale-105 transition-all duration-300`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/10 rounded-lg">
                                            <Crown className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold">Featured</div>
                                            <div className="text-sm opacity-75">@AsifMhaldar</div>
                                        </div>
                                    </div>
                                </button>
                                
                                <button
                                    onClick={handleReset}
                                    className={`group p-4 rounded-xl border ${theme.border} ${theme.card} hover:scale-105 transition-all duration-300`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-purple-500/10 rounded-lg">
                                            <RefreshCw className="w-5 h-5 text-purple-500" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold">Clear</div>
                                            <div className="text-sm opacity-75">Reset search</div>
                                        </div>
                                    </div>
                                </button>
                                
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group p-4 rounded-xl border ${theme.border} ${theme.card} hover:scale-105 transition-all duration-300`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-500/10 rounded-lg">
                                            <ExternalLink className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold">GitHub</div>
                                            <div className="text-sm opacity-75">Visit platform</div>
                                        </div>
                                    </div>
                                </a>
                                
                                <div className={`p-4 rounded-xl border ${theme.border} ${theme.card}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                                            <Zap className="w-5 h-5 text-yellow-500" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold">Fast</div>
                                            <div className="text-sm opacity-75">Instant results</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-center mb-8">
                                Why Choose Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Finder</span>?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: <Activity className="w-8 h-8" />,
                                        title: "Real-time Analytics",
                                        desc: "Live GitHub API with instant updates",
                                        color: "from-blue-500 to-cyan-500"
                                    },
                                    {
                                        icon: <BarChart3 className="w-8 h-8" />,
                                        title: "Advanced Insights",
                                        desc: "Detailed metrics and performance data",
                                        color: "from-purple-500 to-pink-500"
                                    },
                                    {
                                        icon: <Shield className="w-8 h-8" />,
                                        title: "Secure & Private",
                                        desc: "No data storage, completely secure",
                                        color: "from-green-500 to-emerald-500"
                                    },
                                    {
                                        icon: <Rocket className="w-8 h-8" />,
                                        title: "Lightning Fast",
                                        desc: "Optimized for speed and performance",
                                        color: "from-orange-500 to-red-500"
                                    },
                                    {
                                        icon: <Database className="w-8 h-8" />,
                                        title: "Rich Data",
                                        desc: "Comprehensive profile information",
                                        color: "from-indigo-500 to-blue-500"
                                    },
                                    {
                                        icon: <Sparkles className="w-8 h-8" />,
                                        title: "Beautiful UI",
                                        desc: "Modern design with smooth animations",
                                        color: "from-pink-500 to-rose-500"
                                    }
                                ].map((feature, index) => (
                                    <div 
                                        key={index}
                                        className={`group p-6 rounded-2xl border ${theme.border} ${theme.card} hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl`}
                                    >
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                        <p className={`text-sm ${theme.textMuted}`}>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Banner */}
                        <div className={`rounded-3xl p-8 border ${theme.border} ${theme.card} shadow-xl`}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { value: "100M+", label: "Developers", icon: <Users className="w-6 h-6" /> },
                                    { value: "330M+", label: "Repositories", icon: <GitBranch className="w-6 h-6" /> },
                                    { value: "2.1B+", label: "Contributions", icon: <Code className="w-6 h-6" /> },
                                    { value: "∞", label: "Possibilities", icon: <Sparkles className="w-6 h-6" /> }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`inline-flex p-3 rounded-xl ${theme.buttonSecondary} mb-3`}>
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className={`text-sm ${theme.textMuted}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading Screen */}
                {loading && (
                    <div className="flex flex-col items-center justify-center min-h-[60vh]">
                        <div className="text-center">
                            {/* Advanced Loader */}
                            <div className="relative mb-10">
                                <div className="w-32 h-32 border-4 border-gray-300/30 rounded-full"></div>
                                <div className="absolute top-0 left-0 w-32 h-32 border-4 border-blue-500 rounded-full animate-spin border-t-transparent border-r-transparent"></div>
                                <div className="absolute top-4 left-4 w-24 h-24 border-4 border-purple-500 rounded-full animate-spin border-b-transparent border-l-transparent animation-delay-1000"></div>
                                <Github className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 animate-pulse" />
                            </div>
                            
                            <h2 className="text-3xl font-bold mb-4">Discovering {username}</h2>
                            <p className={`text-lg ${theme.textMuted} mb-8 max-w-md mx-auto`}>
                                Fetching profile data, repositories, and contributions from GitHub...
                            </p>
                            
                            {/* Loading Progress */}
                            <div className="max-w-md mx-auto">
                                <div className="flex justify-between text-sm mb-2">
                                    <span>Loading Profile</span>
                                    <span>70%</span>
                                </div>
                                <div className="w-full bg-gray-300/30 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Error Screen */}
                {error && !loading && (
                    <div className="flex flex-col items-center justify-center min-h-[60vh]">
                        <div className={`max-w-lg w-full rounded-3xl p-10 border ${theme.border} ${theme.card} shadow-2xl text-center transform hover:scale-105 transition-transform duration-300`}>
                            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                                <AlertCircle className="w-12 h-12 text-red-500" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                                Oops! Something went wrong
                            </h2>
                            <p className={`text-lg ${theme.textMuted} mb-8`}>{error}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    onClick={handleReset}
                                    className={`px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 ${theme.button} hover:scale-105 transition-transform`}
                                >
                                    <Search className="w-5 h-5" />
                                    Try Another Search
                                </button>
                                <Link
                                    to="/"
                                    className={`px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 ${theme.buttonSecondary} hover:scale-105 transition-transform`}
                                >
                                    <Home className="w-5 h-5" />
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Profile Screen */}
                {userData && !loading && !error && (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Profile Header */}
                        <div className={`rounded-3xl overflow-hidden border ${theme.border} shadow-2xl`}>
                            {/* Gradient Header */}
                            <div className={`relative p-8 md:p-12 ${theme.accent}`}>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                                
                                <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                    {/* Avatar with Badge */}
                                    <div className="relative group">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                        <img
                                            src={userData.avatar_url}
                                            alt={userData.login}
                                            className="relative w-48 h-48 rounded-2xl border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                                            <Crown className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    
                                    {/* Profile Info */}
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                                            <h2 className="text-4xl lg:text-5xl font-bold text-white">
                                                {userData.name || userData.login}
                                            </h2>
                                            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-mono text-lg">
                                                @{userData.login}
                                            </span>
                                        </div>
                                        
                                        {userData.bio && (
                                            <p className="text-white/90 text-xl mb-6 max-w-3xl">{userData.bio}</p>
                                        )}
                                        
                                        {/* Quick Stats */}
                                        <div className="flex flex-wrap gap-6">
                                            {userData.location && (
                                                <div className="flex items-center text-white/90">
                                                    <MapPin className="w-5 h-5 mr-2" />
                                                    <span className="font-medium">{userData.location}</span>
                                                </div>
                                            )}
                                            {userData.company && (
                                                <div className="flex items-center text-white/90">
                                                    <Building className="w-5 h-5 mr-2" />
                                                    <span className="font-medium">{userData.company}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center text-white/90">
                                                <Calendar className="w-5 h-5 mr-2" />
                                                <span className="font-medium">{getJoinDuration(userData.created_at)} on GitHub</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Content */}
                            <div className={`p-8 ${theme.card}`}>
                                {/* Main Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                                    {[
                                        {
                                            label: "Repositories",
                                            value: userData.public_repos || 0,
                                            icon: <GitBranch className="w-6 h-6" />,
                                            color: "from-blue-500 to-cyan-500",
                                            description: "Public code repositories"
                                        },
                                        {
                                            label: "Followers",
                                            value: userData.followers || 0,
                                            icon: <Users className="w-6 h-6" />,
                                            color: "from-purple-500 to-pink-500",
                                            description: "Developer followers"
                                        },
                                        {
                                            label: "Following",
                                            value: userData.following || 0,
                                            icon: <User className="w-6 h-6" />,
                                            color: "from-green-500 to-emerald-500",
                                            description: "Following developers"
                                        },
                                        {
                                            label: "Profile Score",
                                            value: `${calculateProfileScore()}%`,
                                            icon: <Trophy className="w-6 h-6" />,
                                            color: "from-orange-500 to-yellow-500",
                                            description: "Overall GitHub activity"
                                        }
                                    ].map((stat, index) => (
                                        <div 
                                            key={index}
                                            className={`group p-6 rounded-2xl border ${theme.border} ${theme.card} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                                                    {stat.icon}
                                                </div>
                                                <span className="text-3xl font-bold">{stat.value}</span>
                                            </div>
                                            <h4 className="text-lg font-bold mb-1">{stat.label}</h4>
                                            <p className={`text-sm ${theme.textMuted}`}>{stat.description}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Detailed Information */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                    {/* Contact & Links */}
                                    <div className={`p-6 rounded-2xl border ${theme.border} ${theme.card}`}>
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <Globe className="w-5 h-5" />
                                            Contact & Links
                                        </h3>
                                        <div className="space-y-4">
                                            {userData.blog && (
                                                <a 
                                                    href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-3 p-3 rounded-xl ${theme.buttonSecondary} hover:scale-105 transition-transform`}
                                                >
                                                    <LinkIcon className="w-5 h-5" />
                                                    <span className="truncate">{userData.blog}</span>
                                                    <ExternalLink className="w-4 h-4 ml-auto" />
                                                </a>
                                            )}
                                            {userData.twitter_username && (
                                                <a 
                                                    href={`https://twitter.com/${userData.twitter_username}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-3 p-3 rounded-xl ${theme.buttonSecondary} hover:scale-105 transition-transform`}
                                                >
                                                    <Twitter className="w-5 h-5" />
                                                    <span>@{userData.twitter_username}</span>
                                                    <ExternalLink className="w-4 h-4 ml-auto" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* GitHub Insights */}
                                    <div className={`p-6 rounded-2xl border ${theme.border} ${theme.card}`}>
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <Activity className="w-5 h-5" />
                                            GitHub Insights
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span>Repository Quality</span>
                                                <span className="font-bold">{(userData.public_repos > 0 ? 'High' : 'N/A')}</span>
                                            </div>
                                            <div className="w-full bg-gray-300/30 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: `${Math.min(userData.public_repos * 5, 100)}%`}}></div>
                                            </div>
                                            
                                            <div className="flex justify-between items-center">
                                                <span>Community Impact</span>
                                                <span className="font-bold">{userData.followers > 100 ? 'High' : userData.followers > 10 ? 'Medium' : 'Low'}</span>
                                            </div>
                                            <div className="w-full bg-gray-300/30 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: `${Math.min(userData.followers, 100)}%`}}></div>
                                            </div>
                                            
                                            <div className="flex justify-between items-center">
                                                <span>Activity Level</span>
                                                <span className="font-bold">{userData.public_repos + userData.followers > 50 ? 'Very Active' : 'Active'}</span>
                                            </div>
                                            <div className="w-full bg-gray-300/30 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full" style={{width: `${Math.min((userData.public_repos + userData.followers) / 2, 100)}%`}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={userData.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 ${theme.button} hover:scale-105 transition-transform shadow-lg hover:shadow-xl`}
                                    >
                                        <Github className="w-6 h-6" />
                                        View Full Profile on GitHub
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={handleReset}
                                        className={`px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 ${theme.buttonSecondary} hover:scale-105 transition-transform`}
                                    >
                                        <Search className="w-5 h-5" />
                                        Search Another Developer
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Stats */}
                        <div className={`rounded-3xl p-8 border ${theme.border} ${theme.card} shadow-xl`}>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold mb-2">GitHub Profile Stats</h3>
                                <p className={`${theme.textMuted}`}>Complete overview of {userData.login}'s GitHub presence</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { label: "Account Age", value: getJoinDuration(userData.created_at) },
                                    { label: "Public Gists", value: userData.public_gists || 0 },
                                    { label: "Profile Views", value: "N/A" },
                                    { label: "Member Since", value: formatDate(userData.created_at) }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`text-2xl font-bold mb-1 ${theme.text}`}>{stat.value}</div>
                                        <div className={`text-sm ${theme.textMuted}`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Global Footer */}
                <div className="mt-16 pt-8 border-t border-gray-700/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${theme.accent}`}>
                                <Github className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="font-bold">GitHub Profile Finder</div>
                                <div className={`text-sm ${theme.textMuted}`}>Discover developers, explore code</div>
                            </div>
                        </div>
                        <div className={`text-sm ${theme.textMuted} text-center md:text-right`}>
                            <p>Built with ❤️ using React, Tailwind CSS & GitHub API</p>
                            <p className="mt-1">Real-time data • No login required • 100% Free</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.3; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-10px) translateX(5px); }
                    50% { transform: translateY(5px) translateX(-10px); }
                    75% { transform: translateY(-5px) translateX(8px); }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.7s ease-out;
                }
            `}</style>
        </div>
    );
}

export default GitHubProfileFinder;
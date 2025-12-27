import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GitHubProfileFinder() {
    // States
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load theme preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('github-theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
        }
    }, []);

    // Save theme preference
    useEffect(() => {
        localStorage.setItem('github-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Fetch user data
    const fetchUser = async () => {
        if (!username.trim()) return;
        
        setLoading(true);
        setError(null);
        setUserData(null);
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('User not found. Please check the username.');
                }
                throw new Error('Failed to fetch data. Please try again.');
            }
            
            const data = await response.json();
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUser();
    };

    // Reset search
    const handleReset = () => {
        setUsername('');
        setUserData(null);
        setError(null);
    };

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return 'Not Available';
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    // Theme classes
    const theme = {
        bg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
        text: isDarkMode ? 'text-white' : 'text-gray-800',
        textMuted: isDarkMode ? 'text-gray-300' : 'text-gray-600',
        card: isDarkMode ? 'bg-gray-800' : 'bg-white',
        border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
        input: isDarkMode ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400' : 'bg-white text-gray-800 border-gray-300 placeholder-gray-500',
        button: isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white',
        buttonSecondary: isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
        stats: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    };

    return (
        <div className={`min-h-screen transition-colors ${theme.bg} ${theme.text} p-4 sm:p-6`}>
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-blue-500 hover:text-blue-600">
                            ← Home
                        </Link>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold">GitHub Profile Finder</h1>
                            <p className={`text-sm ${theme.textMuted}`}>Search for any GitHub user</p>
                        </div>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className={`px-4 py-2 rounded-lg transition-colors ${theme.buttonSecondary}`}
                    >
                        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
                    </button>
                </div>

                {/* Default Screen */}
                {!loading && !userData && !error && (
                    <div className="flex flex-col items-center justify-center min-h-[60vh]">
                        <div className="w-full max-w-2xl">
                            <form onSubmit={handleSubmit} className="mb-6">
                                <div className="mb-4">
                                    <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>
                                        Enter GitHub Username
                                    </label>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="e.g. octocat"
                                            className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${theme.input}`}
                                            autoFocus
                                        />
                                        <button
                                            type="submit"
                                            disabled={!username.trim() || loading}
                                            className={`px-6 py-3 font-medium rounded-lg transition-colors ${theme.button} disabled:opacity-50 disabled:cursor-not-allowed`}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                            {/* Quick Search Options */}
                            <div className={`p-4 rounded-lg border ${theme.border} ${theme.card}`}>
                                <p className={`text-sm mb-3 ${theme.textMuted}`}>Try these popular users:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['AsifMhaldar'].map((name) => (
                                        <button
                                            key={name}
                                            type="button"
                                            onClick={() => {
                                                setUsername(name);
                                                setTimeout(() => fetchUser(), 100);
                                            }}
                                            className={`px-3 py-1.5 rounded text-sm transition-colors ${theme.buttonSecondary}`}
                                        >
                                            @{name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading Screen */}
                {loading && (
                    <div className="flex flex-col items-center justify-center min-h-[60vh]">
                        <div className="text-center">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mb-4"></div>
                            <h2 className="text-xl font-semibold mb-2">Searching for {username}...</h2>
                            <p className={theme.textMuted}>Fetching data from GitHub API</p>
                        </div>
                    </div>
                )}

                {/* Error Screen */}
                {error && !loading && (
                    <div className="flex flex-col items-center justify-center min-h-[60vh]">
                        <div className={`max-w-md w-full p-6 rounded-lg border ${theme.border} ${theme.card} text-center`}>
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-xl">!</span>
                            </div>
                            <h2 className="text-xl font-semibold text-red-500 mb-3">User Not Found</h2>
                            <p className={`mb-4 ${theme.textMuted}`}>{error}</p>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <button
                                    onClick={handleReset}
                                    className={`px-4 py-2 rounded transition-colors ${theme.button}`}
                                >
                                    Try Another Search
                                </button>
                                <Link
                                    to="/"
                                    className={`px-4 py-2 rounded text-center transition-colors ${theme.buttonSecondary}`}
                                >
                                    Go Home
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Profile Screen */}
                {userData && !loading && !error && (
                    <div>
                        {/* Search Again */}
                        <div className="mb-6">
                            <button
                                onClick={handleReset}
                                className={`px-4 py-2 rounded ${theme.buttonSecondary}`}
                            >
                                ← Search Another User
                            </button>
                        </div>
                        
                        {/* Profile Card */}
                        <div className={`rounded-xl p-6 ${theme.card} border ${theme.border}`}>
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left Column */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={userData.avatar_url}
                                        alt={userData.login}
                                        className="w-48 h-48 rounded-2xl shadow-lg mx-auto lg:mx-0"
                                    />
                                    <div className="mt-4 text-center lg:text-left">
                                        <p className={`text-sm ${theme.textMuted}`}>{formatDate(userData.created_at)}</p>
                                    </div>
                                </div>
                                
                                {/* Right Column */}
                                <div className="flex-1">
                                    {/* Name & Username */}
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-bold">{userData.name || userData.login}</h2>
                                        <p className="text-blue-500 text-lg">@{userData.login}</p>
                                    </div>
                                    
                                    {/* Bio */}
                                    {userData.bio && (
                                        <div className="mb-6">
                                            <p className={`text-lg ${theme.textMuted}`}>{userData.bio}</p>
                                        </div>
                                    )}
                                    
                                    {/* Stats */}
                                    <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg mb-6 ${theme.stats}`}>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{userData.public_repos || 0}</div>
                                            <div className={`text-sm ${theme.textMuted}`}>Repositories</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{userData.followers || 0}</div>
                                            <div className={`text-sm ${theme.textMuted}`}>Followers</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">{userData.following || 0}</div>
                                            <div className={`text-sm ${theme.textMuted}`}>Following</div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={userData.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-6 py-3 text-center rounded-lg font-medium transition-colors ${theme.button}`}
                                        >
                                            View GitHub Profile
                                        </a>
                                        <button
                                            onClick={handleReset}
                                            className={`px-6 py-3 rounded-lg font-medium transition-colors ${theme.buttonSecondary}`}
                                        >
                                            Search Another
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className={theme.textMuted}>Built with React & GitHub API</p>
                </div>
            </div>
        </div>
    );
}

export default GitHubProfileFinder;
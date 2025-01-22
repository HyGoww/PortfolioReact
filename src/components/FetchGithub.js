import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
function getColor(language) {
    const colors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Java: '#b07219',
        'C++': '#f34b7d',
        'C#': '#178600',
        PHP: '#4F5D95',
        Ruby: '#701516',
        TypeScript: '#3178c6',
    };
    const languageKey = Object.keys(colors).find((key) => key.toLowerCase() === language.toLowerCase());
    return languageKey ? colors[languageKey] : '#ccccc';
}
// Composant principal
const FetchGithub = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    // Récupérer les dépôts GitHub
    async function fetchGitHubRepos(username) {
        try {
            const response = await fetch(`https://api.hygoww.fr/api/github/repos?username=${username}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Impossible de récupérer les dépôts:', error);
            setError('Erreur lors de la récupération des dépôts.');
            return [];
        }
    }
    // Récupérer les commits d'un dépôt
    async function fetchGithubCommits(owner, repo) {
        try {
            const response = await fetch(`https://api.hygoww.fr/api/github/commits?owner=${owner}&repo=${repo}`);
            if (!response.ok) {
                throw new Error(`Erreur lors de la récupération des commits`);
            }
            const data = await response.json();
            const limitedCommits = data.slice(0, 4);
            console.log(limitedCommits);
            return limitedCommits.map((commit) => ({
                author: commit.commit.author.name,
                message: commit.commit.message,
                date: commit.commit.author.date,
                logo: commit.author.avatar_url,
            }));
        }
        catch (error) {
            console.error('Impossible de récupérer les commits:', error);
            setError('Erreur lors de la récupération des commits.');
            return [];
        }
    }
    // Récupérer les langages d'un dépôt
    async function fetchRepoLanguages(owner, repo) {
        try {
            const response = await fetch(`https://api.hygoww.fr/api/github/languages?owner=${owner}&repo=${repo}`);
            if (!response.ok) {
                throw new Error(`Erreur lors de la récupération des langages`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Impossible de récupérer les langages:', error);
            setError('Erreur lors de la récupération des langages.');
            return {};
        }
    }
    // Calculer les pourcentages des langages
    function calculateLanguagePercentages(languages) {
        const totalBytes = Object.values(languages).reduce((sum, value) => sum + value, 0);
        return Object.entries(languages).map(([language, bytes]) => ({
            language,
            percentage: ((bytes / totalBytes) * 100).toFixed(2),
        }));
    }
    // Formatage de la date
    function getDate(isoDate) {
        const date = new Date(isoDate);
        const formattedDate = date.toLocaleString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        return formattedDate;
    }
    // Afficher les dépôts
    async function displayRepos() {
        const reposData = await fetchGitHubRepos(username);
        const reposWithData = await Promise.all(reposData.map(async (repo) => {
            const languages = await fetchRepoLanguages(repo.owner.login, repo.name);
            const languagePercentages = calculateLanguagePercentages(languages);
            const commits = await fetchGithubCommits(repo.owner.login, repo.name);
            return {
                ...repo,
                languagePercentages,
                commits,
            };
        }));
        setRepos(reposWithData);
    }
    useEffect(() => {
        displayRepos();
    }, [username]);
    // Retourner l'affichage des dépôts
    return (_jsxs("div", { className: "p-10", children: [error && _jsx("p", { className: "text-red-500", children: error }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: repos.map((repo) => (_jsxs("div", { className: "bg-white p-4 rounded shadow hover:shadow-lg transition", children: [_jsxs("h3", { className: "text-2xl font-semibold mb-2 gap-2 flex items-center", children: [repo.name, _jsxs("p", { className: "text-xs text-gray-500", children: ["\u2B50 ", repo.stargazers_count, " | \uD83C\uDF74 ", repo.forks_count] })] }), _jsx("p", { className: "text-gray-600 mb-3", children: repo.description || 'Pas de description disponible.' }), _jsx("div", { className: "mt-4 relative", children: repo.languagePercentages.map((lang) => (_jsxs("div", { className: "flex items-center mb-2 gap-2", children: [_jsx("span", { className: "text-sm w-1/4", children: lang.language }), _jsx("div", { className: "w-1/2 h-2 rounded", children: _jsx("div", { className: "h-2 rounded", style: {
                                                width: `${lang.percentage}%`,
                                                backgroundColor: getColor(lang.language),
                                            } }) }), _jsxs("span", { className: "text-sm w-1/4 text-right", children: [lang.percentage, "%"] })] }, lang.language))) }), _jsxs("div", { className: "flex flex-col mt-4", children: [_jsx("h3", { className: "text-md font-semibold", children: "Derniers commits" }), _jsx("ul", { children: repo.commits.map((commit, index) => (_jsxs("li", { children: [_jsxs("div", { className: "flex gap-2 items-center", children: [_jsx("img", { src: commit.logo, className: "w-4 h-4 rounded-full" }), ' ', commit.message] }), _jsxs("p", { className: "text-zinc-500 text-xs", children: ["le ", getDate(commit.date), " par ", commit.author] })] }, index))) })] }), _jsx("button", { className: "px-4 mt-4 bg-blue-700 rounded", children: _jsx("a", { href: repo.html_url, target: "_blank", className: "text-zinc-50 hover:underline self-start", children: "GitHub" }) })] }, repo.id))) })] }));
};
export default FetchGithub;

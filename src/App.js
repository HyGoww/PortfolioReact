import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/App.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import FetchGithub from './components/FetchGithub';
const App = () => {
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(ProjectCard, {}), _jsx("div", { className: "", children: _jsx("h2", { className: " p-10 text-zinc-800 text-3xl font-bold text-center", children: "Mes Projets GitHub !" }) }), _jsx(FetchGithub, { username: "HyGoww" }), _jsx(Footer, {})] }));
};
export default App;

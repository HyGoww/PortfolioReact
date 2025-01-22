import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Navbar = () => {
    return (_jsxs("nav", { className: "w-full h-20 bg-blue-50 shadow-sm fixed z-50 flex items-center justify-between px-4 md:px-8", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("img", { src: "/public/moi.png", alt: "Website logo", className: "rounded-2xl w-14 h-14 shadow-sm" }), _jsx("span", { className: "text-3xl text-blue-950 font-medium hidden md:block ml-2", children: "Portfolio" })] }), _jsxs("ul", { className: "hidden md:flex flex-row gap-6 text-blue-900", children: [_jsx("a", { href: "#home", className: "hover:text-blue-700", children: "Accueil" }), _jsx("a", { href: "#about", className: "hover:text-blue-700", children: "A propos" }), _jsx("a", { href: "#project", className: "hover:text-blue-700", children: "Projets" }), _jsx("a", { href: "#github-projects", className: "hover:text-blue-700", children: "GitHub" })] }), _jsx("button", { className: "bg-blue-700 text-blue-100 hover:bg-blue-800 rounded-xl shadow py-3 px-3 hidden md:block", children: "Contactez-moi" })] }));
};
export default Navbar;

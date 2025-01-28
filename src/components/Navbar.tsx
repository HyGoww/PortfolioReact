import { motion, useSpring, useScroll } from 'motion/react';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav className="w-full h-20 bg-blue-50 shadow-sm fixed z-50 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
        <img
          src="/public/moi.png"
          alt="Website logo"
          className="rounded-2xl w-14 h-14 shadow-sm"
        />
        <span className="text-3xl text-blue-950 font-medium hidden md:block ml-2">
          Portfolio
        </span>
      </div>
      <ul className="hidden md:flex flex-row items-center gap-6 text-blue-900 h-full">
        <li className="h-full flex items-center">
          <a href="#home" className="hover:text-blue-700">
            Accueil
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-700">
            A propos
          </a>
        </li>
        <li>
          <a href="#project" className="hover:text-blue-700">
            Projets
          </a>
        </li>
        <li className="">
          <a href="#github-projects" className="hover:text-blue-700">
            GitHub
          </a>
        </li>
      </ul>
      <div></div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: 'fixed',
          top: '5rem',
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: '#1D4ED8',
          zIndex: 40,
        }}
      />
    </nav>
  );
};

export default Navbar;

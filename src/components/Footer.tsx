import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import ReactTypingEffect from 'react-typing-effect';

const Footer = () => {
  const links = ['Accueil', 'À propos', 'Projets', 'GitHub'];
  const barRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <footer className="bg-stone-900 shadow-lg">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full mx-auto my-6 gap-8 px-4 lg:px-16">
        {/* Section Navigation */}
        <div className="w-full lg:w-1/3 p-4 flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl text-stone-100 text-start font-semibold my-4">
            Naviguez...
          </h2>

          <div className="flex justify-center w-full">
            <div className="flex flex-col space-y-2">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 justify-start lg:justify-center"
                >
                  {/* Barre statique */}
                  <motion.div
                    className="h-1 bg-stone-400 rounded"
                    ref={(el) => (barRef.current[index] = el)}
                    initial={{ width: '2rem' }}
                    animate={{ width: '2rem' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      transformOrigin: 'left center',
                      transform: 'scaleX(1)',
                    }}
                  />

                  {/* Lien */}
                  <motion.a
                    href="#"
                    className="text-white text-sm sm:text-lg"
                    onHoverStart={() => {
                      if (barRef.current[index]) {
                        barRef.current[index].style.transition =
                          'transform 0.3s ease-out';
                        barRef.current[index].style.transform = 'scaleX(2)';
                      }
                    }}
                    onHoverEnd={() => {
                      if (barRef.current[index]) {
                        barRef.current[index].style.transition =
                          'transform 0.3s ease-out';
                        barRef.current[index].style.transform = 'scaleX(1)';
                      }
                    }}
                    style={{
                      transition: 'transform 0.3s ease-out',
                    }}
                    whileHover={{
                      x: '2rem', // Le texte se déplace à droite
                      fontWeight: 'bold',
                    }}
                  >
                    {link}
                  </motion.a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Typing Effect */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="text-stone-50 text-xl sm:text-2xl font-semibold flex items-center justify-center">
            HyGoww
            <ReactTypingEffect
              text={['.fr', '.com', '.net', '.jerigoleuniquementle.frmarche']}
              speed={100} // Vitesse de saisie
              eraseDelay={2000} // Délai avant d'effacer
              typingDelay={500} // Délai avant de commencer à taper
              cursor="|" // Le curseur
            />
          </div>
        </div>

        {/* Section Description */}
        <div className="w-full lg:w-1/3 p-4 flex flex-col items-center lg:items-start justify-center gap-4">
          <p className="text-stone-100 text-center lg:text-left w-full mt-16">
            Merci d'avoir pris le temps de découvrir mon travail ! J'espère que
            vous avez apprécié l'exploration de mes projets. N'hésitez pas à me
            contacter si vous avez des questions ou si vous souhaitez collaborer
            sur de nouvelles idées passionnantes. Je suis toujours à la
            recherche de nouveaux défis et d'opportunités pour grandir et créer
            ensemble. À bientôt !
          </p>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="">
                <motion.img
                  src="public/x.png"
                  alt="Image X"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  whileHover={{ x: '0.6rem', rotate: 25 }}
                  transition={{ duration: 0.25 }}
                />
              </a>
            </li>
            <li>
              <a href="">
                <motion.img
                  src="public/github.png"
                  alt="Image Git"
                  className="h-8 w-8 sm:h-10 sm:w-10 filter invert brightness-100"
                  whileHover={{ x: '0.6rem', rotate: 25 }}
                  transition={{ duration: 0.25 }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Copyright */}
      <div className="py-4 text-center text-stone-300 text-sm sm:text-md">
        &copy; Copyright HyGoww 2025 - Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;

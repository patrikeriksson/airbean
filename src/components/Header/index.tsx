import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/Header.css";

const menuVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <button className="header__hamburger" onClick={toggleMenu}>
        <svg
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="26" height="2" rx="1" fill="#222222" />
          <rect y="9" width="26" height="2" rx="1" fill="#222222" />
          <rect y="18" width="26" height="2" rx="1" fill="#222222" />
        </svg>
      </button>

      <button className="header__cart">
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0486 4.04876V6.77232H5.95111V4.04876C5.95111 2.91726 6.86837 2 7.99988 2C9.13138 2 10.0486 2.91726 10.0486 4.04876ZM3.95111 4.04876C3.95111 1.81269 5.76381 0 7.99988 0C10.2359 0 12.0486 1.81269 12.0486 4.04876V6.77232V7.42274H13.5428C14.6103 7.42274 15.4897 8.26123 15.5405 9.32761L15.9978 18.9314C16.0521 20.0721 15.142 21.0266 14.0001 21.0266H2.00005C0.858129 21.0266 -0.0520048 20.0721 0.00231083 18.9314L0.459637 9.32761C0.510416 8.26123 1.38979 7.42274 2.45737 7.42274H3.95111V6.77232V4.04876ZM2.45737 9.42274H13.5428L14.0001 19.0266H2.00005L2.45737 9.42274Z"
            fill="white"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            variants={menuVariants}
            className="menu"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="menu__list">
              <NavLink to="/" onClick={toggleMenu}>
                <li className="menu__item">Meny</li>
              </NavLink>
              <NavLink to="/about" onClick={toggleMenu}>
                <li className="menu__item">Vårt kaffe</li>
              </NavLink>
              <NavLink to="/status" onClick={toggleMenu}>
                <li className="menu__item">Orderstatus</li>
              </NavLink>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

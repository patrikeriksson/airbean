import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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

type MenuProps = {
  toggleMenu: () => void;
};

export default function Menu({ toggleMenu }: MenuProps) {
  return (
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
  );
}

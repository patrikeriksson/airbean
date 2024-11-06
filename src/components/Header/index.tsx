import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Menu from "../Menu";
import "../../styles/Header.css";
import HamburgerButton from "../HamburgerButton";
import Cart from "../Cart";
import CartButton from "../CartButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <HamburgerButton toggleMenu={toggleMenu} />
      <CartButton toggleCart={toggleCart} />
      <AnimatePresence>
        {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
      </AnimatePresence>
      <AnimatePresence>{isCartOpen && <Cart />}</AnimatePresence>
    </header>
  );
}

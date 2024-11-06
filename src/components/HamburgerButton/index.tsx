type HamburgerButtonProps = {
  toggleMenu: () => void;
};

export default function HamburgerButton({ toggleMenu }: HamburgerButtonProps) {
  return (
    <button className="header__hamburger" onClick={toggleMenu}>
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
        <rect width="26" height="2" rx="1" fill="#222222" />
        <rect y="9" width="26" height="2" rx="1" fill="#222222" />
        <rect y="18" width="26" height="2" rx="1" fill="#222222" />
      </svg>
    </button>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Navbar({ setIsOpen }: Props) {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = ["Home", "Portfolio", "Services", "About"];

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 10px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine which section is in view
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection

      for (const item of navItems) {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(item);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Update active link when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(item);
            break;
          }
        }
      }
    }
  }, [isMenuOpen, navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navRef, setIsOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full right-0 z-50 py-5 flex items-center justify-between px-4 lg:px-50 sm:px-8 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-[#241b37]/90 backdrop-blur-sm"
          : "py-5 bg-transparent"
      }`}>
      {/* Logo */}
      <Link href="/">
        <h4 className="text-[16px] md:text-[28px] sm:text-[24px] text-white font-bold uppercase">
          36 Web<span className="text-[#6F51FF]">Solutions</span>.
        </h4>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-4">
        <ul className="flex rounded-xl space-x-8 bg-[#241b37] text-white px-5 py-3">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`${
                  activeLink === item
                    ? "bg-[#2F2641] p-2 px-3 font-medium "
                    : "font-medium text-[14px] px-1 py-1"
                }`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="text-[14px] py-3 cursor-pointer rounded-xl px-4 text-white uppercase font-semibold bg-gradient-to-t from-[#433199] to-[#8b55ff]">
          Place Order
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden corsur-pointer flex items-center justify-center text-white z-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#241b37] lg:hidden flex flex-col items-center justify-center space-y-8 z-[90]">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`text-lg ${
                  activeLink === item
                    ? "bg-[#2F2641] text-white p-3 px-6 font-medium rounded-lg"
                    : "font-medium text-white px-1 py-1"
                }`}>
                {item}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsOpen(true);
              }}
              className="text-lg py-3 cursor-pointer rounded-xl px-6 text-white uppercase font-semibold bg-gradient-to-t from-[#433199] to-[#8b55ff] mt-4">
              Place Order
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

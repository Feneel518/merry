"use client";

import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import Link from "next/link";

interface NavbarProps {}

const navItems = ["About", "Services", "Projects", "Contact"];

const Navbar: FC<NavbarProps> = ({}) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setisNavVisible(true);
      //   @ts-ignore
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setisNavVisible(false);
      //   @ts-ignore
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setisNavVisible(true);
      //   @ts-ignore
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4  z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 "
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <button
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="flex items-center gap-7"
          >
            <img src="/logo.svg" alt="logo" className="w-12 cursor-pointer" />
          </button>
          <div className="flex h-full items-center ">
            <div className="hidden  font-syne md:flex items-center gap-12 ">
              {navItems.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(
                      `${item.toLowerCase()}`
                    );
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="nav-hover-btn text-lg"
                >
                  <InteractiveHoverButton>{item}</InteractiveHoverButton>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

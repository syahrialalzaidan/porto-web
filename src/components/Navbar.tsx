"use client";
import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = -100; // Adjust this value based on your preference
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollTo = targetPosition + offset;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${
        scrolled ? "bg-[#161513] h-16" : "bg-transparent"
      } z-[100] text-white fixed top-0 start-0 border-gray-200 w-screen`}
    >
      <div className="max-w-screen-xl z-50 flex flex-wrap items-center justify-between mx-auto p-4 px-8">
        <a
          onClick={() => scrollToTop()}
          className="flex cursor-pointer justify-center gap-4 items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center z-50 title-gradient text-2xl font-semibold whitespace-nowrap dark:text-white">
            IYAL.
          </span>
        </a>
        <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm">
          <MenuIcon
            isOpen={open}
            handleToggle={() => setOpen((prev) => !prev)}
          />
        </div>

        <div
          className={`transform transition-transform duration-300 ease-in-out ${
            open ? "translate-y-0" : "-translate-y-full text-transparent"
          } md:translate-y-0 md:text-white w-full md:block md:w-auto`}
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border ${
              open ? "border-gray-100 bg-[#161513]" : "border-none"
            } md:bg-transparent rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}
          >
            <li onClick={() => scrollToTop()} className="cursor-pointer">
              <a
                className="block blur-0 py-2 px-3 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleSmoothScroll("tech")}
            >
              <a
                className="block py-2 blur-0 px-3 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Tech Stacks
              </a>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleSmoothScroll("project")}
            >
              <a
                className="block py-2 blur-0 px-3 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleSmoothScroll("experience")}
            >
              <a
                className="block py-2 blur-0 px-3 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Experience
              </a>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 768) {
                  open && scrollToBottom();
                } else {
                  scrollToBottom();
                }
              }}
            >
              <a
                className="block blur-0 py-2 px-3 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

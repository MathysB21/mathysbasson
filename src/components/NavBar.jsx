"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";

function NavBar() {
    // const scrollDirection = useScrollDirection();
    // const [isVisible, setIsVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis and store it in a ref
        lenisRef.current = new Lenis();

        // Request animation frame for Lenis
        const animate = (time) => {
            lenisRef.current.raf(time);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    });

    // Function to handle smooth scrolling
    const handleScrollTo = (target) => {
        lenisRef.current.scrollTo(target);
    };

    // Toggle navbar visibility based on scroll direction
    // useEffect(() => {
    //     if (scrollDirection === "down") {
    //         setIsVisible(false);
    //     } else if (scrollDirection === "up") {
    //         setIsVisible(true);
    //     }
    // }, [scrollDirection]);

    useEffect(() => {
        const handleScroll = () => {
            // Set the threshold for when the background should change
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setScrolled(true); // Add glassmorphic style when scrolled
            } else {
                setScrolled(false); // Keep it transparent before scroll
            }
        };

        // Add event listener on scroll
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clean up event listener on component unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`z-20 fixed flex justify-between w-screen p-10 items-center uppercase tracking-normal font-bold text-xs poppins ${
                scrolled
                    ? "bg-white/10 backdrop-blur-lg shadow-md transition-all duration-300 ease-in-out"
                    : "bg-transparent transition-all duration-300 ease-in-out"
            }`}
            // initial={{ y: 0 }}
            // animate={{ y: isVisible ? 0 : -80 }}
            // transition={{
            //     type: "spring",
            //     damping: 80,
            //     stiffness: 2000,
            // }}
        >
            <p className="">Mathys Basson</p>
            <div className="flex justify-between gap-11">
                <button
                    onClick={() => handleScrollTo("#work")}
                    className="hover-underline-animation left uppercase"
                >
                    Work
                </button>
                <button
                    onClick={() => handleScrollTo("#about")}
                    className="hover-underline-animation left uppercase"
                >
                    About
                </button>
                <button
                    onClick={() => handleScrollTo("#resume")}
                    className="hover-underline-animation left uppercase"
                >
                    Resume
                </button>
                <button
                    onClick={() => handleScrollTo("#contact")}
                    className="hover-underline-animation left uppercase"
                >
                    Contact
                </button>
            </div>
            <div className="flex justify-between gap-11">
                <Link
                    href="https://github.com/MathysB21"
                    className="hover-underline-animation left"
                >
                    GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mathys-basson-8b2730228/"
                    className="hover-underline-animation left"
                >
                    LinkedIn
                </Link>
            </div>
        </div>
    );
}

export default NavBar;

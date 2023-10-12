import Head from 'next/head'
import Image from 'next/image'
import Intro from "../components/Intro";
import About from "../components/About";
import Header from "../components/Header"
import Skills from "../components/Skill"
import { useEffect } from 'react';
import Portfolio from "../components/Portfolio";
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    // Observe the skills-container
    const skillsTarget = document.querySelector('div.skills-container');
    if (skillsTarget) {
      observer.observe(skillsTarget);
    }

    // Observe the intro section
    const introTargets = document.querySelectorAll('section');
    introTargets.forEach(elem => {
      observer.observe(elem);
    });

    // Cleanup on component unmount
    return () => {
      if (skillsTarget && skillsTarget instanceof Element) {
        observer.unobserve(skillsTarget);
      }
      introTargets.forEach(elem => {
        if (elem instanceof Element) {
          observer.unobserve(elem);
        }
      });
    };
  }, []);

  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

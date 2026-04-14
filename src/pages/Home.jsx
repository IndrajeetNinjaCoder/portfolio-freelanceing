import { useEffect } from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        const targets = document.querySelectorAll('.reveal');
        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Navbar />
            <Hero />
            <SocialProof />
            <Services />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </main>

    );
}
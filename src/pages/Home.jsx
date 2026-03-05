import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Education />
            <Skills />
        </main>
    );
};

export default Home;

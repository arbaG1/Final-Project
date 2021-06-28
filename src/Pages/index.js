import React, {useState} from 'react'
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Hero from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import Navbar from '../Components/Navbar'
import Services from '../Components/Services';
import SideBar from '../Components/SideBar';
import Teams from '../Components/Teams';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection />
            <Services />
            <Contact />
            <Teams />
            <Footer />
        </>
    )
}

export default Home

import React from 'react'
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Project from './Projects/Projects';
import TopSkills from './TopSkills/TopSkills';
import Contact from './Contact/Contact';
import TechnologyStack from './TechnologyStack/TechnologyStack';


const index = () => {
    return (
        <main>
            <Hero/>
            <Services/>
            <Project/>
            <TopSkills/>
            <TechnologyStack/>
            <Contact/>
        </main>
    )
}

export default index;

import React from 'react'
import styles from './hero.module.css';
import { HeroData } from '../../Data/heroData';
const Hero = () => {
    return (
        <section id="hero">
            {HeroData.map((item,index) => 
            <div key={index} className={styles.hero_container}>
                <div className={styles.hero_column}>
                    <div className={styles.hero_content}>
                       <h4>{item.intro}<span>{item.name}</span></h4>
                       <h2>{item.mainHeading}</h2>
                       <p>{item.about}</p>
                    </div>
                    <div className={styles.hero_button}>
                        <a href={item.GIT_link}><i className={item.GIT_symbol} aria-hidden="true"></i>Get in Touch</a>
                        <a href={item.VR_link} rel="noreferrer" target="_blank"><i className={item.VR_symbol} aria-hidden="true"></i>View Resume</a>
                    </div>
                </div>
                <div className={styles.hero_column}>
                    <img src={item.image} alt="hero"/>
                </div>
            </div>
            )}
        </section>
    )
}

export default Hero

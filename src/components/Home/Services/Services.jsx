import React from 'react'
import styles from './Services.module.css';
import {ServiceData} from '../../Data/serviceData';
const Services = () => {
    return (
            <section id="services">
                 <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Services &#x227B;'}}/>
                <div className={styles.service_block}>
                    {/* service blocks */}
                    {ServiceData.map((item , index) => 
                    <div key={index} className={styles.service_column}>
                        <div className={styles.service_image}>
                        <i className={item.symbol}></i>
                        </div>
                        <div className={styles.service_detail}>
                            <h3 className={styles.service_headline}>{item.title}</h3>
                            <p className={styles.service_text}>{item.detail}</p>
                        </div>
                    </div>
                    )}
                    {/* service blocks */}
                </div>
            </section>
    )
}

export default Services;

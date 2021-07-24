import React from 'react'
import styles from './Footer.module.css';
import {SocialData,ContactInfoData, MoreAboutMe} from '../Data/footerData';
const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_container}>
                {/* row starts here */}
                <div className={styles.footer_row}>

                    {/* fitst column of footer starts here  */}
                    <div className={styles.footer_column}>
                        <h3>More About Me</h3>
                        <p>{MoreAboutMe}</p>
                    </div>

                    {/* second column of footer starts here */}
                    <div className={styles.footer_column}>
                        <h3>Keep Connected</h3>
                        <div className={styles.footer_socials}>

                            {/* social links */}
                            {SocialData.map((item, index) => 
                                <a key={index} href={item.link} rel="noreferrer" target="_blank"><p><i style={{background: item.color}} className={item.symbol} aria-hidden="true"/>{item.text}</p></a>
                            )}
                             {/* social links */}
                             
                        </div>
                    </div>

                    {/* third column of footer starts here */}
                    <div className={styles.footer_column}>
                        <h3>Contact Information</h3>
                        <div className={styles.footer_contact}>

                            {/* contact detail information  */}
                            {ContactInfoData.map((item, index) => 
                            <p key={index}><i className={item.symbol} aria-hidden="true"/>{item.text}</p> 
                            )}
                            {/* contact detail information  */}
                           
                        </div>
                    </div>
                </div>
                {/* row ends here */}
                {/* bottom row starts here  */}
                <div className={styles.footer_row}>
                    @2021 Yogesh Bisht Portfolio. All Rights Reserved | Design by Yogesh Bisht
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';
import {langData,frontEndData,backendData,databaseData,otherData,softwareData} from '../../Data/technologyData'
import styles from './TechnologyStack.module.css';



const TechnologyStack = () => {
    return (
        <section id="technologyStack">
            <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Familiar Tech Stack &#x227B;'}}/>
            <div className={styles.technology_Container}>
                
                {/*Technology language Block */}
                <div className={styles.technology_block}>
                    <div className={styles.technology_subhead}>
                        <h2>Languages</h2>
                    </div>
                    <div className={styles.technology_row}>
                        {langData.map((lang,index) =>
                             <div key={index} className={styles.technology_column}>
                                <img src={lang.img} alt=""></img>
                                <p>{lang.name}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/*Technology Block */}
                {/*Technology front-end Block */}
                <div className={styles.technology_block}>
                    <div className={styles.technology_subhead}>
                        <h2>Front-End</h2>
                    </div>
                    <div className={styles.technology_row}>
                        {frontEndData.map((frontEnd,index) =>
                             <div key={index} className={styles.technology_column}>
                                <img src={frontEnd.img} alt=""></img>
                                <p>{frontEnd.name}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/*Technology Block */}
                {/*Technology backend Block */}
                <div className={styles.technology_block}>
                    <div className={styles.technology_subhead}>
                        <h2>Back-End</h2>
                    </div>
                    <div className={styles.technology_row}>
                        {backendData.map((backend,index) =>
                             <div key={index} className={styles.technology_column}>
                                <img src={backend.img} alt=""></img>
                                <p>{backend.name}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/*Technology Block */}
                {/*Technology database Block */}
                <div className={styles.technology_block}>
                    <div className={styles.technology_subhead}>
                        <h2>Database</h2>
                    </div>
                    <div className={styles.technology_row}>
                        {databaseData.map((db,index) =>
                             <div key={index} className={styles.technology_column}>
                                <img src={db.img} alt=""></img>
                                <p>{db.name}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/*Technology Block */}
                {/*Technology software Block */}
                <div className={styles.technology_block}>
                    <div className={styles.technology_subhead}>
                        <h2>Software</h2>
                    </div>
                    <div className={styles.technology_row}>
                        {softwareData.map((sd,index) =>
                             <div key={index} className={styles.technology_column}>
                                <img src={sd.img} alt=""></img>
                                <p>{sd.name}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/*Technology Block */}
                {/*Technology other Block */}
                <div className={styles.technology_block}>
                    <div className={styles.technology_subhead}>
                        <h2>others</h2>
                    </div>
                    <div className={styles.technology_row}>
                        {otherData.map((od,index) =>
                             <div key={index} className={styles.technology_column}>
                                <img src={od.img} alt=""></img>
                                <p>{od.name}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/*Technology Block */}
            </div>
        </section>
    )
}

export default TechnologyStack

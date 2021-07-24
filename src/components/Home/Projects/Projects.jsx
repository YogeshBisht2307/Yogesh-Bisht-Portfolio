import React from 'react'
import styles from './Projects.module.css';
import {projectData} from '../../Data/ProjectsData';
const Projects = () => {
    // const [bindIndex, setbindIndex] = React.useState([
    //     {
    //         id: "1",
    //         open:false,
    //     },
    //     {
    //         id: "2",
    //         open:false,
    //     },
    //     {
    //         id: "3",
    //         open:false,
    //     }
    // ]);
    // function handleClick(index){
    //     console.log(index)
    //     setbindIndex(bindIndex.map(item => 
    //         item.id === index 
    //         ? {...item ,open : true}
    //         : item
    //         )
    //     )
    // }
   
    return (
        // <section id="projects">
        //     <h2 style={{color:'white'}}>Projects</h2>
        //     <div className={styles.projects_container}>
        //         {/*  project second  */}
        //         {projectData.map((project,index) =>
        //         <div key={index} className={styles.projects_column}>
        //             <div className="course-img">
        //                 <img src={project.image}alt=""/>
        //             </div>
        //             <div className={styles.projects_body}>
        //                 <h4>{project.title}</h4>
        //                 <div className={styles.projects_detail}>
        //                     <p>{project.date}</p>
        //                     <button className={styles.projects_label} onClick={() => handleClick(project.id)}>Show More</button>
        //                 </div>
        //                 <div className={bindIndex.map(item => (item.open === true) ? styles.expended : styles.projects_collapsible_content )}>
        //                     <p>{project.detail}</p>
        //                 </div>
        //             </div>
        //             <div className={styles.projects_overlay}>
        //                 <p>{project.tech}</p>
        //             </div>
        //         </div>
        //         )}   
        //     </div>
        // </section>
        <section id="projects">
            <div className={styles.project_container}>
                <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Projects &#x227B;'}}/>
                { projectData.map((item, index) => 
                    <div key= {index} className={styles.project_row}>
                        <div className={styles.project_column}>
                            <img src={item.image} alt=""/>
                            <div className={styles.project_overlay}>
                                <p>{item.tech}</p>
                            </div>
                        </div>
                        <div className={styles.project_column}>
                            <div className={styles.project_topbar}>
                                <h2>{item.title}</h2>
                                <p>{item.date}</p>
                            </div>
                            <div className={styles.project_detail}>
                                <p>{item.detail}
                                </p>
                            </div>
                            <div className={styles.project_bottombar}>
                                <a rel="noreferrer" href={item.link} target="_blank">Show More</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects

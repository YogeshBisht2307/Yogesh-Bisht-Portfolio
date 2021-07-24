import React from 'react'
import {Bar} from 'react-chartjs-2';
import styles from './TopSkills.module.css';

const TopSkills= () => {
    const barChart = (
        <Bar
            data = {{
                    labels: ['Django', 'CSS', 'ReactJS', 'C++','Web UI design','PostgreSQL'],
                    datasets:[
                        {
                        label:'Top Skills',
                        backgroundColor:[
                        'rgba(38, 255, 78,1)',
                        'rgba(38, 114, 255,1)',
                        'rgba(22, 240, 214,1)',
                        'rgba(3, 144, 252,1)',
                        'rgba(252, 3, 227,1)',
                        'rgba(29, 21, 237,1)',
                        ],
                        data :[7,7,5,6,6,8],
                    }],
            }}
            options = {{
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 10
                    }
                }
            }}
            
        
        />
    )
    return (
        <section id="topSkill">
            <h1 className="heading" dangerouslySetInnerHTML={{__html: '&#x227A; Top Skills &#x227B;'}}/>
            <div className={styles.topSkill_container}>
                {barChart}
            </div>
        </section>
    )
}

export default TopSkills

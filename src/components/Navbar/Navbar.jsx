import React,{useState,useCallback} from 'react'
import styles from './Navbar.module.css';
import 'font-awesome/css/font-awesome.min.css';
import LogoImage from '../images/logo.jpg';
import { menuItems } from '../Data/navData';

const NavLink = ({id, text, link, symbol,onClick, isActive}) =>(
    <a onClick={useCallback(() => onClick(id),[id, onClick])
    }
    className={isActive ? styles.active : ""} href={link}><i className={symbol}></i>{text}</a>
)

const Navbar = () => {
    const [active, setActive] = useState(0);
    return (
        <nav>
            <div className={styles.nav_container}>
                <div className={styles.nav_column}>
                   <img src={LogoImage} alt="logo"/>
                </div>
                <div className={styles.nav_column}>
                   {menuItems.map((item,index) => (
                        <li key={index}>
                            <NavLink 
                            {...item}
                            onClick={setActive} 
                            isActive={active === item.id}
                             />
                        </li> 
                   ))}
                </div>
                <div className={styles.nav_column}>
                    <a rel="noreferrer" href="https://www.fiverr.com/yogeshbisht23?up_rollout=true" target="_blank">Hire me!</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

import { useState } from 'react';

import {Link} from 'react-router-dom'

import { IoMdMenu } from "react-icons/io";

import styles from './Navbar.module.css'

const Navbar = () => {
    const [isClicked,setIsClicked ]= useState(false)

    const onClickMenuBtn = () => {
        setIsClicked(prevIsClicked=> !prevIsClicked)
    }

    return (
      <>
         <nav className={styles.navbar}>
                     <img alt="logo" className={styles.logoImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750338838/2fdcf92ce27321079a9002edc684fad273c7e610_1_birzaj.png"/>
                    <ul className={styles.listContainer}>
                       <Link to="/" className={styles.navLink}> <li className={styles.listEle}>AboutUs</li> </Link>
                       <Link to="/services" className={styles.navLink}> <li className={styles.listEle}>Services</li> </Link>
                       <Link to="/projects" className={styles.navLink}> <li className={styles.listEle}>Projects</li> </Link>
                        <Link to="/careers" className={styles.navLink} ><li className={styles.listEle}>Careers</li> </Link>
                        <Link to="/contactUs"  className={styles.navLink} ><button className={styles.contactUs}>Contact us</button> </Link>
                    </ul>
             <div className={styles.menuContainer}> 
            <button type='button'onClick={onClickMenuBtn} className={styles.menuBtn}><IoMdMenu size={35} /> </button> 
             </div>
        </nav>
        {isClicked && <ul className={styles.sideBar}>
                <Link to="/" className={styles.navLink}><li className={styles.navEle}>About</li></Link>
               <Link to="/services" className={styles.navLink}> <li className={styles.navEle}>Services</li></Link>
                <Link to="/projects" className={styles.navLink}> <li className={styles.navEle}>Projects</li> </Link>
                <Link to="/careers" className={styles.navLink} ><li className={styles.navEle}>Careers</li></Link>
               <Link to="/contactUs"  className={styles.navLink} > <li className={styles.navEle}>ContactUs</li></Link>
             </ul>}
      </>
       
    )

}

export default Navbar
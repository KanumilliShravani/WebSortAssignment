import React from "react";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Navbar from '../Navbar'

import BottomBar from '../BottomBar'

import styles from './Project.module.css'

const Projects = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    return (
        <>
        <Navbar/>
        <div className={styles.appContainer}>
        <div className={styles.projectsContainer}>
         <h1 className={styles.projectHeading}>Our Project</h1>
           <Slider {...settings} className={styles.sliderContainer}>
      <div className={styles.projectCard}>
        <img alt="UIUX" className={styles.projectImgs} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750426505/09301d3daf6cd4d731199dc2e4fb42fd1f0cfb3a_1_mzp8fb.jpg"  />
        <h1 className={styles.projectHeading}>UI/UX Design</h1>
      </div>
      <div className={styles.projectCard}>
        <img alt="web" className={styles.projectImgs} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414812/21d036cf8bc9bfa4c090115c6327ddb637ff0f43_xtbmai.jpg"/>
        <h1 className={styles.projectHeading}>Web Development</h1>
      </div>
      <div className={styles.projectCard}>
        <img alt="app" className={styles.projectImgs}  src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/aa65fe867c31b42c007cd24e67e251d288917393_u0j5kb.jpg"/>
        <h1 className={styles.projectHeading}>App Development</h1>
      </div>
      <div>
       <img alt="digital" className={styles.projectImgs} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/055c1fe8a92fb48ac917a89f08452005d34671dd_loesh4.jpg"/>
        <h1 className={styles.projectHeading}>Digital Marketing</h1>
      </div>
     
    </Slider>
        
        </div>
        <BottomBar/>
        </div>
        </>
    )
}

export default Projects
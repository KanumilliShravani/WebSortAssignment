import BottomBar from '../BottomBar'
import Navbar from '../Navbar'

import styles from './Services.module.css'

const Services = () => {

    return (
        <>
        <Navbar />
        <div className={styles.servicesContainer}>
        <div className={styles.topCard}>
         <h1 className={styles.servicesHeading}>Our Services</h1>
         <div className={styles.topContainer}>
            <img className={styles.servicesImgs} alt='UIUX' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750413641/09301d3daf6cd4d731199dc2e4fb42fd1f0cfb3a_rjurak.jpg"/>
            <div className={styles.servicesTextCard}>
                <h1 className={styles.cardHeading}>UI/UX Design</h1>
                <p className={styles.cardText}>We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.</p>
                <button type="button" className={styles.knowMoreBtn}>Know More</button>
            </div>
         </div>
         <div className={styles.topContainer}>
          <div  className={styles.webServicesTextCard}> 
            <h1  className={styles.cardHeading}>Web Development</h1>
            <p className={styles.cardText} >Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.</p>
             <button type="button" className={styles.knowMoreBtn}>Know More</button>
          </div>
          <img  className={styles.servicesImgs} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/055c1fe8a92fb48ac917a89f08452005d34671dd_loesh4.jpg" alt='web' />
         </div>
         </div>
         <div className={styles.appServicContainer}>
           <img className={styles.servicesImgs} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/aa65fe867c31b42c007cd24e67e251d288917393_u0j5kb.jpg" alt="app" />
           <div className={styles.servicesTextCard}>
            <h1  className={styles.cardHeading}>App Development</h1>
            <p className={styles.cardText}>Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience.</p>
             <button type="button" className={styles.knowMoreBtn}>Know More</button>
           </div>
         </div>
        <div className={styles.digitContainer}>
         <div className={styles.webServicesTextCard}>
            <h1 className={styles.cardHeading}>Digital Marketing</h1>
            <p  className={styles.cardText} >Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement.</p>
             <button type="button" className={styles.knowMoreBtn}>Know More</button>
         </div>
         <img className={styles.servicesImgs} src='https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414812/21d036cf8bc9bfa4c090115c6327ddb637ff0f43_xtbmai.jpg' alt='digital' />
        </div>
        <BottomBar />
        </div>
        
        </>
    )
}

export default Services
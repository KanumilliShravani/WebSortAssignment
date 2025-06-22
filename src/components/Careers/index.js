import Navbar from '../Navbar'

import BottomBar from '../BottomBar'

import styles from './Career.module.css'

const Carrers = () => {

    return (
        <>
        <Navbar/>
        <div className={styles.carrersContainer}> 
         <div className={styles.imageContainer}>
           <div className={styles.textConatiner}>
            <p className={styles.largeText}>Talent wins games, but teamwork and intelligence win championships.</p>
            <p className={styles.smallText}>At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.</p>
           </div>
           <img  className={styles.carrerImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750351521/f0b0e513ed92da4db884e3b615e4df7f6941a652_xfxr7s.png" alt='carrer' />
            <p className={styles.smallTextSm}>At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.</p>
         </div>
         <div className={styles.internContainer}>
         <h1 className={styles.internHeading}>Internship Opportunities at Websort</h1>
         <div className={styles.internImagesContainer}>
           <div className={styles.internSub}>
          <img alt="marketing" className={styles.internImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750402209/73ed4afd2616d4adc1c05092ea7967cc17097d10_f0rdfl.png"/>
          <p className={styles.internText}>Marketing</p>
         </div>
         <div className={styles.internSub}>
          <img alt='app'className={styles.internImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750402964/b187a314685bcf305fbd414638ad8b02050eee06_xy8zae.png"/>
          <p  className={styles.internText}>App Development</p>
         </div>
          <div className={styles.internSub}>
          <img alt='web'className={styles.internImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750402964/d788a50edaf4a0f1443908273d2d7b632a94fef4_lgsejn.png"/>
          <p  className={styles.internText}>Web Development</p>
         </div>
          <div className={styles.internSub}>
          <img alt='UIUX'className={styles.internImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750402963/519d3b0ecaef0d74b9cd1f9f24822515a7fbade3_fsmafj.png"/>
          <p  className={styles.internText}>UI/UX</p>
         </div>
         </div>
         </div>
         <div className={styles.formContainer}>
        <h1 className={styles.formHeadText}>Need support or want to collaborate?</h1>
         <p className={styles.formText}>Fill out the form and our team will get back to you shortly</p>
         <div className={styles.formEleContainer}>
         <div className={styles.inpputContainer}>
          <p className={styles.labelEle}>First Name</p>
          <input className={styles.inputEle} />
          </div>
           <div className={styles.inpputContainer}>
          <p className={styles.labelEle}>Second Name</p>
          <input className={styles.inputEle} />
          </div>
           <div className={styles.inpputContainer}>
          <p className={styles.labelEle}>Email Address</p>
          <input className={styles.inputEle} />
          </div>
           <div className={styles.inpputContainer}>
          <p className={styles.labelEle}>Phone</p>
          <input className={styles.inputEle} />
          </div>
           <div className={styles.inpputContainer}>
          <p className={styles.labelEle}>Company</p>
          <input className={styles.inputEle} />
          </div>
           <div className={styles.inpputContainer}>
          <p className={styles.labelEle}>Message</p>
          <input className={styles.msgEle} />
          </div>
         </div>
         <button type='button' className={styles.submitBtn}>Submit</button>
         </div>
         <BottomBar />
        </div>
        </>
    )

}

export default Carrers
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io";

import styles from './Bottom.module.css'

const BottomBar = () => {
   return (
    <>
    <div className={styles.bottomCard}>
          <img src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750405540/2fdcf92ce27321079a9002edc684fad273c7e610_3_p87bj4.png" alt='logo' className={styles.logoImg}/>
         <div className={styles.iconsCard}>
          <p className={styles.addressText}>Web Development | App Development | UI/UX Design | Digital Marketing <br/>
           Based in Bangalore | ✉️ contact@websort.com | 📞 +91-XXXXXXXXXX</p>
          <div className={styles.iconsContainer}>
          <FcGoogle className={styles.icons} size={25} />
          <FaInstagram className={`${styles.icons}${styles.faceIcon}`} size={25} />
          <IoLogoFacebook className={`${styles.icons}${styles.instIcon}`} size={25}/>
          </div>
         </div>
         </div>
         <div className={styles.lastCard}>
         <p className={styles.copyText}>© 2025 Websort. All rights reserved.</p>
         </div>
    </>
   )
}

export default BottomBar
import Navbar from '../Navbar'

import BottomBar from '../BottomBar'

import styles from './Contact.module.css'

const Contact = () => {

    return (
        <>
        <Navbar/>
        <div className={styles.contactContainer}>
         <div className={styles.topCard}>
          <div className={styles.textCard}>
            <h1 className={styles.textTitle}>Contact Us</h1>
            <p className={styles.textBox}>Have a question, idea, or project in mind? We're here to help — get in touch with us today.</p>
          </div>
         </div>
         <div className={styles.bottomCard}>
        <div className={styles.formCard}>
        <h1 className={styles.formHeading}>Need support or want to collaborate?</h1>
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
        <h1 className={styles.addressText}>Address</h1>
        <div className={styles.addressContainer}>
            <img className={styles.addressImg} alt='address'  src='https://res.cloudinary.com/dqkvvulgz/image/upload/v1750421250/53df22aa4628369d85ef023faa23ee6ffad98914_j8htvq.png'/>
            <div className={styles.addressBox}>
                <p className={styles.addText}>Based in Bangalore | contact@websort.com +91-XXXXXXXXXX</p>
            </div>
        </div>
        </div>
         <BottomBar/>
         </div>
       
        </>
    )
}

export  default Contact
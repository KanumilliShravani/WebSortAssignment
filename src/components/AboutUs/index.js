import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar  from '../Navbar'

import BottomBar from '../BottomBar'

import styles from './AboutUs.module.css'

const AboutUs = () => {

      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  };

    return (
        <>
        <Navbar />
        <div className={styles.homeContainer}>
           <div className={styles.container}>
            <div className={styles.textContainer}>
            <h1 className={styles.heading}>Digitizing Ideas with Clean Code & Modern Design</h1>
            <p className={styles.paragraph}>At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.</p>
            <div>
                <button className={styles.colorlessBtn}>Contact Us</button>
                <button className={styles.colorlessBtn}>Know More</button>
            </div>
           </div>
           <div className={styles.aboutUsContainer}>
            <h1 className={styles.aboutUsText}>About Us</h1>
            <div className={styles.aboutUsCard}>
                <h1 className={styles.heading}>Where Innovation Meets Execution</h1>
                <div className={styles.textCard}>
                    <p className={styles.paragraph}>Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results.We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.</p>
                    <button className={styles.colorlessBtn}>Know More</button>
                </div>
            </div>
           </div>
          </div>
            <div className={styles.ourProjectContainer}>
              <p className={styles.ourProjectTExt}>Our Project</p>
              <div className={styles.projectCardsContainer}>
                <div className={styles.projectCard}>
                    <img alt='app' className={styles.projectCardImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/aa65fe867c31b42c007cd24e67e251d288917393_u0j5kb.jpg"/>
                    <button type='button' className={styles.projectCardBtn}>App Development</button>
                </div>
                <div className={styles.projectCard}>
                    <img src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750413641/09301d3daf6cd4d731199dc2e4fb42fd1f0cfb3a_rjurak.jpg" alt='UI?UX' className={styles.projectCardImgPink} />
                    <button type='button' className={styles.projectCardBtnPink}>UI/UX Design</button>
                </div>
                <div className={styles.projectCard}>
                    <img src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/055c1fe8a92fb48ac917a89f08452005d34671dd_loesh4.jpg" alt="web" className={styles.projectCardImg}/>
                    <button type="button" className={styles.projectCardBtn}>Web Development</button>
                </div>
              </div>
           </div>
          <div className={styles.futureContainer}>
          <p className={styles.ourProjectTExt}>Fueling the Future with Innovation</p>
           <Slider {...settings} className={styles.sliderContainer}>
      <div  className={styles.carouselCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.carouselImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750486490/8b42fb6448b4bd24aae783308ee3e6c87fd6ea24_nt23jh.png" alt="AI and IoT" />
       <div className={styles.overlay}/>
        <div className={styles.paragraphCarosel}>
          <p>AI and IoT-driven products</p>
        </div>
         </div>
      </div>
       <div  className={styles.carouselCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.carouselImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750516984/99c71398ecb55dd4252e6d6462d38947682b7cec_dhs3bd.png" alt="" />
       <div className={styles.overlay}/>
        <div className={styles.paragraphCarosel}>
          <p>Creating a tech community hub for developers and entrepreneurs</p>
        </div>
         </div>
      </div>
       <div  className={styles.carouselCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.carouselImg} src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750516957/f5ef6c41417f157c2adf6636fdd5962a62f08fc8_mud08u.png" alt="" />
       <div className={styles.overlay}/>
        <div className={styles.paragraphCarosel}>
          <p>Creating a tech community hub for developers and entrepreneurs</p>
        </div>
         </div>
      </div>
     
    </Slider>
          </div>
          <div className={styles.seeOurWorkCard}>
             <h1 className={styles.seeOurTextSm}>See Our Work in Web Design & Development</h1>
           <div className={styles.seeOurWorkContainer}>
            <h1 className={styles.seeOurText}>See Our Work in Web Design & Development</h1>
            <p className={styles.paragraph}>We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.</p>
            <button className={styles.colorlessBtn}>Know More</button>
           </div>
             <img src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750486489/ab1646f8fce6d2d3c5d9f74f53dc0f4b9373c45a_fconlh.png" alt="work" className={styles.seeOurImg}/>        
           </div>
        <div className={styles.whyWeContainer}>
         <div className={styles.seeOurWorkContainer}>
            <h1  className={styles.whyWeText}>Why We Stand Out</h1>
            <p  className={styles.whyWeDesc}>At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.</p>
         </div>
         <img src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750486486/6afdf3aef40aa3f791ec415881544cf6f679ab71_j0cttu.png" alt="bulb" className={styles.whyWeImg}/>   <p  className={styles.whyWeDescSm}>At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.</p>
        </div>
        <div className={styles.acheievmentsCard}>
        <h1 className={styles.achiveText}>One of our proudest achievements.</h1>
        <p className={styles.paragraph}>A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution. It's a true reflection of our commitment to excellence.</p>
        <div className={styles.imageCardsContainer}>
            <div className={styles.seeOurWorkContainer}>
            <img alt='web' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414812/21d036cf8bc9bfa4c090115c6327ddb637ff0f43_xtbmai.jpg" className={styles.cardImages}/>
             <h1 className={styles.aboutUsText}>Web Development</h1>
                <button className={styles.buttonExplore}>Explore More</button>
            </div>
            <div className={styles.seeOurWorkContainer}>
                <img alt='app' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/aa65fe867c31b42c007cd24e67e251d288917393_u0j5kb.jpg" className={styles.cardImages}/>
                <h1 className={styles.aboutUsText}>App Development</h1>
                <button className={styles.buttonExplore}>Explore More</button>
            </div>
            <div className={styles.seeOurWorkContainer}>
                <img alt='digital' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750491364/8636492b76d6043bc55892f563bec6e171a63b66_laxqxt.jpg" className={styles.cardImages}/>
                <h1 className={styles.aboutUsText}>Digital Marketing</h1>
                <button className={styles.buttonExplore}>Explore More</button>
            </div>
        </div>
        <Slider {...settings} className={styles.sliderImageCardsContainer}>
            <div className={styles.seeOurWorkContainer}>
            <img alt='web' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414812/21d036cf8bc9bfa4c090115c6327ddb637ff0f43_xtbmai.jpg" className={styles.cardImages}/>
             <h1 className={styles.aboutUsText}>Web Development</h1>
                <button className={styles.buttonExplore}>Explore More</button>
            </div>
            <div className={styles.seeOurWorkContainer}>
                <img alt='app' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750414533/aa65fe867c31b42c007cd24e67e251d288917393_u0j5kb.jpg" className={styles.cardImages}/>
                <h1 className={styles.aboutUsText}>App Development</h1>
                <button className={styles.buttonExplore}>Explore More</button>
            </div>
            <div className={styles.seeOurWorkContainer}>
                <img alt='digital' src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1750491364/8636492b76d6043bc55892f563bec6e171a63b66_laxqxt.jpg" className={styles.cardImages}/>
                <h1 className={styles.aboutUsText}>Digital Marketing</h1>
                <button className={styles.buttonExplore}>Explore More</button>
            </div>
        </Slider>
        </div>
        <div className={styles.linearGradinetBox}></div>
        <div className={styles.homeFormContainer}>
        <h1 className={styles.aboutUsText}>Questions?<br/> We're here<br/> to answer them!</h1>
        <div className={styles.homeformCard}>
            <div className={styles.formCard}>
         <div className={styles.inputCard}>
            <p className={styles.labelText}>Name</p>
            <input className={styles.inputEle} />
         </div>
           <div className={styles.inputCard}>
            <p className={styles.labelText}>Email</p>
            <input className={styles.inputEle} />
         </div>
           <div className={styles.inputCard}>
            <p className={styles.labelText}>Number</p>
            <input className={styles.inputEle} />
         </div>
           <div className={styles.inputCard}>
            <p className={styles.labelText}>Message</p>
            <input className={styles.inputEleBox} />
         </div>
       </div>
          <button className={styles.submitBtn}>Submit</button>
        </div>
       </div>
         <div className={styles.exploreCard}>
         <h1 className={styles.aboutUsText}>See what opportunities await you</h1>
         <button className={styles.purpleBtn}>Explore More</button>
        </div>
         <BottomBar/>
        </div>
       
        </>
    )
}

export default AboutUs
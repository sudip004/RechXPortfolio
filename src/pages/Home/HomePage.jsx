import React, { useState } from 'react'
import styles from './Homepage.module.css';
import HeaderPage from '../../components/Header/HeaderPage';
import demo from "../../assets/demo.png"
import { toast } from 'react-toastify';


const HomePage = () => {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[message,setMessage] = useState("");

  const handelSubmit = (e) => {
    if(!name || !email || !message){
      toast.error("Please Fill All The Fields");
      return;
    }
    e.preventDefault();
    console.log("Form Submitted");
    toast.success(" Success! Our Team Will Contact Soon.");
    
  }

  return (
    <>
      <HeaderPage />
      <div id='home' className={styles.firstContainer}>
        <div className={styles.firstLeft}>
          <h1>
            Empowering <span>Businesses</span> with IT Solutions
          </h1>
          <p>
            We provide cost-effective digital marketing, staffing, recruitment,
            sales, and web development services to help small and mid-sized
            businesses thrive in today’s competitive world.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>Get in Touch</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>

        <div className={styles.firstRight}>
          <img src={demo} alt="Business Solutions" className={styles.firstBanner} />
          <div className={styles.bannerOverlay}></div>
        </div>
      </div>

      <div id='services' className={styles.secondContainer}>
        <div className={styles.secleft}>
          <h2><span>Our</span> Amazing Services</h2>
          <p>We agree that success is a journey, not a destination. To achieve outstanding outcomes, we constantly aspire to raise the bar for ourselves and our customers.</p>
          <button>View More Service</button>
        </div>
        <div className={styles.secright}>
          <div className={styles.cardmenu}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hansrajventures-b8dea.appspot.com/o/ServiceImages%2Fimage1_Recruitment.png?alt=media&token=ca805855-6554-4e6e-9fc1-eff6cb6ae154" alt="" />
            <h3>Web Development</h3>
          </div>
          <div className={styles.cardmenu}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hansrajventures-b8dea.appspot.com/o/ServiceImages%2Fimage1_Payroll.png?alt=media&token=fcc42ece-3bc4-4a3a-b390-0fc2da7db5df" alt="" />
            <h3>Web Development</h3>
          </div>
          <div className={styles.cardmenu}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hansrajventures-b8dea.appspot.com/o/ServiceImages%2Fimage1_Sales.png?alt=media&token=b310485d-079a-47ed-9fa8-1abb41314bdd" alt="" />
            <h3>Web Development</h3>
          </div>
          <div className={styles.cardmenu}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hansrajventures-b8dea.appspot.com/o/ServiceImages%2Fimage1_TeamSetup.png?alt=media&token=b94ecfd9-e80e-449f-a4c3-f69c182a6bfe" alt="" />
            <h3>Web Development</h3>
          </div>
          <div className={styles.cardmenu}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hansrajventures-b8dea.appspot.com/o/ServiceImages%2Fimage1_OperationManagement.png?alt=media&token=25c10bc4-1cd6-4b86-86a8-d066ddb0d0bc" alt="" />
            <h3>Web Development</h3>
          </div>
          <div className={styles.cardmenu}>
            <img src="https://firebasestorage.googleapis.com/v0/b/hansrajventures-b8dea.appspot.com/o/ServiceImages%2Fimage1_WebApp.png?alt=media&token=c4761b1b-caa0-43fe-94c5-7c23823dd03e" alt="" />
            <h3>Web Development</h3>
          </div>
        </div>

      </div>
      <div id='contact' className={styles.thirdContainer}>
        <h2>Contact <span>Us</span></h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type='submit' onClick={handelSubmit}>Send Message</button>
        </form>
      </div>
      <div id='about' className={styles.fourthContainer}>
        <div className={styles.aboutLeft}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/hansrajventures-b8dea.appspot.com/o/ServiceImages%2Fimage1_TeamSetup.png?alt=media&token=b94ecfd9-e80e-449f-a4c3-f69c182a6bfe"
            alt="About Us"
          />
        </div>
        <div className={styles.aboutRight}>
          <h2>About <span>Us</span></h2>
          <p>
            At Hansraj Ventures, we are dedicated to delivering IT solutions that help
            businesses grow and succeed. With expertise in staffing, recruitment,
            digital marketing, and web development, our mission is to create value and
            drive performance for our clients.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div id='review' className={styles.sixthContainer}>
        <h2>Customer <span>Reviews</span></h2>

        {/* Existing Reviews */}
        <div className={styles.reviewContainer}>
          <div className={styles.reviewCard}>
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Customer"
            />
            <h3>John Doe</h3>
            <p>"Great service! The team was professional and helped my business grow."</p>
          </div>
          <div className={styles.reviewCard}>
            <img
              src="https://i.pravatar.cc/80?img=2"
              alt="Customer"
            />
            <h3>Sarah Smith</h3>
            <p>"Amazing experience, very supportive staff and fast response time."</p>
          </div>
          <div className={styles.reviewCard}>
            <img
              src="https://i.pravatar.cc/80?img=3"
              alt="Customer"
            />
            <h3>David Lee</h3>
            <p>"I highly recommend their IT solutions, cost-effective and reliable."</p>
          </div>
        </div>

        {/* Write Review */}
        <div className={styles.writeReview}>
          <h3>Write Your Review</h3>
          <form className={styles.reviewForm}>
            <input type="text" placeholder="Your Name" />
            <textarea placeholder="Your Review"></textarea>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
      <div id='faq' className={styles.sevenContainer}>
        <img src="https://www.hansrajventures.com/assets/PersonAsset1-IH9jLgpF.webp" alt="" />
        <div>
          <h2><span>Why</span></h2>
          <h2>Choose US</h2>
          <p>Our full fledged management service firm helps business owners to opt for the best services that will help them grow. At the same time, business owners can boost their acquisition stats, market share and brand credibility. Hence, we are at forefront to help business owners from around the world by helping them with resources to choose the service that meets their specific requirements. We also serve as an unparalleled platform for companies to put their best foot forward. Hansraj Ventures, is a treasury of the globe's most prominent, efficient, and top-performing management solutions.</p>

        </div>
      </div>



      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <h2> SUDIP <span>BASAK</span></h2>
          <p>Empowering businesses with IT solutions and digital services.</p>
          <p>Call Me : +91 8509870013</p>
        </div>

        <div className={styles.footerMiddle}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className={styles.footerRight}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 SUdip Basak. All rights reserved.</p>
      </div>


    </>
  )
}

export default HomePage
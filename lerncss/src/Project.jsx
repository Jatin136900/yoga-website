import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlCalender } from "react-icons/sl";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaMapMarkerAlt, FaUser, FaPhoneAlt, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import style from "./css/index.module.css";
import CountUp from "react-countup";

export default function Project() {
  const bannerImages = [
    "/src/images/banner.png",
    "/src/images/banner.png",
    "/src/images/banner.png"
  ];

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!");
  };

  return (
    <div>
      <header className={style.mainHeader}>
        <div className={style.topBar}>
          <div className={style.logo}>
            <img src="/src/images/logo.png" alt="Logo" />
          </div>

          <nav className={style.navBar}>
            <ul className={style.navLinks}>
              <a href=""><li className={style.highlight}>Home</li></a>
              <a href=""><li>Live Event</li></a>
              <a href=""><li>About</li></a>
              <a href=""><li>Contact</li></a>
            </ul>
            <div className={style.orgLogos}>
              <a href=""><img src="/src/images/frame.png" alt="Org1" /></a>
              <a href=""><img src="/src/images/frame1.png" alt="Org2" /></a>
              <a href=""><img src="/src/images/frame2.png" alt="Org3" /></a>
            </div>
          </nav>
        </div>
      </header>

      <div className={style.bannerSlider}>
        <Slider {...bannerSettings}>
          {bannerImages.map((src, index) => (
            <div key={index}>
              <img src={src} alt={"Banner " + (index + 1)} className={style.bannerImage} />
            </div>
          ))}
        </Slider>
      </div>


      <div className={style.box}>
        <h1 className={style.text}>Current Event</h1>
        <div className={style.box2}>
          {[...Array(6)].map((_, i) => (
            <div className={style.box1} key={i}>
              <h1>Total Body Yoga Stretch Pose</h1>
              <hr />
              <p><SlCalender /> 12-Nov - 2024 2:30 PM</p>
              <p> <HiMiniUserGroup />120 participants</p>
              <p><FaMapMarkerAlt /> 69 /421 Near ICICI Bank, Heerapath, Mansarovar, Jaipur, Rajasthan</p>
              <button>View Competition →</button>
            </div>
          ))}
        </div>
      </div>


      <section className={style.hulk10}>
        <div className={style.aboutSection}>
          <div className={style.imageGrid}>
            <img src="/src/images/about-img.png" alt="" />
          </div>

          <div className={style.contentArea}>
            <h2>About Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ḍ Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className={style.stats}>
              <div className={style.statCard}>
                <div className={style.statTop}>
                  <HiMiniUserGroup /> <p><CountUp start={0} end={10000} duration={2.5} separator="," />+</p>
                </div>
                <p>Registered Players</p>
              </div>

              <div className={style.statCard}>
                <div className={style.statTop}>
                  <HiMiniUserGroup /> <p> <CountUp start={0} end={500} duration={2.5} />+</p>
                </div>
                <p>Affiliated Units</p>
              </div>

              <div className={style.statCard}>
                <div className={style.statTop}>
                  <HiMiniUserGroup /> <p> <CountUp start={0} end={500} duration={2.5} />+</p>
                </div>
                <p>Affiliated Units</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={style.hulk11}>
        <div className={style.hulk12}>
          <h1>Overview</h1>
          <a href=""><button>View ALL →</button></a>
        </div>
        <div className={style.hulkimg}>
          {["image (2).png", "image-1 (2).png", "image-3.png", "image-4.png", "image-5.png", "image-6.png", "image-7.png", "image-8.png", "image-9.png", "image-2.png"].map((img, i) => (
            <div key={i}><img src={`/src/images/${img}`} alt="" /></div>
          ))}
        </div>
      </section>

      <section className={style.Testimonials}>
        <div className={style.iron1}>
          <h1>Testimonials What They Say</h1>
        </div>

        <div className={style.iron2}>
          {[...Array(12)].map((_, i) => (
            <div className={style.iron3} key={i}>
              <img src="/src/images/tester.png" alt="" />
              <p>
                “Participating in the Yogasana Premier League was an incredible experience! The combination of yoga with competitive elements and entertainment made it exciting and engaging.”
              </p>
              <h3>Jatin Verma</h3>
              <span>Corporate Wellness Participant</span>
            </div>
          ))}
        </div>
      </section>


      <section className={style.iron20}>
        <div className={style.container}>
          <div className={style.leftImage}>
            <img src="/src/images/Mask group.png" alt="" />
          </div>


          <div className={style.contactForm}>
            <h2>
              Feel free to contact us for any <br /> kind of information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className={style.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className={style.icon}><FaUser /></span>
              </div>

              <div className={style.row}>
                <div className={style.inputGroup}>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                  <span className={style.icon}><FaPhoneAlt /></span>
                </div>
                <div className={style.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className={style.icon}><FaEnvelope /></span>
                </div>
              </div>

              <div className={style.inputGroup}>
                <input
                  type="text"
                  name="message"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <span className={style.icon}><FaRegCommentDots /></span>
              </div>

              <button type="submit" className={style.btn}>Send Message</button>
            </form>
          </div>

          <div className={style.contactInfo}>
            <h2>How to Contact <span>Us</span></h2>
            <div className={style.infoItem}>
              <FaPhoneAlt /> <div><p>Contact Us</p><span>+91 7737117757</span></div>
            </div>
            <hr />
            <div className={style.infoItem}>
              <FaEnvelope /> <div><p>Email Address</p><span>Design@gmail.com</span></div>
            </div>
            <hr />
            <div className={style.infoItem}>
              <FaMapMarkerAlt /> <div><p>Office Address</p><span>69/421 Near ICICI Bank, Jaipur</span></div>
            </div>
            <hr />
          </div>
        </div>
      </section>





      <section className={style.footer}>
        <div className={style.footerContainer}>

          <div className={style.footerCol}>
            <h4>Download Yogasana Ranking System app</h4>
            <a href="#">
              <img src="/src/images/play img.png" alt="" />

            </a>
            <div className={style.socialIcons}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>


          <div className={style.footerCol}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>


          <div className={style.footerCol}>
            <h4>Other Links</h4>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>


          <div className={style.footerCol}>
            <h4>Stay Connected</h4>
            <p>jeevijay space accommodation private limited</p>
            <p>
              22, Second Floor Behind Modern Petrol pump,<br />
              Near Gumanpura Police station, kota 3240
            </p>
          </div>
        </div>


        <div className={style.footerBottom}>
          <p>Copyright © 2025. All Rights Reserved By Yogasana Ranking System</p>
        </div>
      </section>





    </div>
  );
}

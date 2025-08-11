
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlCalender } from "react-icons/sl";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import style from './css/index.module.css'
import CountUp from 'react-countup';




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

          <div className={style.box1}>
            <h1>Total Body Yoga Stretch Pose</h1>
            <hr />
            <p><SlCalender /> 12-Nov - 2024 2:30 PM</p>
            <p> <HiMiniUserGroup />120 participants</p>
            <p><FaMapMarkerAlt /> 69 /421 Near ICICI Bank, heerapath, Mansarovar, Jaipur, Rajasthan 302020, India</p>
            <button>View Competition →</button>


          </div>
          <div className={style.box1}>
            <h1>Total Body Yoga Stretch Pose</h1>
            <hr />
            <p><SlCalender /> 12-Nov - 2024 2:30 PM</p>
            <p> <HiMiniUserGroup />120 participants</p>
            <p><FaMapMarkerAlt /> 69 /421 Near ICICI Bank, heerapath, Mansarovar, Jaipur, Rajasthan 302020, India</p>
            <button>View Competition →</button>


          </div>
          <div className={style.box1}>
            <h1>Total Body Yoga Stretch Pose</h1>
            <hr />
            <p><SlCalender /> 12-Nov - 2024 2:30 PM</p>
            <p> <HiMiniUserGroup />120 participants</p>
            <p><FaMapMarkerAlt /> 69 /421 Near ICICI Bank, heerapath, Mansarovar, Jaipur, Rajasthan 302020, India</p>
            <button>View Competition →</button>


          </div>
          <div className={style.box1}>
            <h1>Total Body Yoga Stretch Pose</h1>
            <hr />
            <p><SlCalender /> 12-Nov - 2024 2:30 PM</p>
            <p> <HiMiniUserGroup />120 participants</p>
            <p><FaMapMarkerAlt /> 69 /421 Near ICICI Bank, heerapath, Mansarovar, Jaipur, Rajasthan 302020, India</p>
            <button>View Competition →</button>


          </div>
          <div className={style.box1}>
            <h1>Total Body Yoga Stretch Pose</h1>
            <hr />
            <p><SlCalender /> 12-Nov - 2024 2:30 PM</p>
            <p> <HiMiniUserGroup />120 participants</p>
            <p><FaMapMarkerAlt /> 69 /421 Near ICICI Bank, heerapath, Mansarovar, Jaipur, Rajasthan 302020, India</p>
            <button>View Competition →</button>


          </div>
          <div className={style.box1}>
            <h1>Total Body Yoga Stretch Pose</h1>
            <hr />
            <p><SlCalender /> 12-Nov - 2024 2:30 PM</p>
            <p> <HiMiniUserGroup />120 participants</p>
            <p><FaMapMarkerAlt /> 69 /421 Near ICICI Bank, heerapath, Mansarovar, Jaipur, Rajasthan 302020, India</p>
            <button>View Competition →</button>


          </div>



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
          <div><img src="/src/images/image (2).png" alt="" /></div>
          <div><img src="/src/images/image-1 (2).png" alt="" /></div>
          <div><img src="/src/images/image-3.png" alt="" /></div>
          <div><img src="/src/images/image-4.png" alt="" /></div>
          <div><img src="/src/images/image-5.png" alt="" /></div>
          <div><img src="/src/images/image-5.png" alt="" /></div>
          <div><img src="/src/images/image-6.png" alt="" /></div>
          <div><img src="/src/images/image-7.png" alt="" /></div>
          <div><img src="/src/images/image-8.png" alt="" /></div>
          <div><img src="/src/images/image-9.png" alt="" /></div>
        </div>


      </section>






    </div>
  );
}



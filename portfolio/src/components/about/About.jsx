import styles from "./about.module.css";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const About = () => {
   
  const details = {
    about:
      "Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining MERN based web applications. Looking forward to joining a progressive and challenging work environment.",
    email: "amankatiyar0002016@gmail.com",
    mobile: "+91 8826899917",
    location: "Noida, Uttar Pradesh",
  };
  const { about, email, mobile, location } = details;

  const handleMail = () => {
    window.open(`mailto:${email}`);
  };








  return (
    <div className={styles.a} id="About">
      <div className={styles.aleft}>
        <div className={styles.acard.bg}></div>
        <div className={styles.acard}>
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.aimg}
          />
        </div>
      </div>
      <div className={styles.aright}>
      <div className={styles.container}>
      <div>
        <div className={styles.heading}>About</div>
        <div className={styles.content}>{about}</div>
        <div className={styles.contact}>
          <div className={styles.contact_items}>
            <HiLocationMarker className={styles.icon} size='1.3em' />
            <span>{location}</span>
          </div>
          <div
            className={`${styles.contact_items} ${styles.gmail}`}
            onClick={handleMail}
          >
            <GrMail className={styles.icon} size='1.3em' />
            <span>{email}</span>
          </div>
          <div className={styles.contact_items}>
            <FaPhoneSquareAlt className={styles.icon} size='1.3em' />
            <span>{mobile}</span>
          </div>
        </div>
      </div>
    </div>
         
      </div>
    </div>
  );
};

export default About;

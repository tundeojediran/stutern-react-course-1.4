import React from 'react'
import styles from "../styles/style.module.css"

const ProfileWithCSSModule = () => {
    return (
        <section className={styles.testimonial}>
          <div className={styles["testimonial-wrapper"]}>
            <img
              src="https://randomuser.me/api/portraits/women/48.jpg"
              alt="Tammy Stevens"
              className={styles["testimonial-avatar"]}
            />
            <div>
              <p className={styles["testimonial-quote"]}>
                My journey as Frontend has been challenging but exciting at the same
                time. Not easy all the time, but it is totally worth it. I am better
                than who I was when I started.
              </p>
            </div>
            <p className={styles["testimonial-name"]}>
              Tammy Stevens
              <span> · Front End Developer</span>
            </p>
          </div>
        </section>
      );
}

export default ProfileWithCSSModule
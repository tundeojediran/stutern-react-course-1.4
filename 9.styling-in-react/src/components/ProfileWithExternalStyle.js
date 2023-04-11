import React from 'react'
import "../styles/styles.css"

const ProfileWithExternalStyle = () => {
    return (
        <section className="testimonial">
          <div className="testimonial-wrapper">
            <img
              className="testimonial-avatar"
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Tammy Stevens"
            />
            <div className="testimonial-quote">
              <p>
                My journey as Frontend has been challenging but exciting at the same
                time. Not easy all the time, but it is totally worth it. I am better
                than who I was when I started.
              </p>
            </div>
            <p className="testimonial-name">
              Tammy Stevens<span> · Front End Developer</span>
            </p>
          </div>
        </section>
      );
}

export default ProfileWithExternalStyle
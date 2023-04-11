import React from 'react'

const ProfileWithInlineStyle = () => {

    const styles = {
        section: {
            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
            fontSize: "1rem",
            fontWeight: 1.5,
            lineHeight: 1.5,
            color: "#292b2c",
            backgroundColor: "#fff",
            padding: "0 2em"
        },
        imageWrapper: {
            textAlign: "center",
            maxWidth: "950px",
            margin: "0 auto",
            border: "1px solid #e6e6e6",
            padding: "40px 25px",
            marginTop: "50px"
        },
        image: {
            margin: "-90px auto 30px",
            width: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "0"
        },
        about: {
            lineHeight: 1.5,
            fontWeight: 300,
            marginBottom: "25px",
            fontSize: "1.375rem"
        },
        name: {
            marginBottom: "0",
            fontWeight: 600,
            fontSize: "1rem"
        },
        profession: { fontWeight: 400 }



    }

    return (
        <section
            style={styles.section}
        >
            <div
                style={styles.imageWrapper}
            >
                <img
                    src="https://randomuser.me/api/portraits/men/50.jpg"
                    alt="Tammy Stevens"
                    style={styles.image}
                />
                <div>
                    <p
                        style={styles.about}
                    >
                        My journey as Frontend has been challenging but exciting at the same
                        time. Not easy all the time, but it is totally worth it. I am better
                        than who I was when I started.
                    </p>
                </div>
                <p
                    style={styles.name}
                >
                    Julius Badger
                    <span style={styles.profession}> · Front End Developer</span>
                </p>
            </div>
        </section>
    );
}

export default ProfileWithInlineStyle;
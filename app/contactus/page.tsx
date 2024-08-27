import styles from "@/styles/contactus_style.module.css";

export default function Page() {
    return (
        <section id="contact_us_section" className={styles.contact_us_section}>
            <div className={styles.contact_container}>
                <div className={styles.contact_info}>
                    <h2>Contact Us</h2>
                    <p>If you have any questions, suggestions, or need support, feel free to reach out to us. We're here to help!</p>
                    <ul className={styles.contact_details}>
                        <li>
                            <i className={`${styles.fas} fa-map-marker-alt`}></i>
                            <span>1234 Mental Wellness St, Mind City, MH 56789</span>
                        </li>
                        <li>
                            <i className={`${styles.fas} fa-phone-alt`}></i>
                            <span>+1 234 567 890</span>
                        </li>
                        <li>
                            <i className={`${styles.fas} font-extralight fa-envelope`}></i>
                            <span>support@mentalwellnesshub.com</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.contact_form}>
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className={styles.form_group}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required></textarea>
                        </div>
                        <button type="submit" className={styles.form_button}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

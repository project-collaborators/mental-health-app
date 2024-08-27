import styles from "@/styles/header_footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.footer}>
            {/* <!-- <p>&copy; 2023 Mental Health Blog</p> --> */}

            <div className={styles.footer_container}>
                <div className={styles.footer_column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#about">About Us</Link></li>
                        <li><Link href="#contact">Contact Us</Link></li>
                        <li><Link href="#blogs">Blogs</Link></li>
                        <li><Link href="#gamification">Gamification</Link></li>
                        <li><Link href="#teleconsultation">Teleconsultation</Link></li>
                        <li><Link href="#prediction">Mental Health Prediction</Link></li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h3>Follow Us</h3>
                    <ul className={styles.social_links}>
                        <li><Link href="#"><Image width={32} height={32} src="/public/assets/facebook-icon.png" alt="Facebook" /></Link></li>
                        <li><Link href="#"><Image width={32} height={32} src="/public/assets/twitter-icon.png" alt="Twitter" /></Link></li>
                        <li><Link href="#"><Image width={32} height={32} src="/public/assets/instagram-icon.png" alt="Instagram" /></Link></li>
                        <li><Link href="#"><Image width={32} height={32} src="/public/assets/linkedin-icon.png" alt="LinkedIn" /></Link></li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h3>Contact Us</h3>
                    <p>Email: info@mentalhealthapp.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 Wellness Way, Healthy City, HC 12345</p>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <p>&copy; 2024 Mental Health Application. All rights reserved.</p>
            </div>
        </div>
    );
}

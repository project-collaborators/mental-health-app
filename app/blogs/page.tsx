import styles from "@/styles/blogspage_style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section id="blog_cards_section" className={styles.blog_cards_section}>
            <div className={styles.blog_cards_container}>
                <div className={styles.blog_card}>
                    <Image fill src="/path/to/your/image1.jpg" alt="Blog Image 1" className={styles.blog_card_image} />
                        <div className={styles.blog_card_content}>
                            <h3 className={styles.blog_card_heading}>The Importance of Mental Health Awareness</h3>
                            <div className={styles.blog_card_meta}>
                                <span className={styles.blog_card_date}>May 25, 2024</span>
                                <span className={styles.blog_card_author}>by John Doe</span>
                            </div>
                            <p className={styles.blog_card_text}>
                                Mental health awareness is essential in today's society as it helps to reduce stigma and improve the understanding of mental health issues. Through education and open conversations...
                            </p>
                            <Link href="#" className={styles.blog_card_button}>Read More</Link>
                        </div>
                </div>
                {/* <!-- Repeat .blog_card for additional blog entries --> */}
                <div className={styles.blog_card}>
                    <Image fill src="/path/to/your/image2.jpg" alt="Blog Image 2" className={styles.blog_card_image} />
                        <div className={styles.blog_card_content}>
                            <h3 className={styles.blog_card_heading}>Tips for Managing Anxiety</h3>
                            <div className={styles.blog_card_meta}>
                                <span className={styles.blog_card_date}>May 20, 2024</span>
                                <span className={styles.blog_card_author}>by Jane Smith</span>
                            </div>
                            <p className={styles.blog_card_text}>
                                Managing anxiety can be challenging, but with the right strategies, it is possible to cope effectively. In this blog, we share practical tips for managing anxiety and improving your overall well-being...
                            </p>
                            <Link href="#" className={styles.blog_card_button}>Read More</Link>
                        </div>
                </div>
            </div>
        </section>
    );
}

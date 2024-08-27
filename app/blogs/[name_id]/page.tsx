import styles from "@/styles/blogspage_style.module.css";
import Image from "next/image";

export default function Page() {
    return (
        <section id="blog_section" className={styles.blog_section}>
            <div className={styles.blog_container}>
                <div className={styles.blog_post}>
                    <Image width={800} height={480} src="/path/to/your/image.jpg" alt="Blog Image" className={styles.blog_image} />
                        <div className={styles.blog_content}>
                            <h2 className={styles.blog_heading}>The Importance of Mental Health Awareness</h2>
                            <div className={styles.blog_meta}>
                                <span className={styles.blog_date}>May 25, 2024</span>
                                <span className={styles.blog_author}>by John Doe</span>
                            </div>
                            <p className={styles.blog_text}>
                                Mental health awareness is essential in today's society as it helps to reduce stigma and improve the understanding of mental health issues. Through education and open conversations, we can create a supportive environment where individuals feel comfortable seeking help...
                            </p>
                        </div>
                </div>
                {/* <!-- Repeat .blog_post for additional blog entries --> */}
            </div>
        </section>

    );
}

import styles from "@/styles/about_us_style.module.css";

export default function Page() {
    return (
        <section id="about-us" className={styles.about_us_section}>
            <div className={styles.container}>
                <h1>About Us</h1>
                <h2>Your Trusted Mental Wellness Partner</h2>
                <p>Welcome to the Mental Wellness Hub, a platform dedicated to improving mental health and well-being. Our project was born out of a shared passion for mental health and a desire to make a positive impact on society. We are a group of students who have come together as part of our Social Internship Activity in our colleges.</p>

                <h3>Our Mission</h3>
                <p>Our mission is to provide a supportive and informative space for individuals seeking ways to enhance their mental wellness. Here's what you can expect from our platform:</p>

                <div className={styles.features}>
                    <div className={styles.feature_item}>
                        <h4>Engaging Blog Posts</h4>
                        <p>We regularly publish informative and insightful blog articles on a wide range of mental health topics. Our goal is to educate and inspire positive change. From stress management to coping with anxiety, our blogs cover all aspects of mental health.</p>
                    </div>
                    <div className={styles.feature_item}>
                        <h4>Sleep Reminders</h4>
                        <p>Proper sleep is a cornerstone of good mental health. We offer helpful sleep reminders to ensure you prioritize rest and rejuvenation. Our tips are designed to help you establish a healthy sleep routine and improve the quality of your sleep.</p>
                    </div>
                    <div className={styles.feature_item}>
                        <h4>Dietary Guidance</h4>
                        <p>Your diet plays a significant role in your mental well-being. We provide tips and recommendations for maintaining a balanced and nutritious diet. Learn how certain foods can boost your mood and overall mental health.</p>
                    </div>
                </div>

                <h3>Our Commitment</h3>
                <p>We are committed to creating a safe and supportive online community. If you have any questions, suggestions, or would like to contribute to our cause, feel free to reach out to us. Your well-being is our top priority, and we are here to help you on your journey towards better mental health.</p>

                <h3>Join Our Community</h3>
                <p>Thank you for being a part of our community. Together, we can make a positive impact on the mental wellness of individuals and society as a whole. Explore our resources, engage with our content, and join us in promoting mental wellness for everyone.</p>
            </div>
        </section>
    );
}

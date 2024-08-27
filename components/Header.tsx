import styles from "@/styles/header_footer.module.css";

export default function Header() {
    return (
        <nav className={styles.header_nav}>
            <div className={styles.logo}>Mental Health</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">About</a></li>
                <li><a href="gamificationPage.html">Gamification</a></li>
                <li><a href="communityPage.html">Com</a></li>
                <li><a href="surveryForm.html">Sur</a></li>
                <li><a href="teleConsultPage.html">Tele</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

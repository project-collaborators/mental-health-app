"use client";
import styles from "@/styles/login_style.module.css";
import { useState } from "react";

export default function Page() {
    const [loginTabActive, setLoginTabActive] = useState(true);

    return (
        <section id="auth_section" className={styles.auth_section}>
            <div className={styles.auth_container}>
                <div className={styles.auth_tabs}>
                    <button className={`${styles.tab_button} ${(loginTabActive ? styles.active : '')}`} onClick={() => setLoginTabActive(true)} >Login</button>
                    <button className={`${styles.tab_button} ${(!loginTabActive ? styles.active : '')}`} onClick={() => setLoginTabActive(false)}>Signup</button>
                </div>
                {loginTabActive &&
                    (<div className={`${styles.tab_content}`} id="login">
                        <form className={styles.auth_form}>
                            <h2>Login</h2>
                            <div className={styles.form_group}>
                                <label htmlFor="login_email">Email</label>
                                <input type="email" id="login_email" name="login_email" required />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="login_password">Password</label>
                                <input type="password" id="login_password" name="login_password" required />
                            </div>
                            <button type="submit" className={styles.form_button}>Login</button>
                        </form>
                    </div>)
                }
                {!loginTabActive &&
                    (<div className={`${styles.tab_content}`} id="signup">
                        <form className={styles.auth_form}>
                            <h2>Signup</h2>
                            <div className={styles.form_group}>
                                <label htmlFor="signup_name">Name</label>
                                <input type="text" id="signup_name" name="signup_name" required />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="signup_email">Email</label>
                                <input type="email" id="signup_email" name="signup_email" required />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="signup_password">Password</label>
                                <input type="password" id="signup_password" name="signup_password" required />
                            </div>
                            <button type="submit" className={styles.form_button}>Signup</button>
                        </form>
                    </div>)
                }
            </div>
        </section>

    );
}

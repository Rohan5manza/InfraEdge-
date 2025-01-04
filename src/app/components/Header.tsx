/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import styles from "../page.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <img src="/infraedge.png" alt="Logo" className={styles.logo} />
                <span className={styles.brandName}>
                    Infraedge
                </span>
            </div>
            <nav className={styles.navbar}>
                <a href="/">Home</a>
                <a href="/demo">Demo</a>
                <a href="/features">Features</a>
                <a href="/contact">Contact</a>

            </nav>
        </header>
    );
}

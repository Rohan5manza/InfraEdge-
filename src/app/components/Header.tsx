/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import styles from "../page.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <img src="/infraedge.png" alt="Logo" className={styles.logo} />
                <span className={styles.brandName}>
                    InfraEdge
                </span>
            </div>
            <nav className={styles.navbar}>
                <a href="/">Home</a>
                <a href="https://tensorbuilds.netlify.app">TensorBuilds</a>
                <a href="https://wa.me/qr/LUDMYTACVQGHC1">Contact</a>

            </nav>
        </header>
    );
}

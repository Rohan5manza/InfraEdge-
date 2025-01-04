"use client";
import styles from "../page.module.css";

export default function CompareCards() {
    return (
        <div className={styles.compare}>
            <div className={styles.card}>
                <h2>Other Apps</h2>
                <ol>
                    <li>expensive cloud stacks & complex setup requirements</li>
                    <li>No wide variety of apps available</li>
                    <li>Limited free-tier opportunity</li>
                    <li>Time-consuming, and high entry barriers.</li>
                    <li>No personal domains</li>
                    <li>Lack of beginner-friendly resources</li>
                </ol>
            </div>
            <div className={styles.card}>
                <h2>InfraEdge</h2>
                <ol>
                    <li>One-click or one-request deployments</li>
                    <li>Access to our server software to get hands-on experience</li>
                    <li>Access apps from anywhere</li>
                    <li>You get our beginner-friendly educational resource</li>
                    <li>Personal subdomains for each user</li>
                    <li>Zero technical knowledge required</li>
                </ol>
            </div>
        </div>
    );
}

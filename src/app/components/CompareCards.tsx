"use client";
import styles from "../page.module.css";

export default function CompareCards() {
    return (
        <div className={styles.compare}>
            <div className={styles.card1}>
                <h2>Other cloud sites</h2>
                <ol>
                    <li>EXPENSIVE cloud stacks</li>
                    <li>COMPLEX setup requirements</li>
                    <li>Set up VPS manually. Difficult. </li>
                    <li>No wide variety of apps available</li>
                    <li>Vercel platform: limited free tier with no backend support </li>
                    <li>Time-consuming and high entry barriers.</li>
                    <li>No personal domains</li>
                    <li>Lack of beginner-friendly resources</li>
                    
                </ol>
            </div>
            <div className={styles.card2}>
                <h2>InfraEdge</h2>
                <ol>
                    <li>Budget-Friendly ! </li>
                    <li>EASY One-click & One-Request setup!</li>
                    <li>We do everything for you !</li>
                    <li>Lots of apps to explore ! Only your imagination is the limit !</li>
                    <li>BETTER Value-Packed alternative platform: Coolify !</li>
                    <li>ZERO technical knowledge required ! </li>
                    <li>New subdomains for each user.Access apps from anywhere !</li>
                    <li>You get our beginner-friendly educational bundle each month !</li>
                    
                    
                </ol>
            </div>
        </div>
    );
}

"use client";
import styles from '../page.module.css';

export default function SubscriptionHeading() {
    return (
        <div className={styles.elements}>
            <div className={styles.content}>
                <h2><p>What do you get?</p></h2>
                <ol>
                    <li>
                        You can send us requests for deploying and running 5 lightweight applications( any app from our list,
                        or your own websites, web apps, or custom requests), and your own personal URL for each of those.
                    </li>
                    <li>Contact us for any changes to be made in your app( if you want full automation).</li>
                    <li>Our alternative platform to Vercel stack for hosting web applications.</li>
                </ol>
            </div>
            <img src="/sphere.png" alt="Globe" className={styles.image} />
        </div>
    );
};
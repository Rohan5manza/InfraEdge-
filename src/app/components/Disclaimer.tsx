"use client";
import styles from "../page.module.css";

export default function Disclaimer() {
    return (
        <div className={styles.content}>
            <h3>Disclaimer</h3>
            <ol>
                <li>All user data is the sole responsibility of the user. While we have reliable redundancy, privacy,security, and backup systems on our servers, we cannot fully guarantee your data. Please make sure to have backups of any important data
                </li>
                <li>Refunds are applicable only when reclaimed within 29 days max. After that, once your subscription plan ends, we will not provide any refunds.</li>
            </ol>
            <h3>Note: </h3>
            <ol>Support is available only for lightweight applications. No GPU support right now. AI/LLM cloud stack is coming soon. Stay tuned.</ol>
        </div>
    );
}

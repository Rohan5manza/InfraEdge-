"use client";
import styles from "../page.module.css";

export default function Disclaimer() {
    return (
        <div className={styles.content}>
            <h3>Disclaimer</h3>
            <ol>
                <li>All user data is the sole responsibility of the user.</li>
                <li>Support is available only for lightweight applications. No GPU support right now.</li>
            </ol>
        </div>
    );
}

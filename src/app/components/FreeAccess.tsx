"use client";
import styles from "../page.module.css";

export default function FreeAccess() {
    return (
        <div className={styles.elements}>

            <img src="/puzzle.png" alt="puzzle" className={styles.image} />
            <div className={styles.content}>
                <h2>Before 1st March 2025 :</h2>
                <p>269/- per month subscription plan</p>
                <ol>
                    <li>Free access to server software</li>
                    <li>education resources bundle</li>
                </ol>
                <br />
                <h4>You get these features along with the ones mentioned in the below subscription plan</h4>
            </div>
        </div >
    )
};
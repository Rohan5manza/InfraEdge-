"use client";
import styles from '../page.module.css';

export default function DemoGrid() {
    return (
        <div className={styles.elements}>
            <div className={styles.content}>
                <h2 className={styles.heading}>
                    Explore our wide variety of cloud applications and solutions on our servers!
                </h2>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Launch any app manually on our deployment platform
                        </p>
                        <img src="/ss1.jpg" alt="Launch App" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Choose from a wide variety of apps on our servers
                        </p>
                        <img src="/ss2.jpg" alt="Choose App" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Submit your requests from Dockerhub as well
                        </p>
                        <img src="/ss3.jpg" alt="Dockerhub Request" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Customers can send requests to deploy any app and get a personal URL.
                        </p>
                        <img src="/ss5.jpg" alt="Personal URL" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Access our server software to learn cloud, Linux, and deployment steps.
                        </p>
                        <img src="/ss6.jpg" alt="Learn Cloud" className={styles.gridImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

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
                            Launch any app manually on our BETTER deployment platform
                        </p>
                        <img src="/ss1.jpg" alt="Launch App" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Choose from a Wide variety of apps on our servers
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
                            Send us custom requests to AUTOMATE deploying any app or VPS. Talk with us personally!
                        </p>
                        <img src="/ss5.jpg" alt="Personal URL" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Example of a note-taking app for one of our users
                        </p>
                        <img src="/ss6.jpg" alt="Learn Cloud" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Access our server software to learn Cloud, Linux & hands-on VPS deployment.
                        </p>
                        <img src="/ss7.jpg" alt="Learn Cloud" className={styles.gridImage} />
                    </div>
                    <div className={styles.gridItem}>
                        <p className={styles.gridTypetext}>
                            Get our beginner-friendly educational resources for Cloud and DevOps.  
                        </p>
                        <img src="/ss8.png" alt="Learn Cloud" className={styles.gridImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

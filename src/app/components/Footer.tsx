"use client";
import styles from "../page.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footercontent}>
                <div className={styles.brandsection}>
                    <img src="/tensorflow.png" alt="Logo" className={styles.logo} />
                    <img src="/infraedge.png" alt="Logo" className={styles.logo} />
                    <span className={styles.brandname}>TensorBuilds</span>
                </div>
                <div className={styles.linkssection}>
                    <div className={styles.column}>
                        <h4>RESOURCES</h4>
                        <a href="#">InfraEdge</a>
                        <a href="#">TensorBuilds Website</a>
                    </div>
                    <div className={styles.column}>
                        <h4>FOLLOW US</h4>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                    </div>
                    <div className={styles.column}>
                        <h4>LEGAL</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">White Paper Link</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerbottom}>
                <p>&copy; 2024 InfraEdge. All Rights Reserved.</p>
                <div className={styles.socialicons}>
                    <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail />
                        Email
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}

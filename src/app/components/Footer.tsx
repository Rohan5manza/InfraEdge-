"use client";
import styles from "../page.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footercontent}>
                <div className={styles.brandsection}>
                    <img src="/infraedge.png" alt="Logo"  />
                    <span className={styles.brandname}>TensorBuilds</span>
                </div>
                <div className={styles.linkssection}>
                    <div className={styles.column}>
                        <h4>RESOURCES</h4>
                        <a href="https://forms.gle/gDFa1BuBpAEnnHq87">InfraEdge</a>
                        <a href="https://tensorbuilds.netlify.app">TensorBuilds Website</a>
                    </div>
                    <div className={styles.column}>
                        <h4>FOLLOW US</h4>
                        <a href="https://www.youtube.com/@rohanmarar64">Youtube</a>
                        <a href="https://www.linkedin.com/company/tensorbuilds/">LinkedIn</a>
                    </div>
                    <div className={styles.column}>
                        <h4>LEGAL</h4>
                        <a href="https://docs.google.com/document/d/1pdqMqb-ziLHMx5d3gl77X7uY_jTaww3Omqfq5RGuh6E/edit?usp=sharing">Privacy Policy</a>
                        <a href="https://docs.google.com/document/d/1zpu86TA3rJ3c0HOzLn_FU3c-bHJw4i74lgi6qknpKjc/edit?usp=sharing">White Paper Link</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerbottom}>
                <p>&copy; 2025 InfraEdge. Built by TensorBuilds. All Rights Reserved.</p>
                <div className={styles.socialicons}>
                    <a href="mailto:tensorbuilds@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail />
                        Email
                    </a>
                    <a href="https://www.linkedin.com/company/tensorbuilds/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/tensor_builds/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}

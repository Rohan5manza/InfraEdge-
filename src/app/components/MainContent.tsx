"use client";
import InfraedgeFeatures from "./InfraedgeFeatures";
import SubscriptionPlan from "./SubscriptionPlan";
import CompareCards from "./CompareCards";
import Disclaimer from "./Disclaimer";
import SplineEmbed from "./SplineEmbed";
import FreeAccess from "./FreeAccess";
import styles from "../page.module.css";
import DemoGrid from "./DemoGrid";
import SubscriptionHeading from "./SubscriptionHeading";

export default function MainContent() {
    return (
        <main className={styles.main}>
            <SplineEmbed
                className={styles.spline1}
                sceneUrl="https://prod.spline.design/FJIfFV62BQSZFTs1/scene.splinecode"
            />
            <InfraedgeFeatures />
            <DemoGrid />
            <CompareCards />
            <SubscriptionHeading />
            <FreeAccess />
            <SubscriptionPlan />
            <Disclaimer />
            <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer" >
                <SplineEmbed
                    className={styles.spline1}
                    sceneUrl="https://prod.spline.design/gohhZXPLZm-P4NNu/scene.splinecode"
                />
            </a>
        </main>
    );
}

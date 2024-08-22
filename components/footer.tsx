import styles from "./footer.module.css";
import { TiSocialYoutube } from "react-icons/ti";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={"nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent"}>
            <hr className={"dark:nx-border-neutral-800"}/>
            <div
                className={`nx-mx-auto nx-flex nx-max-w-[90rem] nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)] nx-gap-4 ${styles.footer}`}>
                <span className={"nx-pt-1"}>Tribo Dynamics Inc.</span>
                <div className={"nx-gap-4 nx-flex md:nx-hidden"}>
                    <Link href={"/contact"} className={"nx-underline"}>Contact</Link>
                    <Link href={"/about"} className={"nx-underline"}>About</Link>
                    <Link href={"/team"} className={"nx-underline"}>Tribo Team</Link>
                </div>
                <a href={"https://www.youtube.com/@dimitriosdardalis6658"} className={`nx-flex nx-flex-col nx-text-[10px] nx-items-center ${styles.pt2}`}>
                    Checkout us out YouTube
                    <TiSocialYoutube size={32}/>
                </a>

            </div>
        </div>
    )
};

export default Footer;
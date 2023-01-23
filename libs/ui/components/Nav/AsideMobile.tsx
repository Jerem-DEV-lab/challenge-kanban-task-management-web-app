import Styles from "../../styles/components/nav/aside-mobile.module.scss";
import clsx from "clsx";
import Link from "next/link";
import {IconBoard} from "../icons/IconBoard";
import {SwitchDarkTheme} from "../Input/SwitchDarkTheme";

export const AsideMobile = () => {
    let activeLink = true
    return <>
        <aside className={Styles.aside}>
            <span className={Styles.asideTitle}>Tous les tableaux (3)</span>
            <nav>
                <ul>
                    <li className={clsx(Styles.asideLiContainer, activeLink && Styles.asideLinkActive)}>
                        <Link href="/">
                            <span>
                                <IconBoard/>
                            </span>
                            Platform Launch
                        </Link>
                    </li>
                    <li className={clsx(Styles.asideLiContainer)}>
                        <Link href="/">
                            <span>
                                <IconBoard/>
                            </span>
                            Marketing Plan
                        </Link>
                    </li>
                    <li className={clsx(Styles.asideLiContainer)}>
                        <Link href="/">
                            <span>
                                <IconBoard/>
                            </span>
                            Roadmap
                        </Link>
                    </li>
                    <li className={clsx(Styles.asideLiContainer)}>
                        <button>
                            <span>
                                <IconBoard/>
                            </span>
                            + Créer un tableau
                        </button>
                    </li>
                </ul>
            </nav>
            <SwitchDarkTheme/>
        </aside>
    </>
}

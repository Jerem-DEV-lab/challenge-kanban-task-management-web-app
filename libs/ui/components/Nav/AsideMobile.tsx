import {IconBoard} from "../icons/IconBoard";
import {SwitchDarkTheme} from "../input/SwitchDarkTheme";
import {ItemsAside} from "./ItemsAside";
import Styles from "../../styles/components/nav/aside-mobile.module.scss";
import {useDarkMode} from "../../hooks/useDarkMode";
import clsx from "clsx";

type AsideMobileProps = {
    active?: boolean,
}

export const AsideMobile = ({active}: AsideMobileProps) => {
    const {theme, toggleTheme} = useDarkMode();
    return <>
        <aside className={clsx(Styles.aside, active && Styles.asideOpen)}>
            <span className={Styles.asideTitle}>Tous les tableaux (3)</span>
            <nav>
                <ul>
                    <li>
                        <ItemsAside activeLink={true} label="Platform Launch"/>
                    </li>
                    <li>
                        <ItemsAside label="Marketing Plan"/>
                    </li>
                    <li>
                        <ItemsAside label="Roadmap"/>
                    </li>
                    <li>
                        <button className={Styles.AsideButton}>
                            <span>
                                <IconBoard/>
                            </span>
                            + Créer un tableau
                        </button>
                    </li>
                </ul>
            </nav>
            <SwitchDarkTheme checked={theme} onChange={toggleTheme}/>
        </aside>
    </>
}

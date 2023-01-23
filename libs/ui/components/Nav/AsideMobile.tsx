import {IconBoard} from "../icons/IconBoard";
import {SwitchDarkTheme} from "../Input/SwitchDarkTheme";
import {ItemsAside} from "./ItemsAside";
import Styles from "../../styles/components/nav/aside-mobile.module.scss";


export const AsideMobile = () => {
    return <>
        <aside className={Styles.aside}>
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
            <SwitchDarkTheme/>
        </aside>
    </>
}

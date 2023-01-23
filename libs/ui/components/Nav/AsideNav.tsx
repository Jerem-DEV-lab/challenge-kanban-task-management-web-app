import Styles from '../../styles/components/nav/aside.module.scss'
import {Logo} from "../icons/Logo";
import clsx from "clsx";
import {ItemsAside} from "./ItemsAside";
import {IconBoard} from "../icons/IconBoard";
import {SwitchDarkTheme} from "../Input/SwitchDarkTheme";
import {IconHide} from "../icons/IconHide";
import {Button} from '../button/Button';
import {useDarkMode} from "../../hooks/useDarkMode";

type AsideNavProps = {
    className?: string,
    open: boolean
}
export const AsideNav = ({className, open}: AsideNavProps) => {
    const {theme, toggleTheme} = useDarkMode();
    return <>
        <aside className={clsx(Styles.Aside, open && Styles.Open, className && className)}>
            <div className={Styles.WrapperHeaderAside}>
                <span className={Styles.ContainerLogo}>
                 <Logo/>
                </span>
                <span className={Styles.Title}>Tous les tableaux (3)</span>
            </div>
            <nav className={Styles.Nav}>
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
            <div>
                <SwitchDarkTheme onChange={toggleTheme} checked={!!theme}/>
                <div className={Styles.WrapperButton}>
                    <Button
                        fullWidth
                        outlined
                        className={clsx(Styles.HideSidebar, Styles.ButtonHover)}>
                        <IconHide/>&nbsp;Cacher la navigation</Button>
                </div>
            </div>
        </aside>
    </>
}

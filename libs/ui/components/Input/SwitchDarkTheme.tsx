import Styles from "../../styles/components/input/switch-theme.module.scss";
import {IconDarkTheme} from "../icons/IconDarkTheme";
import {IconLightTheme} from "../icons/IconLightTheme";

export const SwitchDarkTheme = () => {
    return <div className={Styles.switchTheme}>
        <IconLightTheme/>
        <input type="checkbox" id="themeSwitch" name="theme-switch"
               className={Styles.switchThemeInput}/>
        <label htmlFor="themeSwitch" className="theme-switch__label">
            <span>Switch theme</span>
        </label>
        <IconDarkTheme/>
    </div>

}

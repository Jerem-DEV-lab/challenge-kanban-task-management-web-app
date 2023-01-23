import Styles from "../../styles/components/input/switch-theme.module.scss";
import {IconDarkTheme} from "../icons/IconDarkTheme";
import {IconLightTheme} from "../icons/IconLightTheme";

type SwitchDarkThemeProps = {
    checked: boolean,
    onChange: () => void
}
export const SwitchDarkTheme = ({checked, onChange}: SwitchDarkThemeProps) => {
    return <div className={Styles.switchTheme}>
        <IconLightTheme/>
        <input type="checkbox"
               id="themeSwitch"
               checked={!!checked}
               onChange={onChange}
               className={Styles.switchThemeInput}/>
        <label htmlFor="themeSwitch">
            <span>Switch theme</span>
        </label>
        <IconDarkTheme/>
    </div>

}

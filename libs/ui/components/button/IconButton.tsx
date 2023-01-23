import type {ButtonAttributes} from "@kanban/typescript"
import type {ReactNode} from "react";
import Styles from "../../styles/components/button/button.module.scss";
import clsx from "clsx";

type IconButtonProps = {
    icon: ReactNode,
    outlined?: boolean
    rounded?: boolean
} & ButtonAttributes
export const IconButton = (
    {
        onClick,
        icon,
        disabled = false,
        outlined = false,
        rounded = false
    }: IconButtonProps) => {
    return <button
        onClick={onClick}
        className={clsx(Styles.Button, Styles.DisabledButton, outlined ? Styles.OutlinedButton : Styles.Contained, rounded && Styles.ButtonRounded, disabled && Styles.ButtonDisabled)}
        disabled={disabled}>
        {icon}
    </button>
}

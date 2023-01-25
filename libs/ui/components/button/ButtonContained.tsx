import Styles from '../../styles/components/button/button.module.scss'
import clsx from "clsx";
import {ButtonAttributes} from '@kanban/typescript';
import {PropsWithChildren} from "react";

export const ButtonContained = (
    {
        children,
        className = undefined,
        fullWidth,
        disabled = false,
        onClick
    }: PropsWithChildren<ButtonAttributes>) => {
    return <button
        disabled={disabled}
        onClick={onClick}
        className={clsx(Styles.ButtonWithLabel, Styles.ButtonRounded, Styles.Contained, Styles.Button,disabled && Styles.ButtonDisabled,  fullWidth && Styles.FullWidth, className && className)}>
        {children}
    </button>

}

import type {ButtonAttributes} from "@kanban/typescript";
import {IconShow} from "../icons/IconShow";
import Styles from '../../styles/components/button/button.module.scss'

export const ButtonOpenAside = ({onClick}: ButtonAttributes) => {
    return <button onClick={onClick} className={Styles.ButtonShow}>
        <IconShow/>
    </button>
}

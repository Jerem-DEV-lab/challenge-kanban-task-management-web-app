import Styles from '../../styles/components/nav/top-nav.module.scss'
import {IconBoard} from "../icons/IconLogoMobile";
import {IconChevronDown} from "../icons/IconChevronDown";
import {IconButton} from "../button/IconButton";
import {IconAdd} from "../icons/IconAdd";
import {IconVerticalEllipsis} from "../icons/IconVerticalEllipsis";
import {useWindowSize} from "../../hooks/useWindowSize";
import {ButtonContained} from "../button/ButtonContained";
import clsx from "clsx";
import {Logo} from '../icons/Logo';
import React from "react";
import {IconChevronUp} from "../icons/IconChevronUp";

type TopNavProps = {
    stateAside?: boolean,
    toggleAsideMobile?: () => void,
    asideMobileOpen: boolean
}
export const TopNav = ({stateAside, toggleAsideMobile, asideMobileOpen}: TopNavProps) => {
    const size = useWindowSize();
    return <div className={Styles.Flex}>
        <div>
            <span className={Styles.ContainerLogoLG}><Logo/></span>
        </div>
        <div className={Styles.TopNavContainer}>
            <div className={Styles.ContainerLogo}>
                {size.width < 768 ? <IconBoard/> : null}
                <span className={clsx(stateAside && Styles.AsideOpen)}>
            Platform Launch
                    {size.width < 768 ? <button onClick={toggleAsideMobile}>{!asideMobileOpen ? <IconChevronDown/> : <IconChevronUp/> }</button> : null}
            </span>
            </div>
            <div className={Styles.ButtonWrapper}>
                {size.width && size.width < 768 ? <IconButton icon={<IconAdd/>} rounded={true}/> :
                    <ButtonContained>
                        +Ajouter une tâche
                    </ButtonContained>}
                <IconButton icon={<IconVerticalEllipsis/>} rounded={false} outlined={true}/>
            </div>
        </div>
    </div>
};

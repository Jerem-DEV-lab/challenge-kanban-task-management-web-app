import {useToggle} from "../../hooks/useToggle";
import {useWindowSize} from "../../hooks/useWindowSize";
import {TopNav} from "../Nav/TopNav";
import {AsideNav} from "../Nav/AsideNav";
import {AsideMobile} from "../Nav/AsideMobile";
import {ButtonOpenAside} from "../button/ButtonOpenAside";
import type {PropsWithChildren} from "react";
import Styles from '../../styles/wrapper-app.module.scss'
import clsx from "clsx";

export const WrapperApp = ({children}: PropsWithChildren) => {
    const {toggle, state} = useToggle(false)
    const {toggle: openAsideNav, state: asideNavState} = useToggle(true)
    const size = useWindowSize()
    return <div style={{position: "relative"}}>
        <TopNav stateAside={asideNavState} toggleAsideMobile={toggle} asideMobileOpen={state}/>
        {size.width > 768 ? <AsideNav open={asideNavState} openAsideNav={openAsideNav}/> : null}
        {size.width < 768 ? <AsideMobile active={state}/> : null}
        <main className={clsx(asideNavState ? Styles.Open : Styles.Close, Styles.MainContent)}>
            <div className={clsx(Styles.WrapperContent)}>
                {children}
            </div>
        </main>
        {!asideNavState ? <ButtonOpenAside onClick={openAsideNav}/> : null}
    </div>
}

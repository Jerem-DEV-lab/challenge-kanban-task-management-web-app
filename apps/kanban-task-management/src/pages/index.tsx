import {AsideMobile, AsideNav, TopNav} from "@kanban/ui";
import {useToggle} from "@kanban/ui/hooks/useToggle";
import {useWindowSize} from "@kanban/ui/hooks/useWindowSize";
import React, {useState} from "react";

export default function Home() {
    const {toggle, state} = useToggle(false)
    const [asideNav] = useState<boolean>(true);
    const size = useWindowSize()
    return <div style={{position: "relative"}}>
        <TopNav stateAside={asideNav} toggleAsideMobile={toggle} asideMobileOpen={state}/>
        {size.width > 768 ? <AsideNav open={asideNav}/> : null}
        {size.width < 768 ? <AsideMobile active={state}/> : null}
        <main>
        </main>
    </div>
}


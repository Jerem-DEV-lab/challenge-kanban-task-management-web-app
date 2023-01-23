import {AsideNav, TopNav} from "@kanban/ui";
import React, {useState} from "react";

export default function Home() {
    const [open] = useState<boolean>(true);
    return <div style={{position: "relative"}}>
       <TopNav stateAside={open}/>
        <AsideNav open={open}/>
        <main>
        </main>
    </div>
}


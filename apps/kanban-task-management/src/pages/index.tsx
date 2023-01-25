import React, {useContext} from "react";
import {Boards, WrapperApp} from "@kanban/ui/components";
import {BoardContext} from "../../context/BoardContext";

/*const Portal = dynamic(async () => (await import('@/components/portal/Portal')), {ssr: false})*/
export default function Home() {
    const board = useContext(BoardContext);
    return <WrapperApp>
        <Boards board={board}/>
    </WrapperApp>
}

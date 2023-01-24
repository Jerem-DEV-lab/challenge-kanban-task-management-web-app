import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import type {RefObject, ReactNode} from 'react';

type PortalProps = {
    children: ReactNode
}
const Portal = ({children}: PortalProps) => {
    const el = document.createElement("div")
    const wrapperRef: RefObject<HTMLDivElement> = useRef(el)
    useEffect(() => {
        const current = wrapperRef.current as HTMLDivElement
        if (!current) return
        document.body.appendChild(current)
        return () => {
            document.body.removeChild(current)
        };
    }, [wrapperRef]);
    if (!wrapperRef.current) return null
    return ReactDOM.createPortal(children, wrapperRef.current)

}
export default Portal;

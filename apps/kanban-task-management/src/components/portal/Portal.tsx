import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import type {RefObject, ReactNode} from 'react';

type PortalProps = {
    children: ReactNode,
    identifier?: string
}
const Portal = ({children, identifier}: PortalProps) => {
    const el = document.createElement("div")
    const wrapperRef: RefObject<HTMLDivElement> = useRef(el)
    useEffect(() => {
        const current = wrapperRef.current as HTMLDivElement
        if (!current) return
        if (wrapperRef.current && identifier) {
            wrapperRef.current.setAttribute("id", identifier)
        }
        document.body.appendChild(current)
        return () => {
            document.body.removeChild(current)
        };
    }, [wrapperRef, identifier]);
    if (!wrapperRef.current) return null
    return ReactDOM.createPortal(children, wrapperRef.current)

}
export default Portal;

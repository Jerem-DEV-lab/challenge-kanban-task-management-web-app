import {Dispatch, ReactNode, SetStateAction, useRef} from 'react';
import {useAutoClose} from "../../hooks/useAutoClose";

export const WrapperAutoClose = (
    {
        updateState,
        children,
        className = "",
        callback
    }: { updateState: Dispatch<SetStateAction<boolean>>, children: ReactNode, className?: string | undefined, callback?: Function }) => {
    const wrapperRef = useRef(null);

    useAutoClose(wrapperRef, updateState, callback)
    return <div ref={wrapperRef} className={`${className ? className : ""}`}>
        {children}
    </div>
};

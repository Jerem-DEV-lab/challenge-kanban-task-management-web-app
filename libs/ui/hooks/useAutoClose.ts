import {useEffect} from "react";
import type {RefObject} from "react";

export const useAutoClose = (ref: RefObject<any>, closeMenu: (args: boolean) => void, callback?: Function) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                closeMenu(false);
                if (callback) {
                    callback()
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeMenu, ref]);
}

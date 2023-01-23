import {useCallback, useState} from "react";

export const useToggle = (initialValue: boolean) => {
    const [state, setState] = useState(initialValue);

    const toggle = useCallback(() => {
        setState(prevState => !prevState);
    }, []);

    return {
        state,
        setState,
        toggle
    }
}

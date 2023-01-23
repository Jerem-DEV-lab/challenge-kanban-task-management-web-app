import {useCallback, useEffect, useState} from "react";

export const useDarkMode = () => {
    const prefersDarkMode = defaultSystemColor();
    const [theme, setTheme] = useState<boolean>(false);
    useEffect(() => {
        setTheme(prefersDarkMode);
    }, []);
    useEffect(() => {
        if (theme) {
            document.body.classList.remove('theme-light')
            document.body.classList.add('theme-dark')
        } else {
            document.body.classList.remove("theme-dark")
            document.body.classList.add("theme-light")
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => !prev);
    }, []);
    return {theme, toggleTheme};
}

function defaultSystemColor(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

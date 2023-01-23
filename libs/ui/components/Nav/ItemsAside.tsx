import Link from "next/link";
import clsx from "clsx";
import Styles from "../../styles/components/nav/aside-mobile.module.scss";
import {IconBoard} from "../icons/IconBoard";

type ItemsAsideProps = {
    activeLink?: boolean,
    href?: string,
    label: string
}
export const ItemsAside = ({activeLink, href = "", label}: ItemsAsideProps) => {
    return <Link href={href} className={clsx(Styles.asideNavContainer, activeLink && Styles.asideLinkActive)}>
        <span><IconBoard/></span>
        {label}
    </Link>
}

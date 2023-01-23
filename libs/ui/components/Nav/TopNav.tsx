import Styles from '../../styles/components/nav/top-nav.module.scss'
import {IconBoard} from "../icons/IconLogoMobile";
import {IconChevronDown} from "../icons/IconChevronDown";
import {IconButton} from "../button/IconButton";
import {IconAdd} from "../icons/IconAdd";
import {IconVerticalEllipsis} from "../icons/IconVerticalEllipsis";
import {useWindowSize} from "../../hooks/useWindowSize";
import {ButtonContained} from "../button/ButtonContained";

export const TopNav = () => {
    const size = useWindowSize();
    return <div className={Styles.TopNavContainer}>
        <div className={Styles.ContainerLogo}>
            <IconBoard/>
            <span>
            Platform Launch
            <IconChevronDown/>
            </span>
        </div>
        <div className={Styles.ButtonWrapper}>
            {size.width && size.width < 768 ? <IconButton icon={<IconAdd/>} rounded={true}/> :
                <ButtonContained>
                    +Ajouter une tâche
                </ButtonContained>}
            <IconButton icon={<IconVerticalEllipsis/>} rounded={false} outlined={true}/>
        </div>
    </div>
};

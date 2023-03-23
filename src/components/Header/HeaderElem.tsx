import { useRef } from "react";
import headerStyles from './Header.module.scss'

export const HeaderElem = ({ href, svg, index, active, setActive }: {
    href: string;
    svg: JSX.Element;
    index: number;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>
}) => {

    const handleClick = () => {
        setActive(index)
    }
    if (active !== index)
        return (<a onClick={e => handleClick()} href={href}>{svg}</a>)

    return (<a className={headerStyles.active} href={href}>{svg}</a>)
}
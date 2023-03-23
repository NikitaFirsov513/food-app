import headerStyles from './Header.module.scss'
import logoSVG from '../../assets/logo.svg'
import { HomeSVG, LoginSVG, NotificationSVG, OrderSVG, SaleSVG, UserSVG } from '../../assets/icons'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { HeaderElem } from './HeaderElem'

const headerList = [
    { href: "#", svg: <HomeSVG /> },
    { href: "#", svg: <LoginSVG /> },
    { href: "#", svg: <NotificationSVG /> },
    { href: "#", svg: <OrderSVG /> },
    { href: "#", svg: <SaleSVG /> },]


export const Header = () => {

    const [active, setActive] = useState(0);
    const spanRef = useRef<HTMLSpanElement>(null)

    const activeChange = useMemo(() => {
        if (spanRef.current === null)
            return
        spanRef.current.style.marginTop = active * 78.75 + 'px'
    }, [active])

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <img src={logoSVG} alt="logo" />
            </div>
            <nav>
                <span ref={spanRef}></span>
                {headerList.map((elem, i) => <HeaderElem active={active} setActive={setActive} href={elem.href} index={i} key={i} svg={elem.svg} />)}
            </nav>
            <div className={headerStyles.login}>
                <a href="#"><LoginSVG /></a>
            </div>
        </header>)
}
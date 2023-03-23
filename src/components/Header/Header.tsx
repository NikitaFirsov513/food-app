import headerStyles from './Header.module.scss'
import logoSVG from '../../assets/logo.svg'
import { HomeSVG, LoginSVG, NotificationSVG, OrderSVG, SaleSVG, UserSVG } from '../../assets/icons'




export const Header = () => {


    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>
                <img src={logoSVG} alt="logo" />
            </div>
            <nav>
                <span></span>
                <a href="#"><HomeSVG /></a>
                <a href="#"><SaleSVG /></a>
                <a href="#"><NotificationSVG /></a>
                <a href="#"><OrderSVG /></a>
                <a href="#"><UserSVG /></a>
            </nav>
            <div className={headerStyles.login}>
                <a href="#"><LoginSVG /></a>
            </div>
        </header>)
}
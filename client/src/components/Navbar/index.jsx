// components/Navbar.js
import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";
import styles from "../../App.module.css";
import accountImage from "../../assets/account.png";
import dashboardImage from "../../assets/dashboard.png";
import rankingImage from "../../assets/rankings.png";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Nav className={styles.navbar}>
                <Bars />
                <NavMenu className={styles['nav-menu']}>
                    <NavLink to="/" activeStyle>
                        <img src={dashboardImage} alt="Dashboard" />
                    </NavLink>
                    <NavLink to="/rankings" activeStyle>
                        <img src={rankingImage} alt="Rankings" />
                    </NavLink>
                    <NavLink to="/account" activeStyle>
                        <img src={accountImage} alt="Account" />
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
}

export default Navbar;

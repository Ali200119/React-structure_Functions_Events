import React from "react"
import "../../assets/layout/Header.scss"
import logo from "../../assets/images/logo.svg"

function Header() {
    return (
        <header>
            <div id="ad">
                <h4>İndi al, 3 ay sonra ödə! Yalnız onlayn!</h4>
            </div>

            <nav>
                <img className="logo" src={logo} alt="Logo"/>

                <div className="search">
                    <input type="text" placeholder="Axtarış" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <ul className="navbar">
                    <li><a style={{color: "red"}} href="#">Kampaniyalar</a></li>
                    <li><a href="#">Mağazalar</a></li>
                    <li><a href="#">Digər</a> <i class="fa-solid fa-chevron-down"></i></li>
                </ul>

                <a href="#" className="phone-number">
                    <h1>143</h1>
                    <i class="fa-solid fa-phone-volume"></i>
                </a>

                <div className="menu">
                    <a href="#" className="user">
                        <i class="fa-regular fa-user"></i>
                    </a>

                    <a href="#" className="wishlist">
                        <i class="fa-regular fa-heart"></i>
                        <span>0</span>
                    </a>

                    <a href="#" className="comparison">
                        <i class="fa-solid fa-scale-unbalanced-flip"></i>
                        <span>0</span>
                    </a>

                    <a href="#" className="cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>0</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;
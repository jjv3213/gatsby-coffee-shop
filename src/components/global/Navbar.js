import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false)
  const [navbarEffect, setnavbarEffect] = useState("collapse navbar-collapse")
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]

  const navbarHandler = () => {
    setnavbarOpen(!navbarOpen)
    navbarOpen
      ? setnavbarEffect("collapse navbar-collapse")
      : setnavbarEffect("collapse navbar-collapse show")
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/webalys */}
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={navbarEffect}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

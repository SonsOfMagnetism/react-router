import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/stocks">
                <div>Home Page</div>
            </Link>
            <Link to="/about">
                <div>About Page</div>
            </Link>
        </div>
    )
}

export default Nav
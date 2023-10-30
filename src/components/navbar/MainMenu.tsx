import { NavLink } from "react-router-dom"
import Theme from "../Theme/Theme"

const MainMenu = () => {
  return (
    <nav className="container px-5 flex gap-4">
        <ul className="flex gap-6 font-Viga uppercase">
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/create-blog'>Create Blog</NavLink></li>
        </ul>
        <div>
        <Theme />
      </div>
    </nav>
  )
}

export default MainMenu
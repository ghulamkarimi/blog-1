import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { setIsDarkMode } from "../../reducer/AppSlice"
import { MdOutlineLightMode } from "react-icons/md"
import { TbMoonStars } from "react-icons/tb"


const Theme = () => {
    const isDarkMode = useSelector((state: RootState) => state.app.isDarkMosde)
    const dispatch = useDispatch()
    const toggleTheme = () => {
        dispatch(setIsDarkMode())
    }

    return (
        <div>
        <div className="h-6 w-14 flex rounded-xl items-center duration-500 bg-slate-500 "
     onClick={toggleTheme}  >
            <span className={`h-6 w-6  flex ml-1 rounded-full justify-center items-center duration-500 ${
            isDarkMode ? "-translate-x-0.5" : "translate-x-7"
          }`}>

                <MdOutlineLightMode className={`text-yellow-500 h-6 w-6  ${isDarkMode ? "hidden " : "flex"}`} />
                <TbMoonStars className={`text-slate-400 h-6 w-6  ${isDarkMode ? "flex " : "hidden"}`} />
            </span>
        </div>
        </div>
    )
}

export default Theme

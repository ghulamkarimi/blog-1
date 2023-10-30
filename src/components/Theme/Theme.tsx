import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { setIsDarkMode } from "../../reducer/AppSlice"


const Theme = () => {
    const isDarkMode = useSelector((state: RootState) => state.app.isDarkMosde)
    const dispatch = useDispatch()
    const toggleTheme = () => {
        dispatch(setIsDarkMode())
    }

    return (
        <div className="h-6 w-12 bg-slate-200 rounded-lg flex " onClick={toggleTheme}  >
            <span className={`h-6 w-6 rounded-xl duration-500 ${isDarkMode ? "bg-yellow-400  translate-x-1" : "bg-slate-700  translate-x-5"}`}></span>
        </div>
    )
}

export default Theme

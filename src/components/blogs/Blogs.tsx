import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox";
import { useSelector } from "react-redux";
import { displayAllBlogs } from "../../reducer/BlogSlice";
import { RootState } from "../../store";
import Spinner from "../Spinner";
import ShowAuthor from "../ShowAuthor";
import ShowTime from "../ShowTime";


const statusSituation = {
  idle: "idle",
  loading: "loading",
  failed: "failed",
  compeleted: "compeleted"
}

const Blogs = () => {
  const blogs = useSelector(displayAllBlogs);
  const filter = useSelector((state: RootState) => state.blog.filter)
  const status = useSelector((state: RootState) => state.blog.status)
  const isDarkMode = useSelector((state: RootState) => state.app.isDarkMosde)

  const renderBlogs = () => {
    switch (status) {
      case statusSituation.loading:
        return <Spinner />

      case statusSituation.compeleted:
        return (
          <>

            {
              blogs.filter((blog) => blog.title.toLowerCase().includes(filter.toLowerCase()))
                .map((blog) => (

                  <article className={` rounded-lg py-3 px-5 flex flex-col gap-6 text-BACKGROUND duration-500 ${isDarkMode ? "odd:bg-sky-500 even:bg-blue-700" : "odd:bg-sky-300 even:bg-blue-500"} `} key={blog._id} >
                    <div className="flex items-center gap-8">
                      <img className="w-14" alt="" src={blog.imgUrl} />
                      <h3 className="text-2xl font-Viga text-RED">{blog.title}</h3>
                    </div>

                    <div className="px-5 text-slate-700 flex gap-3 font-bold">
                      <ShowAuthor userId={blog.userId} />
                      <ShowTime timeStamp={blog.date} />

                    </div>
                    <p>{blog.content && blog.content.slice(0, 199)}...</p>
                    <div className="w-full"></div>
                    <NavLink
                      to={`/blog/${blog._id}`}
                      className="bg-CYAN w-fit px-8 py-2 rounded-lg text-BACKGROUND font-bold font-Viga"
                    >
                      Show More ...
                    </NavLink>
                  </article>
                ))
            }
          </>
        )
    }

  }


  return (

    <div className="container px-5 py-8 flex flex-col gap-8">
      <div className="flex justify-center my-6">
        <SearchBox />
      </div>

      {renderBlogs()}
    </div>
  )
};

export default Blogs;

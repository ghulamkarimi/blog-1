
import { useDispatch } from "react-redux";
import Blogs from "../components/blogs/Blogs";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setBlogId } from "../reducer/BlogSlice";
import Blog from "../components/blogs/Blog";


const HomePage = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {

    dispatch(setBlogId(blogId));
  }, [blogId, dispatch])

  return <div>{blogId === undefined ? <Blogs /> : <Blog />}</div>;
};

export default HomePage;

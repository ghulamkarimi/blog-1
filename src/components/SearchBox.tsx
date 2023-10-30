import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import React from "react";
import { setFilter } from "../reducer/BlogSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector ((state: RootState) => state.blog.filter)
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value))
  }
  return (
    <div className="flex justify-between w-96 bg-CURRENT_LINE rounded-lg overflow-hidden items-center">
      <input
        className="bg-CURRENT_LINE outline-none text-FOREGROUND col-span-10 py-2 w-[80%] px-3"
        type="text"
        value={filter}
        onChange={onChangeHandler}
      />
      <div className="w-[10%] flex justify-center py-3 border-l text-YELLOW text-xl font-bold bg-COMMENT cursor-pointer">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default SearchBox;

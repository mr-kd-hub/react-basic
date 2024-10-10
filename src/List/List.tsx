import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getPostAction } from "../redux/actions/actions";
interface Iprops {
  list: any[];
}
function List(props: Iprops):any {
  const { list } = props;
  const dispatch = useDispatch<AppDispatch>()

  return list?.length ? (
    <div className="flex flex-col gap-2">
      {list.map((item, index) => (
        <div onClick={dispatch(getPostAction(item?.id))} className="cursor-pointer" key={index}>
          {item?.title}
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
}

export default List;

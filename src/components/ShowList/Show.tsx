import React from "react";
import { ShowProps } from "../../types";
import { NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchInfo } from "../../app/appThunks";
import { AppDispatch } from "../../app/store";

const Show: React.FC<ShowProps> = ({ show }) => {
    const dispatch:AppDispatch = useDispatch();

    const onClick = () => {
        dispatch(fetchInfo(show.id));
    }

  return (
    <NavLink onClick={onClick} to={`/shows/${show.id}`} className="container border">
      <div>
        <h5>{show.name}</h5>
      </div>
    </NavLink>
  );
};

export default Show;

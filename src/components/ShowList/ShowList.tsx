import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Show from "./Show";

const ShowList: React.FC = () => {
  const showsData = useSelector((state: RootState) => state.app.showArray);

  return (
    <div className=" show-list">
      {showsData &&
        showsData.length > 0 &&
        showsData.map((showData) => (
          <Show key={showData.show.id} show={showData.show} />
        ))}
    </div>
  );
};

export default ShowList;

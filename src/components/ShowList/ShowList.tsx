import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Show from "./Show";

const ShowList: React.FC = () => {
  const showsData = useSelector((state: RootState) => state.app.showArray);

  useEffect(() => {
    console.log("showsData:", showsData);
  }, [showsData]);

  return (
    <div className="w-50">
      {showsData &&
        showsData.length > 0 &&
        showsData.map((showData) => (
          <Show key={showData.show.id} show={showData.show} />
        ))}
    </div>
  );
};

export default ShowList;

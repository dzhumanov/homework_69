import React from "react";
import { ShowInfo } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ShowInfo: React.FC = () => {
  const show: ShowInfo | null = useSelector(
    (state: RootState) => state.app.info
  );

  if (!show) {
    return <div className="container w-50 fs-1 fw-bold">No info.</div>;
  }

  return (
    <div className="container w-50">
      <h1>{show.name}</h1>
      <p>
        {show.genres.map((genre) => (
          <span
            className="me-2 border rounded-5 bg-success p-1 text-white fw-bold"
            key={Math.random()}
          >
            {genre}
          </span>
        ))}
      </p>
      {show.image && show.image.medium ? (
        <img className="float-start me-3" src={show.image.medium} alt="" />
      ) : (
        <p className="fw-bold fs-1">No image available!</p>
      )}
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
  );
};

export default ShowInfo;

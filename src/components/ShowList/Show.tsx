import React from "react";
import { ShowProps } from "../../types";

const Show: React.FC<ShowProps> = ({ show }) => {
  return (
    <div className="container border">
      <h5>{show.name}</h5>
    </div>
  );
};

export default Show;

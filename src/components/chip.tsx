import React from "react";

type Tprop = {
  title: string;
  avatar: string;
  onClose: () => void;
};

// TODO: trim content on fixed size.
const Chip = (props: Tprop) => {
  return (
    <div className="chip">
      <div className="avatar">
        <img src={props.avatar} alt="avatar" />
      </div>
      <p id="title">{props.title}</p>
      <button onClick={props.onClose}>&#10006;</button>
    </div>
  );
};

export default Chip;

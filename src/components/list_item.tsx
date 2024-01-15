import React from "react";
import { composeClassName } from "../utils";

interface Iprop {
  title?: string;
  avatar?: string;
  email?: string;
  isSelected?: boolean;
  render?: React.ReactNode;
  onClick: () => void;
}

const ListItem = (props: Iprop) => {
  const { render, isSelected } = props;

  return (
    <div
      onClick={props.onClick}
      className={composeClassName([
        "drop-down-item-container",
        isSelected ? "drop-down-item-container--focus" : "",
      ])}
    >
      {render ? (
        render
      ) : (
        <div className="drop-down-item">
          <div className="avatar">
            <img src={props.avatar} alt="avatar" />
          </div>
          <p id="title">{props.title}</p>
          <p id="email">{props.email}</p>
        </div>
      )}
    </div>
  );
};

export default ListItem;

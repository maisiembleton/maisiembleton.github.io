import React from "react";
import "./styles.scss";
import StyledButton from "../StyledButton/StyledButton";

const ButtonGroup = ({ names, onClick }) => {
  return (
    <div className="buttongroup" id={names.id}>
      {names &&
        names.map(({ name, id }, i) => (
          <StyledButton
            variant="contained"
            size="small"
            className="buttongroup-item"
            onClick={onClick}
            key={i}
            id={id}
          >
            {name}
          </StyledButton>
        ))}
    </div>
  );
};

export default ButtonGroup;

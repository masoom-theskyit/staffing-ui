import React from "react";
import PropTypes from "prop-types";

const UIButton = ({
  text,
  type = "button",
  onClick,
  startIcon,
  endIcon,
  style = {},
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center border border-[#96BE25] bg-[#96BE25] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-[#75941c] transition-all duration-300`}
      style={style}
    >
      {startIcon && <>{startIcon}</>}
      <div>{text || children}</div>
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default UIButton;

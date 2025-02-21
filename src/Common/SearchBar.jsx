import React from "react";
import SearchIcon from "@mui/icons-material/Search"; 

const SearchBar = ({
  placeholder = "Search",
  onChange,
  value,
  className = "",
  inputClassName = "",
  iconClassName = "",
  ...props
}) => {
  return (
    <label
      className={`input input-bordered bg-gray-200 flex items-center gap-2 rounded-md ${className}`}
    >
      <input
        type="text"
        className={`grow p-2 rounded-md text-sm outline-none ${inputClassName}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
      <SearchIcon className={`text-gray-400 ${iconClassName}`} />
    </label>
  );
};

export default SearchBar;

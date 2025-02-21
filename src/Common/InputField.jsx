import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const InputField = ({
  label,
  required,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="mb-4 w-full min-w-0">
      <label className="block text-sm font-medium mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {type === "select" ? (
        <div className="relative w-full">
          <select
            name={name}
            className="input input-bordered w-full bg-gray-200 border-none pr-10"
            value={value}
            onChange={onChange}
            required={required}
          >
            <option value="">Select {label}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ExpandMoreIcon
            className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none"
          />
        </div>
      ) : type === "radio" ? (
        <div className="flex gap-4">
          {options.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="radio"
                name={name}
                required={required}
                value={option}
                checked={value === option}
                onChange={onChange}
                className="radio border-lime-400"
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type={type}
          name={name}
          className="input input-bordered w-full bg-gray-200 border-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;

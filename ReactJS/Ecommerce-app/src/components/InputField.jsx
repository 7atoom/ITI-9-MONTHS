import React from "react";

function InputField({ title, name, placeholder, register, errors }) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {title}
      </label>
      <input
        id={name}
        type="text"
        placeholder={placeholder}
        {...register(name)}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic mt-2">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default InputField;

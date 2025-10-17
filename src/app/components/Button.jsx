import React from "react";

function Button({ text }) {
  return (
    <button className="cursor-pointer rounded-xl border-2 py-2 px-2 hover:bg-black hover:text-white">
      {text}{" "}
    </button>
  );
}

export default Button;

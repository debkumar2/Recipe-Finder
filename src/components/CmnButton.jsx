import React from "react";

const CmnButton = ({ btnName, variant }) => {
  const variants = {
    dark: "bg-black hover:bg-gray-800",
    red: "bg-red-800 hover:bg-red-900",
  };
  return (
    <>
      <button
        class={`inline-block cursor-pointer items-center justify-center rounded-3xl border-[1.58px] border-zinc-600 ${variants[variant]} px-6 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl`}
      >
        {btnName}
      </button>
    </>
  );
};

export default CmnButton;

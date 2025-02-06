import React from "react";

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-center items-center">
      <img src="/MainLogo.png" alt="Loading Icon" className="h-12" />
      <div className="mt-4 animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#FF6600]"></div>
    </div>
  );
}

export default Loading;
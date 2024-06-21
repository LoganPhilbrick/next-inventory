"use client";

import { useState } from "react";

export default function ItemModal({ visibility, setVisibility }) {
  function toggleModal() {
    if (visibility === "hidden") {
      setVisibility("");
    } else {
      setVisibility("hidden");
    }
  }

  return (
    <div className="flex justify-center fixed w-full h-full top-0 left-0 bg-zinc-950/70 z-10" style={{ visibility }}>
      <div className="bg-white w-1/4 h-72 mt-48 rounded-lg shadow-md z-1">
        <content className="flex flex-col justify-between h-full p-6">
          <div className="">
            <h2 className="text-2xl font-bold">Item Name</h2>
            <p>$3.00</p>
          </div>
          <div className="flex">
            <p className="mr-2">Units sold:</p>
            <select required className="rounded-md w-full pl-1 w-1/2 text-black shadow-lg border">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button className="pt-auto bg-sky-500 w-16 h-8 rounded-lg shadow-lg">submit</button>
            <button className="pt-auto bg-red-400 w-16 h-8 rounded-lg shadow-lg" onClick={toggleModal}>
              cancel
            </button>
          </div>
        </content>
      </div>
    </div>
  );
}

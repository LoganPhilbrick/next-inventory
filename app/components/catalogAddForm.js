"use client";

import { useState, useRef } from "react";
import { addCatalogItem } from "../server/addCatalogItem/route";
import { getCatalog } from "../server/getCatalog/route";

export default function CatalogAddForm({ setList, list }) {
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");

  const formRef = useRef();

  function filterCat(objects) {
    return objects.type === "ITEM";
  }

  const submit = async () => {
    await addCatalogItem(name, currency);

    const getList = async () => {
      const catalog = await getCatalog();
      const newCat = catalog.filter(filterCat);
      setList(newCat);
      console.log(newCat);
    };
    getList();

    formRef.current.reset();
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    console.log(name);
  };

  const handleCurrencyChange = (event) => {
    const value = event.target.value;
    setCurrency(value);
    console.log(currency);
  };

  return (
    <div className="m-4 pb-4 flex justify-center ">
      <form action={submit} ref={formRef}>
        <div className="p-4">
          <input required style={{ resize: "none" }} className="rounded-md w-full mb-2 pl-1 text-black shadow-lg" placeholder="Product name" onChange={handleNameChange} />
          <input required style={{ resize: "none" }} className="rounded-md w-full pl-1 text-black shadow-lg" placeholder="Price in cents(i.e. 300)" onChange={handleCurrencyChange} />
        </div>
        <button className="ml-4 bg-sky-500 w-16 h-8 rounded-lg shadow-lg" variant="outline" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

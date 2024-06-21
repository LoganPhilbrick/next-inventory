"use client";

import { useState, useEffect } from "react";
import { getCatalog } from "./server/getCatalog/route";
import ItemModal from "./components/itemModal";

import CatalogList from "./components/catalogList";
import CatalogAddForm from "./components/catalogAddForm";

export default function Home() {
  const [list, setList] = useState(null);
  const [visibility, setVisibility] = useState("hidden");

  function filterCat(objects) {
    return objects.type === "ITEM";
  }

  useEffect(() => {
    if (!list) {
      const getList = async () => {
        const catalog = await getCatalog();
        const newCat = catalog.filter(filterCat);
        setList(newCat);
        console.log(newCat);
      };
      getList();
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center pt-8">
      <ItemModal visibility={visibility} setVisibility={setVisibility} />
      <CatalogAddForm setList={setList} list={list} />
      <CatalogList list={list} visibility={visibility} setVisibility={setVisibility} />
    </main>
  );
}

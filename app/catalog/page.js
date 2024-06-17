"use client";

import { useEffect, useState } from "react";
import { getCatalog } from "../server/getCatalog/route";

export default function Catalog() {
  const [list, setList] = useState(null);

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

  return !list ? (
    <div>
      <div>Loading...</div>
    </div>
  ) : (
    <div>
      {list.map((item, index) => (
        <main key={index} className="m-4 border rounded-lg w-fit p-4">
          <div>Item Type: {item.type}</div>
          <div>Item Name: {item.itemData.name}</div>
          <div>Item Id: {item.id}</div>
        </main>
      ))}
    </div>
  );
}

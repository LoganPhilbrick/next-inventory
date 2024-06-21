"use client";

export default function CatalogList({ list, visibility, setVisibility }) {
  function toggleModal() {
    if (visibility === "hidden") {
      setVisibility("");
    } else {
      setVisibility("hidden");
    }
  }
  return !list ? (
    <div>
      <div>Loading...</div>
    </div>
  ) : (
    <div className="flex flex-wrap justify-center w-2/3">
      {list.map((item, index) => (
        <main key={index} className="flex flex-col items-center w-72 m-4 p-8 rounded-lg shadow-lg bg-white cursor-pointer hover:scale-105 transition-all" onClick={toggleModal}>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-4">{item.itemData.name}</h1>
            <h2 className="m-4 text-xl">{`${(parseInt(item.itemData.variations[0].itemVariationData.priceMoney.amount) / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}`}</h2>
          </div>
        </main>
      ))}
    </div>
  );
}

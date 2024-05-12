"use client";
export default function Banner() {
  const handleClick = () => {};

  return (
    <div className="mb-12 grid lg:mb-24 lg:grid-cols-2">
      <div className="z-20 flex flex-col px-2 md:pt-12">
        <h1 className="my-2 flex-wrap">
          <span className="pr-2 text-white">Coffee</span>
          <span className="text-gray-900">Connisseur</span>
        </h1>
        <p className="font-sans text-xl font-semibold text-gray-900 md:mt-5 lg:text-2xl">
          Discover Your local coffee shops!
        </p>
        <div className="mt-12">
          <button onClick={handleClick}>View stores nearby</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

function Hearder2() {
  const list = [
    {
      name: "Banglore",
    },
    {
      name: "Culcutta",
    },
    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Chennai",
    },
    {
      name: "Gurgaon",
    },
    {
      name: "Noida",
    },
    {
      name: "Pune",
    },
    {
      name: "Odisha",
    },
    {
      name: "All Cites",
    },
  ];
  return (
    <>
      <div className="flex px-10 py-2 bg-gray-100 justify-around">
        {list.map((item) => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </>
  );
}

export default Hearder2;

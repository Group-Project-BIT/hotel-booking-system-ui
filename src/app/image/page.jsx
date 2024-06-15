"use client"
import React from "react";

const Page = () => {
  const onchange = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  return (
    <div>
      <input accept="/image" type="file" onChange={onchange} />
    </div>
  );
};

export default Page;

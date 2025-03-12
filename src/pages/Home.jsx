import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import getData from "../hooks/getData";
import Card from "../components/Card";

export const Home = () => {
  const { data, loading, error } = getData("/products");

  console.log(data?.items);

  return (
    <div>
      <Header />
      <Brands />

      <div>
        {data?.items?.map((product) => {
          return <Card {...product} />;
        })}
      </div>
    </div>
  );
};

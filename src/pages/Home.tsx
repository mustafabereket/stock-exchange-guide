import React, { useEffect, useState } from "react";
import { Exchange } from "../types.d";
import ExchangeCard from "../components/ExchangeCard";
import Spinner from "../components/UI/Spinner";

function Home() {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [error, setError] = useState<string>("");

  const getExchanges = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/exchanges?per_page=10"
      );
      const data = await response.json();
      setExchanges(data);
    } catch (e) {
      setError(`Something went wrong ${e}`);
    }
  };

  useEffect(() => {
    getExchanges();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <>
      <h2 className={"text-white text-2xl md:text-4xl text-center mt-8"}>
        Stock Exchange Info Guide
        <img
          src={
            "https://stake.fish/static/colored-main-logo-56c6accca488de26c44ef7f799949039.png"
          }
          width={136}
          className={"mx-auto my-8"}
          alt={"stakefish"}
        />
      </h2>
      <div className={"m-auto grid md:grid-cols-2 grid-cols-1"}>
        {exchanges.length ? (
          exchanges.map((exchange: Exchange) => {
            return <ExchangeCard key={exchange.name} {...exchange} />;
          })
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default Home;

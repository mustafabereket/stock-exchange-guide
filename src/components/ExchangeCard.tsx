import React from "react";
import { Exchange } from "../types.d";
import Badge from "./UI/Badge";
import { Link } from "react-router-dom";

const ExchangeCard = ({
  image,
  name,
  trust_score_rank,
  year_established,
  country,
  url,
  id,
}: Exchange) => {
  return (
    <div
      className={
        "grid grid-rows-1 lg:grid-cols-3 lg:gap-8 gap-4 w-2/3 text-white bg-slate-600 bg-opacity-30 my-12 p-4 border border-gray-600 rounded m-auto transition duration-500 hover:scale-110 hover:bg-slate-700"
      }
    >
      <div className={"flex justify-center items-center"}>
        <img src={image} alt={name} className={"w-20 h-20 rounded-full"} />
      </div>
      <div className={"flex flex-col gap-2 text-center items-center"}>
        <h2 className={"text-4xl"}>{name}</h2>
        <h3>{country}</h3>
        <button
          type="button"
          className={
            "inline-flex items-center px-5 py-2.5 text-sm font-medium bg-blue-600 rounded-lg hover:bg-blue-800"
          }
        >
          <Link to={`/exchange/${id}`}>Details</Link>
        </button>
      </div>
      <div className={"flex flex-col text-center gap-2"}>
        <Badge title={"Trust Rank: "} data={trust_score_rank} />
        <Badge title={"Founded in: "} data={year_established} />
        {url && (
          <a
            className={"text-sm hover:text-blue-500"}
            href={url}
            target={"_blank"}
            rel="noreferrer"
          >
            Visit Their Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ExchangeCard;

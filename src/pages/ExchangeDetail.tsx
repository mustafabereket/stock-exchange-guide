import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ExchangeDetailsType } from "../types.d";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoReddit,
  IoMdArrowRoundBack,
} from "react-icons/io";
import Spinner from "../components/UI/Spinner";

function ExchangeDetail() {
  const { id } = useParams();
  const [exchangeDetails, setExchangeDetails] = useState<ExchangeDetailsType>();
  const [error, setError] = useState<string>("");

  const getExchangeDetails = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/exchanges/${id}`
      );
      const data = await response.json();
      setExchangeDetails(data);
    } catch (e) {
      setError(`Something went wrong ${e}`);
    }
  };

  useEffect(() => {
    getExchangeDetails();
  }, []);

  if (error) return <div>{error}</div>;

  if (!exchangeDetails)
    return (
      <div className={"mx-auto my-16"}>
        <Spinner />
      </div>
    );

  return (
    <div>
      <div
        className={
          "top-0 fixed flex justify-center w-full text-center items-center bg-sky-500 text-white text-xl h-8 md:h-12 cursor-pointer"
        }
      >
        <Link to={"/"}>
          <IoMdArrowRoundBack className={"inline"} /> Back
        </Link>
      </div>
      <div
        className={
          "flex flex-col w-1/2 m-auto md:gap-8 gap-4 text-white justify-center items-center text-center md:my-24 my-12"
        }
      >
        <h1 className={"text-4xl"}>{exchangeDetails.name}</h1>
        {exchangeDetails.image && (
          <img
            src={exchangeDetails.image}
            alt={exchangeDetails.name}
            className={"w-20 h-20 rounded-full"}
          />
        )}
        {exchangeDetails.country && (
          <p className={"text-2xl"}>{exchangeDetails.country}</p>
        )}
        {exchangeDetails.year_established && (
          <p className={"text-2xl"}>
            Founded in {exchangeDetails.year_established}
          </p>
        )}
        {exchangeDetails.trust_score_rank && (
          <p className={"text-2xl"}>
            Trust Score Rank
            <br />
            {exchangeDetails.trust_score_rank}
          </p>
        )}
        {exchangeDetails.description && (
          <p className={"text-2xl"}>{exchangeDetails.description}</p>
        )}
        {exchangeDetails.url && (
          <a
            className={"text-blue-200 hover:scale-125 cursor-pointer"}
            href={exchangeDetails.url}
            target={"_blank"}
            rel="noreferrer"
          >
            {exchangeDetails.url}
          </a>
        )}
        {exchangeDetails.twitter_handle && (
          <div className={"text-xl self-center flex flex-col justify-center"}>
            <IoLogoTwitter className={"m-auto w-12 h-12"} />
            <a
              className={"cursor-pointer"}
              href={`https://twitter.com/${exchangeDetails.twitter_handle}`}
            >
              <span>@{exchangeDetails.twitter_handle}</span>
            </a>
          </div>
        )}
        {exchangeDetails.facebook_url && (
          <div className={"text-xl self-center flex flex-col justify-center"}>
            <IoLogoFacebook className={"m-auto w-12 h-12"} />
            <a className={"cursor-pointer"} href={exchangeDetails.facebook_url}>
              {exchangeDetails.facebook_url}
            </a>
          </div>
        )}
        {exchangeDetails.reddit_url && (
          <div className={"text-xl self-center flex flex-col justify-center"}>
            <IoLogoReddit className={"m-auto w-12 h-12"} />
            <a className={"cursor-pointer"} href={exchangeDetails.reddit_url}>
              {exchangeDetails.reddit_url}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExchangeDetail;

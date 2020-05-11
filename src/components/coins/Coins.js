import React from "react";
import CoinItem from "./CoinItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Coins = ({ coins, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={coinStyle}>
        {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
        ))}
      </div>
    );
  }

};

Coins.propTypes = {
  coins: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const coinStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Coins;

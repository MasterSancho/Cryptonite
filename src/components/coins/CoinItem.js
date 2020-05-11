import React from "react";
import PropTypes from "prop-types";

const CoinItem = ({ coin: { image, symbol, name } }) => {
  return (
    <div className="card text-center">
      <img src={image.small} alt="" style={{ width: "60px" }} />
      <h2>{symbol}</h2>
      <h3>{name}</h3>
      <div>
        <a href="/" className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

CoinItem.propTypes = {
  coin: PropTypes.object.isRequired,
};

export default CoinItem;

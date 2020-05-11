import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Coins from "./components/coins/Coins";
import Search from "./components/coins/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    coins: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.coingecko.com/api/v3/coins");

    this.setState({ coins: res.data, loading: false });
  }

  // Search Crypto Coins
  searchCoins = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/name.${text}`
    );

    this.setState({ coins: res.data, loading: false });
    
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchCoins={this.searchCoins} />
          <Coins loading={this.state.loading} coins={this.state.coins} />
        </div>
      </div>
    );
  }
}

export default App;

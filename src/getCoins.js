import axios from "axios";
import { displayCoins } from "./displayCoins";

let duplicate = [];

export const getCoins = async (inputVal) => {
  const API_KEY = "coinranking6754c4b360f1865fbd0072c70a15a31488ea0ef7703d6471";

  const options = {
    headers: { "x-access-token": API_KEY },
  };

  const URL = `https://api.coinranking.com/v2/coins?search=${inputVal}`;

  try {
    const res = await axios(URL, options);

    if (!res.data.data.coins[0]) {
      alert("Coin can not be found");
    } else {
      duplicateData(res.data.data.coins[0]);

      displayCoins(res.data.data.coins[0]);
    }
  } catch (error) {
    console.log(error);
  }
};

const duplicateData = (data) => {
  if (!duplicate.some((item) => item.name === data.name)) {
    duplicate.push(data);
  } else {
    const l = () => {
      const nodeList = document.querySelectorAll("li");
      console.log(nodeList);
      nodeList.style.display = "none";
    };
    l();
  }
};

export default duplicateData;

import React, { useState } from "react";
import axios from "axios";

const DeployNFT = () => {
  const [chain, setChain] = useState("");
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [supply, setSupply] = useState("");
  const [digits, setDigits] = useState(0);
  const [address, setAddress] = useState("");
  const [signatureId, setSignatureId] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-eu1.tatum.io/v3/blockchain/token/deploy",
        {
          chain: chain,
          name: name,
          symbol: symbol,
          supply: supply,
          digits: digits,
          signatureId: signatureId,
          address: address,
          fee: {
            gasLimit: "4000000000",
            gasPrice: "10",
          },
        },
        {
          headers: {
            "x-api-key": "40abb793-5930-4f48-9eab-79cdfd6f0e9e",
          },
        }
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      NFT Deploy with kms <br />
      <br />
      Chain:
      <input
        placeholder="Chain"
        value={chain}
        onChange={(e) => setChain(e.target.value)}
      />
      <br />
      Name:
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Symbol:
      <input
        placeholder="symb"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <br />
      supply:
      <input
        placeholder="supply"
        value={supply}
        onChange={(e) => setSupply(e.target.value)}
      />
      <br />
      Digits:
      <input
        placeholder="digits"
        value={digits}
        onChange={(e) => setDigits(e.target.value)}
      />
      <br />
      Address:
      <input
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      signatureId
      <input
        placeholder="signature id"
        value={signatureId}
        onChange={(e) => setSignatureId(e.target.value)}
      />
      <br />
      <button onClick={() => handleSubmit()}>Deploy</button>
    </div>
  );
};

export default DeployNFT;

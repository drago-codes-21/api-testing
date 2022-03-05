import React, { useState } from "react";
import axios from "axios";

const MintNFT = () => {
  const [chain, setChain] = useState("");
  const [to, setTo] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [signatureId, setSignatureId] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-eu1.tatum.io/v3/blockchain/token/mint",
        {
          chain: chain,
          signatureId: signatureId,
          nonce: 0,
          contractAddress: contractAddress,
          to: to,
          amount: amount,
          fee: {
            gasLimit: "4000000",
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
      console.log(data.txId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Mint NFt <br />
      <br />
      Chain:
      <input
        placeholder="Chain"
        value={chain}
        onChange={(e) => setChain(e.target.value)}
      />
      <br />
      Amount:
      <input
        placeholder="name"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      to-address:
      <input
        placeholder="key "
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <br />
      contract address:
      <input
        placeholder="supply"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
      />
      <br />
      signatureId
      <input
        placeholder="signature id"
        value={signatureId}
        onChange={(e) => setSignatureId(e.target.value)}
      />
      <br />
      <button onClick={() => handleSubmit()}>Mint</button>
    </div>
  );
};

export default MintNFT;

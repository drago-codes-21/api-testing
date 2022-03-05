import React, { useState } from "react";
import axios from "axios";

const TransferNFT = () => {
  const [chain, setChain] = useState("");
  const [to, setTo] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [signatureId, setSignatureId] = useState("");
  const [digits, setDigits] = useState(0);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api-eu1.tatum.io/v3/blockchain/token/transaction",
        {
          chain: chain,
          to: to,
          amount: amount,
          contractAddress: contractAddress,
          digits: digits,
          signatureId: signatureId,
          nonce: 0,
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
      Transfer Token <br />
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
      Digits:
      <input
        placeholder="digits"
        value={digits}
        onChange={(e) => setDigits(e.target.value)}
      />
      <br />
      <button onClick={() => handleSubmit()}>Transfer</button>
    </div>
  );
};

export default TransferNFT;

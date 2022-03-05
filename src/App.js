import "./App.css";
import DeployNFT from "./components/1-DeployNft";
import MintNFT from "./components/2-MintNftKMS";
import TransferNFT from "./components/3- sendToken";

function App() {
  return (
    <div className="App">
      <DeployNFT />
      <br />
      <br />
      <br />
      <MintNFT />
      <br />
      <br />
      <br />
      <TransferNFT />
    </div>
  );
}

export default App;

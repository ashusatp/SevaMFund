import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import {ProjectABI, SevaMFundABI, contractAddress} from './contract'



export const FundsContext = React.createContext();
const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};

export const FundsProvider = ({ children }) => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

 
    //--- connect with smart contract
    const connectWithSmartContract = (contractAdd, contractABI) =>{
        try{
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAdd,contractABI,signer);;
            return contract; 
        }catch(err){
            console.log("something went wrong while connecting with contract");
        }
    }

  // connect wallet  
  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    if (provider.network !== "matic") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["polygon"],
          },
        ],
      });
    }
    const account = provider.getSigner();
    const Address = await account.getAddress();
    setAddress(Address);
    const Balance = ethers.utils.formatEther(await account.getBalance());
    setBalance(Balance);
  };

  return (
    <FundsContext.Provider value={
        { 
            address, 
            balance, 
            connectWallet, 
            ProjectABI, 
            SevaMFundABI, 
            contractAddress,
            connectWithSmartContract
        }
    }>
      {children}
    </FundsContext.Provider>
  );
};

import React, { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core'


const Home = () => {
    const [balance,setBalance]= useState("")
    const { active, chainId, account, library } = useWeb3React();
    useEffect(() => {
        library?.getBalance(account).then((result)=>{
          setBalance(result/1e18)
        })
    },);
    return (
            <div className="container">
                <div className="card connect-wallet">
                    <div className="card-header">
                        Wallet Overview
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Active: {active}</li>
                        <li className="list-group-item">Account: {account}</li>
                        <li className="list-group-item">ETH Balance: {balance}</li>
                        <li className="list-group-item">Network ID: {chainId}</li>
                    </ul>
                </div>
            </div>
)}

export default Home;
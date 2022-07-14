import React from "react"
import { useWeb3React } from '@web3-react/core'


const Home = () => {
    const { active, chainId, account } = useWeb3React();
    return (
            <div className="container">
                <div className="card connect-wallet">
                    <div className="card-header">
                        Wallet Overview
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Connection Status: {active}</li>
                        <li className="list-group-item">Account: {account}</li>
                        <li className="list-group-item">Network ID: {chainId}</li>
                    </ul>
                </div>
            </div>
)}

export default Home;
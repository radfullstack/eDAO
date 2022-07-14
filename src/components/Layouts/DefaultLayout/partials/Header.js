import React from "react"
import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";


import Connect from "../../../../Connect"

const CoinbaseWallet = new WalletLinkConnector({
 url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 appName: "Web3-react Demo",
 supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
});


const Header = () => {
    const { activate, connectWallet } = useWeb3React();
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">OCTOTHORPE LABS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarCollapse" className="collapse navbar-collapse">
                        <ul className="ms-auto navbar-nav mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Connect Wallet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => { activate(CoinbaseWallet) }} className="nav-link">Coinbase Wallet</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => { activate(WalletConnect) }} className="nav-link">Wallet Connect</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => { activate(Injected) }} className="nav-link">Connect MetaMask</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;
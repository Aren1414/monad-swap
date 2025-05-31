import { ethers } from "ethers";

async function connectMetamask() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            console.log("Connected account:", accounts[0]);
            return { provider, signer, accounts };
        } catch (error) {
            console.error("Error connecting MetaMask:", error);
        }
    } else {
        console.log("MetaMask not detected! Please install MetaMask.");
    }
}

export default connectMetamask;

import { ethers } from "ethers";

async function connectMetamask() {
    if (!window.ethereum) {
        alert("MetaMask not detected! Please install MetaMask.");
        return;
    }

    try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        console.log("Connected account:", accounts[0]);
        alert("Connected to: " + accounts[0]);

        return { provider, signer, accounts };
    } catch (error) {
        console.error("Error connecting MetaMask:", error);
        alert("Error: " + error.message);
    }
}

export default connectMetamask;

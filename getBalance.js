import { ethers } from "ethers";
import connectMetamask from "./connectMetamask.js";

async function getBalance() {
    const { provider, accounts } = await connectMetamask();
    if (!provider || !accounts) {
        alert("MetaMask connection failed!");
        return;
    }

    try {
        const balance = await provider.getBalance(accounts[0]);
        console.log("Wallet Balance:", ethers.formatEther(balance), "ETH");
        alert("Wallet Balance: " + ethers.formatEther(balance) + " ETH");
    } catch (error) {
        console.error("Balance Fetch Error:", error);
        alert("Error retrieving balance: " + error.message);
    }
}

export default getBalance;

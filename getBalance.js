import { ethers } from "ethers";
import connectMetamask from "./connectMetamask.js";

async function getBalance() {
    const { provider, accounts } = await connectMetamask();
    if (!provider) return;

    const balance = await provider.getBalance(accounts[0]);
    console.log("Wallet Balance:", ethers.utils.formatEther(balance), "ETH");
}

export default getBalance;

/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import { createContext, useEffect, useState } from 'react';
import { contractABI, contractAddress } from '~/utils/constantjs';

export const TransactionContext = createContext();

const { ethereum } = window

const getEthereumContract = async () => {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider(ethereum);

        // MetaMask requires requesting permission to connect users accounts
        // await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner()
        const contractAddress = new ethers.Contract(contractAddress, contractABI, signer)
        console.log(provider, signer.contractAddress);
}
export const TransactionProvider = ({ children }) => {

        const [currentAccount, setCurrentAccount,] = useState([]);
        const checkWalletIsConnected = async () => {
                if (!ethereum) return alert("Please install Metamask")
                const accounts = await ethereum.request({ method: 'eth_accounts' })
        }
        useEffect(() => {
                checkWalletIsConnected()
        }, [])

        const connectedWallet = async () => {
                try {
                        if (!ethereum) return alert("Please install Metamask")
                        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
                        setCurrentAccount(accounts[0])
                } catch (error) {
                        throw new Error('No Ethereum object.')
                }
        }
        return (
                <TransactionContext.Provider value={{ connectedWallet, currentAccount, setCurrentAccount }}>
                        {children}
                </TransactionContext.Provider>
        )

}
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import { createContext, useEffect, useState } from 'react';
import { contractABI, contractAddress, addressTo } from '~/utils/constantjs';

export const TransactionContext = createContext();

const { ethereum } = window

const createEthereumContract = () => {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
        return transactionsContract;
}
export const TransactionProvider = ({ children }) => {
        const [isLoading, setIsLoading] = useState(false)
        const [loadingConnectWallet, setLoadingConnectWallet] = useState(false)
        const [amount, setAmount] = useState('')
        const [currentWallet, setCurrentWallet,] = useState('');
        const checkWalletIsConnected = async () => {
                if (!ethereum) return alert("Please install Metamask")
                const accounts = await ethereum.request({ method: 'eth_accounts' })
                setCurrentWallet(accounts[0])
        }
        useEffect(() => {
                checkWalletIsConnected()
        }, [])
        const handlePrice = (price) => {
                setAmount(price)
        }
        const connectWallet = async () => {
                try {
                        if (!ethereum) return alert("Please install Metamask")
                        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
                        setCurrentWallet(accounts[0])
                        setLoadingConnectWallet(false)

                } catch (error) {
                        throw new Error('No Ethereum object.')
                }
        }

        const sendTransaction = async () => {
                try {
                        if (ethereum) {
                                const transactionsContract = createEthereumContract();
                                const parsedAmount = ethers.utils.parseEther(amount);
                                console.log(addressTo);
                                await ethereum.request({
                                        method: "eth_sendTransaction",
                                        params: [{
                                                from: currentWallet,
                                                to: addressTo,
                                                gas: "0x5208",
                                                value: parsedAmount._hex,
                                        }],
                                });
                                const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount);
                                setIsLoading(true)
                                await transactionHash.wait();
                                setIsLoading(false)
                                window.location.href = '/order-success';
                        }
                        else {
                                console.log("No ethereum object");
                        }

                } catch (error) {
                        console.log(error);
                }
        }
        return (
                <TransactionContext.Provider value={{ connectWallet, currentWallet, setCurrentWallet, handlePrice, addressTo, sendTransaction, isLoading, setIsLoading, setLoadingConnectWallet, loadingConnectWallet }}>
                        {children}
                </TransactionContext.Provider>
        )

}
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import { createContext, useEffect, useState } from 'react';
import { contractABI, contractAddress, addressTo } from '~/utils/constantjs';
import entidyAPI from "~/API"

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
        const [transactions, setTransactions] = useState([]);
        const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

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

        const sendTransaction = async ({ id }) => {
                try {
                        if (ethereum) {
                                const transactionsContract = createEthereumContract();
                                const parsedAmount = ethers.utils.parseEther(amount);
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
                                console.log(transactionHash);
                                await transactionHash.wait();
                                setIsLoading(false)
                                const transactionsCount = await transactionsContract.getTransactionCount();

                                setTransactionCount(transactionsCount.toNumber());

                                entidyAPI.put(`/user/order/${id}`)
                                        .then(() => {
                                                window.location.href = `/order/${id}`

                                        })
                                        .catch(err => {
                                                console.log(err);
                                        })
                        }
                        else {
                                console.log("No ethereum object");
                        }

                } catch (error) {
                        console.log(error);
                }
        }
        const getAllTransactions = async () => {
                try {
                        if (ethereum) {
                                const transactionsContract = createEthereumContract();
                                const availableTransactions = await transactionsContract.getAllTransactions();
                                const structuredTransactions = availableTransactions.map((transaction) => ({
                                        addressTo: transaction.receiver,
                                        addressFrom: transaction.sender,
                                        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                                        amount: parseInt(transaction.amount._hex) / (10 ** 18)
                                }));
                                setTransactions(structuredTransactions);
                        } else {
                                console.log("Ethereum is not present");
                        }
                } catch (error) {
                        console.log(error);
                }
        };
        return (
                <TransactionContext.Provider value={{ connectWallet, currentWallet, setCurrentWallet, handlePrice, addressTo, sendTransaction, isLoading, setIsLoading, setLoadingConnectWallet, loadingConnectWallet }}>
                        {children}
                </TransactionContext.Provider>
        )

}
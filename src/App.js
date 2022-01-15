import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'
import Home from './components/home-container/home/Home'
import PetDetails from './components/home-container/nft-details/NFTDetails'
import CreatePet from './components/create-post/CreateNFT'
import Web3 from 'web3'
import MyNFT from './abis/NFT.json'
import { useState } from 'react'

function App() {
  // Add variables

  const loadWeb3 = async () => {}
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.request({ method: 'eth_requestAccounts'})
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert(
        'Non-Ethereum browser detected.  Consider downloading Metamask!'
      )
    }
  }

  // load the connected account and connect it with the network ID
  const getContract = async () => {}\
    const Web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])
    const networkId = await web3.eth.net.getId()
    const networkData = MyNFT.networks[networkId]

    if (networkData) {
      const abi = MyNFT.abi
      const address = MyNFT.networks[networkId].address
      const myContract = new web3.eth.Contract(abi, address)
      setContractData(myContract)
    } else {
      window.alert(
        'Contract has not been deployed to the detected network.',
        'Please connect to the correct network'
      )
    }

  // Call these functions inside the wallet
    const connectWallet = async () => {
      await loadWeb3()
      await getContract()
    }

  const [ account, setAccount] = useState('')

  const MyNFT from './abis/NFT.json'

  const { useState } from 'react'





  // We have the account variable and the connectWallet functions.
  // Let's pass them to the Navbar component which will be used to connect our wallet
  // We'll also need to add a "Connect Wallet" button inside of Navbar.js.
  // Pass the account variable and the connectWallet function to the Navbar as properties.
  return (
    <Router>
      <div className="cl">
        <Navbar account={account} connectWallet={connectWallet} />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/create-nft" component={CreateNFT} />
          <Route path="/nft-details/:nftId">  // needs the account and contractData variable to mint NFTs
            <NFTDetails account={account} contractData={contractData} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )


export default App

function getBalance(userAddress) {
  // Correctly retrieves the user's balance using their address
  return web3.eth.getBalance(userAddress);
}
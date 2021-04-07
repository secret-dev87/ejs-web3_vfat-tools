
$(function() {
    consoleInit();
    start(main);
  });

  const MIMO_STAKING_ABI = [{"inputs":[{"internalType":"contract IGovernanceAddressProvider","name":"_addresses","type":"address"},{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"stake","type":"uint256"}],"name":"StakeDecreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"stake","type":"uint256"}],"name":"StakeIncreased","type":"event"},{"inputs":[],"name":"a","outputs":[{"internalType":"contract IGovernanceAddressProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingMIMO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"releaseMIMO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"stake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userInfo","outputs":[{"components":[{"internalType":"uint256","name":"stake","type":"uint256"},{"internalType":"uint256","name":"accAmountPerShare","type":"uint256"}],"internalType":"struct IGenericMiner.UserInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    
  async function main() {  
    const App = await init_ethers();
  
    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");
  
    const MIMO_STAKING_ADDR = "0x9DD8C3d3E3ec1569e3eE22C4ef26581619ab4222";
    const MIMO_STAKING_CONTRACT = new ethers.Contract()

    //pending mimo (PendingMIMO)
    //staking token (token)
    //users staked (stake)
    //total staked (totalStake)
    //user info gives me a tuple

    await loadChefContract(App, PICKLE_CHEF, PICKLE_CHEF_ADDR, PICKLE_CHEF_ABI, rewardTokenTicker,
        "pickle", null, rewardsPerWeek, "pendingPickle");

    hideLoading();  
  }
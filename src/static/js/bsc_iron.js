$(function() {
  consoleInit()
  start(main)
})

const BEP20_ABI =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

const vFarmAbi = [{"inputs":[{"internalType":"address","name":"_controller","type":"address"},{"internalType":"uint256","name":"_version","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"AddRewardPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":true,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"pendingReward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rebaseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paidReward","type":"uint256"}],"name":"PayRewardPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"address","name":"rewardMultiplier","type":"address"}],"name":"UpdateRewardMultiplier","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endRewardBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"UpdateRewardPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"address","name":"rewardRebaser","type":"address"}],"name":"UpdateRewardRebaser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BLOCKS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_rewardRebaser","type":"address"},{"internalType":"address","name":"_rewardMultiplier","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endRewardBlock","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_lockRewardPercent","type":"uint256"},{"internalType":"uint256","name":"_startVestingBlock","type":"uint256"},{"internalType":"uint256","name":"_endVestingBlock","type":"uint256"}],"name":"addRewardPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"allowRecoverRewardToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getAllRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_account","type":"address"}],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"getRewardMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"pid","type":"uint8"}],"name":"getRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_pendingReward","type":"uint256"}],"name":"getRewardRebase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_account","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"accumulatedEarned","type":"uint256"},{"internalType":"uint256","name":"lockReward","type":"uint256"},{"internalType":"uint256","name":"lockRewardReleased","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeToken","type":"address"},{"internalType":"uint256","name":"_unstakingFrozenTime","type":"uint256"},{"internalType":"address","name":"_rewardFund","type":"address"},{"internalType":"address","name":"_timelock","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_account","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardPoolInfo","outputs":[{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"address","name":"rewardRebaser","type":"address"},{"internalType":"address","name":"rewardMultiplier","type":"address"},{"internalType":"uint256","name":"startRewardBlock","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"endRewardBlock","type":"uint256"},{"internalType":"uint256","name":"rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"},{"internalType":"uint256","name":"lockRewardPercent","type":"uint256"},{"internalType":"uint256","name":"startVestingBlock","type":"uint256"},{"internalType":"uint256","name":"endVestingBlock","type":"uint256"},{"internalType":"uint256","name":"numOfVestingBlocks","type":"uint256"},{"internalType":"uint256","name":"totalPaidRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPoolInfoLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"stakeFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timelock","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"unfrozenStakeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unstakingFrozenTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"}],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_rewardMultiplier","type":"address"}],"name":"updateRewardMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"uint256","name":"_endRewardBlock","type":"uint256"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_pid","type":"uint8"},{"internalType":"address","name":"_rewardRebaser","type":"address"}],"name":"updateRewardRebaser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"lastStakeTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const ironPools = [
  '0xe20096c1a803fbeaced072cb972f36dbfdf5ca82',
  '0xf8a5f67a4bef2ec2cf7bd973d63ad8fb64a74735',
  '0xf7610d0ee0fb20589d7e9241269b67c461908e4e',
]

async function loadPoolInfo(vSwapTokenInfo, pool, STAKING_POOL, stakedToken, App) {
    const poolId = 0
    const decimal = pool.stakeToken.decimals
    const stakingTokenTicker = pool.stakeToken.symbol
    const stakedTokenBalance = await stakedToken.balanceOf(App.YOUR_ADDRESS)
    let pendingHarvest
    pendingHarvest = (await STAKING_POOL.pendingReward(poolId, App.YOUR_ADDRESS)) / 10 ** decimal
    const claimFunc = async function() {
      return harvest(STAKING_POOL, App)
    }
    const userInfo = await STAKING_POOL.getUserInfo(poolId, App.YOUR_ADDRESS)
    const userStaked = userInfo.amount / 10 ** decimal
    const tokenPrice = pool.stakeToken.price
    const userStakedUsd = tokenPrice * userStaked
    const userStakedPct = (userStakedUsd * 100) / parseFloat(pool.totalSupplyUSD)

    const exitFunc = async function() {
      return exitFarming(STAKING_POOL, userInfo.amount, App)
    }
    const approveFunc = async function() {
      return approve(stakedToken, pool.contractAddress, stakedTokenBalance, App)
    }
    const revokeFunc = async function() {
      return revoke(stakedToken, pool.contractAddress, App)
    }
    const stakeFunc = async function() {
      return stake(STAKING_POOL, stakedTokenBalance, App)
    }
    const unStakeFunc = async function() {
      return unStake(STAKING_POOL, userInfo.amount, App)
    }

    let rewardToken = Object.keys(pool.rewards)[0]

    // DISPLAY POOL INFORMATION
    _print(`Pool: ${stakingTokenTicker}`)
    _print(' ')
    _print(`Total Value Locked: $${formatMoney(pool.totalSupplyUSD)}`)
    _print(`${stakingTokenTicker} Price: $${parseFloat(tokenPrice).toFixed(2)}`)
    _print(`Reward token: ${rewardToken}`)
    _print(`APR ${parseFloat(pool.roi.apy).toFixed(2)} %`)
    _print(
      `You are staking ${parseFloat(userStaked).toFixed(2)} ${stakingTokenTicker} ($${formatMoney(
        userStakedUsd
      )}), ${userStakedPct.toFixed(2)}% of the pool.`
    )
    if (userStaked > 0) {
      let dailyReward = parseFloat((userStakedUsd * pool.roi.apy) / 100 / 365),
        monthlyReward = parseFloat((userStakedUsd * pool.roi.apy) / 100 / 12),
        yearlyReward = parseFloat((userStakedUsd * pool.roi.apy) / 100)
      _print(
        `Est earning: ` +
          `Daily ${parseFloat(dailyReward / vSwapTokenInfo.price).toFixed(8)} ${rewardToken}  ($${formatMoney(
            dailyReward
          )})  ` +
          `Monthly: ${parseFloat(monthlyReward / vSwapTokenInfo.price).toFixed(8)} ${rewardToken} ($${formatMoney(
            monthlyReward
          )})  ` +
          `Yearly: ${parseFloat(yearlyReward / vSwapTokenInfo.price).toFixed(8)} ${rewardToken} ($${formatMoney(
            yearlyReward
          )}) `
      )
    }
    _print_link(
      `Approve ${parseFloat(stakedTokenBalance / 10 ** decimal).toFixed(8)}  ${stakingTokenTicker}`,
      approveFunc
    )
    _print_link(
      `Stake ${parseFloat(stakedTokenBalance / 10 ** decimal).toFixed(8)}  ${stakingTokenTicker}`,
      stakeFunc
    )
    _print_link(`Unstake ${parseFloat(userStaked).toFixed(8)}  ${stakingTokenTicker}`, unStakeFunc)
    _print_link(`Claim ${pendingHarvest.toFixed(8)} ${rewardToken}`, claimFunc)
    _print_link(`Revoke approval`, revokeFunc)
    _print_link(`Exit`, exitFunc)
    _print('-------------------------------------------------')
    _print('')
}

async function main() {
  const vSwapTokenInfo = await getTokenInfo('vBSWAP')
  const App = await init_ethers()
  _print(`Initialized ${App.YOUR_ADDRESS}\n`)
  _print('Reading smart contracts...\n')
  _print('-------------------------------------------------\n')

  let raw = await fetch('https://api.vswap.fi/api/faas/get-stats?whitelistedBy=ALL')
  let pools = JSON.parse(await raw.text()).data.filter(t => ironPools.indexOf(t.contractAddress) > -1)

  for (const pool of pools) {
    try {
      showLoading()
      const STAKING_POOL = new ethers.Contract(pool.contractAddress, vFarmAbi, App.provider.getSigner())
      const stakedToken = new ethers.Contract(pool.stakeToken.address, BEP20_ABI, App.provider.getSigner())
      await loadPoolInfo(vSwapTokenInfo, pool, STAKING_POOL, stakedToken, App)
      hideLoading()
    } catch (err) {
      console.log(err)
      continue
    }
  }
}

const getTokenInfo = async symbol => {
  let raw = await fetch('https://api.vswap.fi/api/price/get-price?token=' + symbol)
  return JSON.parse(await raw.text()).data
}

const harvest = async (stakingContract, App) => {
  stakingContract
    .claimReward({
      gasLimit: 250000,
    })
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
}

const exitFarming = async (stakingContract, amount, App,) => {
  stakingContract
    .withdraw(amount, {
      gasLimit: 250000,
    })
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
}

const approve = async (contract, spender, amount, App) => {
  contract
    .approve(spender, amount, {
      gasLimit: 250000,
    })
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
}

const revoke = async (contract, spender, App) => {
  contract
    .approve(spender, 0, {
      gasLimit: 250000,
    })
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
}

const stake = async (contract, amount, App) => {
  contract
    .stake(amount, {
      gasLimit: 250000,
    })
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
}

const unStake = async (contract, amount, App) => {
  contract
    .withdraw(amount, {
      gasLimit: 250000,
    })
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
}

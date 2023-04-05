const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log(`owner address: ${owner.address}`);

  console.log(`Deployed token address: ${token.address}`);

  // const AirDropToken = await hre.ethers.getContractFactory("AirDropToken");
  // const airdrop = await AirDropToken.deploy();
  // await airdrop.deployed();
  // console.log(`Deployed airdrop address: ${airdrop.address}`);

  //  // с оунера отправляем в контракт эйрдроп
  // console.log(`Transfer to: ${airdrop.address}`);
  // const transfered = await token.transfer(
  //   airdrop.address,
  //   token.balanceOf(owner.address)
  // );

  const WAIT_BLOCK_CONFIRMATIONS = 6;
  await token.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`Contract deployed to ${token.address} on ${network.name}`);
  // console.log(
  //   `Contract airdrop deployed to ${airdrop.address} on ${network.name}`
  // );

  // console.log(`Verifying contract on Etherscan...`);

  // await run(`verify:verify`, {
  //   address: token.address,
  //   constructorArguments: [],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { expect } from "chai";
import hre from "hardhat";
import { ClickerGame } from "../typechain-types";

describe("ClickerGame", function () {
  let clickerGame: ClickerGame;
  let owner: any;
  let addr1: any;

  beforeEach(async function () {
    [owner, addr1] = await hre.ethers.getSigners();
    const ClickerGame = await hre.ethers.getContractFactory("ClickerGame");
    clickerGame = await ClickerGame.deploy();
    await clickerGame.waitForDeployment();
  });

  it("Should allow updating score", async function () {
    await clickerGame.updateScore(100);
    expect(await clickerGame.getScore(owner.address)).to.equal(100);
  });

  it("Should not allow lower score", async function () {
    await clickerGame.updateScore(100);
    await expect(clickerGame.updateScore(50)).to.be.revertedWith("New score must be higher");
  });

  it("Should emit ScoreUpdated event", async function () {
    await expect(clickerGame.updateScore(200))
      .to.emit(clickerGame, "ScoreUpdated")
      .withArgs(owner.address, 200);
  });

  it("Should return player data", async function () {
    await clickerGame.updateScore(150);
    const [score, lastUpdate] = await clickerGame.getPlayer(owner.address);
    expect(score).to.equal(150);
    expect(lastUpdate).to.be.gt(0);
  });
});
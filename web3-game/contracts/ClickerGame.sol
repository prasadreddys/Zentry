// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ClickerGame {
    struct Player {
        uint256 score;
        uint256 lastUpdate;
    }

    mapping(address => Player) public players;

    event ScoreUpdated(address indexed player, uint256 newScore);

    function updateScore(uint256 _score) external {
        require(_score > players[msg.sender].score, "New score must be higher");
        players[msg.sender].score = _score;
        players[msg.sender].lastUpdate = block.timestamp;
        emit ScoreUpdated(msg.sender, _score);
    }

    function getScore(address _player) external view returns (uint256) {
        return players[_player].score;
    }

    function getPlayer(address _player) external view returns (uint256 score, uint256 lastUpdate) {
        Player memory player = players[_player];
        return (player.score, player.lastUpdate);
    }
}
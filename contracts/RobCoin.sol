// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RobCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("RobCoin", "ROB") {
        _mint(msg.sender, 100 * 10**6);
    }
}
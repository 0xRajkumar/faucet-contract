// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

contract Faucet {
    mapping(address => uint256) public list;
    address public owner;
    uint256 public maxAmount = 0.1 ether;
    event sent(address indexed to, uint256 amount);
    constructor() {
        owner = msg.sender;
    }
    receive() external payable {}
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function giveMe() public {
        require(msg.sender.balance <= 1 ether, "You have sufficient balance");
        require(block.timestamp > list[msg.sender], "You have taken recently");
        address payable pay = payable(msg.sender);
        pay.transfer(maxAmount);
        list[msg.sender] = block.timestamp + (3600 * 24); //Once in day only
        emit sent(msg.sender, maxAmount);
    }
}

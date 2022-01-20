// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract User {
    struct Freelancer {
        string firstName;
        string lastName;
        uint age;
        address wallet_address;
    }

    function createFreelancer(string firstName, string lastName, uint age, address wallet_address) public {

    }
}

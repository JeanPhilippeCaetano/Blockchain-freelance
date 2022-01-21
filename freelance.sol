// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Freelancer {
    event NewFreelancer(uint freelancerId, string name, string email, address wallet);

    struct Freelancer {
        string name;
        string email;
        address wallet;
    }

    Freelancer[] public freelancers;

    function createFreelancer(string memory _name, string memory _email, address _wallet) public {
        freelancers.push(Freelancer(_name, _email, _wallet));
        uint id = freelancers.length;
        emit NewFreelancer(id, _name, _email, _wallet);
    }
}

// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

contract SevaMFund {
    address[] public deployedProjects;

    event projectCreated(
        string title,
        uint requiredAmount,
        address indexed owner,
        address campaignAddress,
        string imgURI,
        uint indexed timestamp,
        string indexed category
    );

    function createProject(
        string memory projectTitle, 
        uint requiredProjectAmount, 
        string memory imgURI, 
        string memory category,
        string memory storyURI) public
    {

        Project newProject = new Project(
            projectTitle, requiredProjectAmount, imgURI, storyURI, msg.sender);
        

        deployedProjects.push(address(newProject));

        emit projectCreated(
            projectTitle, 
            requiredProjectAmount, 
            msg.sender, 
            address(newProject),
            imgURI,
            block.timestamp,
            category
        );

    }
}


contract Project {
    string public title;
    uint public requiredAmount;
    string public image;
    string public story;
    address payable public owner;
    uint public receivedAmount;

    event donated(address indexed donar, uint indexed amount, uint indexed timestamp);

    constructor(
        string memory campaignTitle, 
        uint requiredCampaignAmount, 
        string memory imgURI,
        string memory storyURI,
        address campaignOwner
    ) {
        title = campaignTitle;
        requiredAmount = requiredCampaignAmount;
        image = imgURI;
        story = storyURI;
        owner = payable(campaignOwner);
    }

    function donate() public payable {
        require(requiredAmount > receivedAmount, "required amount fullfilled");
        owner.transfer(msg.value);
        receivedAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}
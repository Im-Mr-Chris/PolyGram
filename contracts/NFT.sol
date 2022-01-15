// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC721/ERC721.sol)

pragma solidity ^0.8.10;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
  constructor() ERC721("Nft", "NFT") public  {}


   function mintPetNFT(string memory _tokenURI) external {
       uint _tokenId = totalSupply().add(1);
       _safeMint(msg.sender, _tokenId);
       _setTokenURI(_tokenId, _tokenURI);
       emit PetNFTCreated(_tokenId, _tokenURI, now, msg.sender);
    }
 }

 /* 
 basic structure of the function, it accepts one argument of string data type
 (path to the image on IFPS).  the tokenid is declared as a uint data type 
 (unsigned only, no negative numbers) to create and set ownership of the NFT.

 _setTokenURL is a function that takes the tokenid and the tokenURI (location of the image).
 This links them together.  This is because every token has an identifier, an owner, 
 and a path to the image.

 we then emit an event with the tokenid, tokenURI, timestamp, and user wallet address
 by calling the emit function and giving it a name. eg. NFT Created

 the last thing to do is define the NFT Created event for transaction confirmations.
 confirmations will return the NFT tokenid, imagePath, the time, and users wallet address.
 */

 }

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library Create2 {
    function create2(bytes memory createCode, uint salNum) internal returns (address base) {
        bytes32 salt = keccak256(abi.encodePacked(salNum++));

        assembly {
            base := create2(0, add(createCode, 32), mload(createCode), salt)
            if iszero(extcodesize(base)) {
                revert(0, 0)
            }
        }
    }    
}
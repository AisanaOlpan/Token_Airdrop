// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IFakeToken {
    function transfer(address _to, uint256 amount) external;

    function transferFrom(address _from, address _to, uint256 _amount) external;
}

contract AirDropToken {
    // мы сначала должны депанировать токен в смарт контракт
    function airDropWithTransfer(
        IFakeToken _tokenAddress,
        address[] memory _addressArr,
        uint256[] memory _amountArray
    ) public {
        for (uint8 i = 0; i < _addressArr.length; i++) {
            _tokenAddress.transfer(_addressArr[i], _amountArray[i]);
        }
    }

    // мы сначала должны сделать approve монет для адреса в смарт контракт airdropToken
    function airDropWithTransferFrom(
        IFakeToken _tokenAddress,
        address[] memory _addressArr,
        uint256[] memory _amountArray
    ) public {
        for (uint8 i = 0; i < _addressArr.length; i++) {
            _tokenAddress.transferFrom(
                msg.sender,
                _addressArr[i],
                _amountArray[i]
            );
        }
    }
}

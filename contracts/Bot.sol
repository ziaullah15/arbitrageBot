// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IERC20.sol";
import "./interfaces/IUniswapV2Router02.sol";
import "./interfaces/IUniswapV2Factory.sol";
import "./interfaces/Ownable.sol";

contract ArbitrageBot is Ownable {
    constructor() {}

    function Checktrade(uint256 a, uint256 b) internal pure {
        require(a >= b, "Unable to Earn profit from the transaction");
    }

    address[] path;
    uint256 public MinPercentage = 20;
    uint256 public Percentage_Divider = 1000;

    function changeMinPercentage(uint256 Percentage) public onlyOwner {
        MinPercentage = Percentage;
    }

    function CalculatePercentage(uint256 amount)
        internal
        view
        returns (uint256)
    {
        uint256 MinToken = amount +
            ((MinPercentage * amount) / Percentage_Divider);
        return MinToken;
    }

    function CrossExchangeArbitrage(
        address router0,
        address router1,
        address token0,
        address token1,
        uint256 amount
    ) public payable onlyOwner {
        address WETH = IUniswapV2Router01(router0).WETH();
        if (token0 == WETH) {
            require(msg.value > 0, "insufficient funds for the transaction");
            uint256 swapedAmount= swapETHtoToken(router0, token1, msg.value);

            IERC20(token1).approve(
                router1,
                IERC20(token1).balanceOf(address(this))
            );
            uint256 tokenAcquired =swapTokenToEth(
                router1,
                token1,
                swapedAmount
            );
            Checktrade(tokenAcquired, CalculatePercentage(msg.value));
        } else if (token1 == WETH) {
            require(amount > 0, "insufficient funds for the transaction");
            IERC20(token0).approve(
                router0,
                IERC20(token0).balanceOf(address(this))
            );
            uint256 swapedAmount =swapTokenToEth(router0, token0, amount);

            uint256 tokenAcquired = swapETHtoToken(router1, token0, swapedAmount);
            Checktrade(tokenAcquired, CalculatePercentage(amount));
        } else {
            require(amount > 0, "insufficient funds for the transaction");
            IERC20(token0).approve(
                router0,
                IERC20(token0).balanceOf(address(this))
            );
            uint256 swapedAmount= swapTokenForToken(router0, token0, token1, amount);
            IERC20(token1).approve(
                router1,
                IERC20(token1).balanceOf(address(this))
            );
            uint256 tokenAcquired =swapTokenForToken(
                router1,
                token1,
                token0,
                swapedAmount
            );
            Checktrade(tokenAcquired, CalculatePercentage(amount));
        }
    }

    function Trianglestrategy(
        address router,
        address token0,
        address token1,
        address token2,
        uint256 amount
    ) public payable onlyOwner {
        address WETH = IUniswapV2Router01(router).WETH();
        if (token0 == WETH) {
            require(msg.value > 0, "insufficient funds for the transaction");
            uint256 swapedAmount1 = swapETHtoToken(router, token1, msg.value);
            IERC20(token1).approve(
                router,
                IERC20(token1).balanceOf(address(this))
            );
            uint256 swapedAmount2 =swapTokenForToken(
                router,
                token1,
                token2,
                swapedAmount1
            );

            IERC20(token2).approve(
                router,
                IERC20(token2).balanceOf(address(this))
            );
            uint tokenAcquired =swapTokenToEth(
                router,
                token2,
                swapedAmount2
            );
            Checktrade(tokenAcquired, CalculatePercentage(msg.value));

        } else if (token1 == WETH) {
            require(amount > 0, "insufficient funds for the transaction");
            IERC20(token0).approve(
                router,
                IERC20(token0).balanceOf(address(this))
            );
            uint256 swapedAmount1 =swapTokenToEth(router, token0, amount);
            uint256 swapedAmount2 =swapETHtoToken(router, token2, swapedAmount1);
            IERC20(token2).approve(
                router,
                IERC20(token2).balanceOf(address(this))
            );
            uint256 tokenAcquired =swapTokenForToken(
                router,
                token2,
                token0,
                swapedAmount2
            );
            Checktrade(tokenAcquired, CalculatePercentage(amount));
        } else if (token2 == WETH) {
            require(amount > 0, "insufficient funds for the transaction");
            IERC20(token0).approve(
                router,
                IERC20(token0).balanceOf(address(this))
            );
            uint256 swapedAmount1 =swapTokenForToken(router, token0, token1, amount);
            IERC20(token1).approve(
                router,
                IERC20(token1).balanceOf(address(this))
            );
            uint256 swapedAmount2= swapTokenToEth(
                router,
                token1,
                swapedAmount1
            );
            uint256 tokenAcquired =swapETHtoToken(router, token0, swapedAmount2);
            Checktrade(tokenAcquired, CalculatePercentage(amount));
        } else {
            require(amount > 0, "insufficient funds for the transaction");
            IERC20(token0).approve(
                router,
                IERC20(token0).balanceOf(address(this))
            );
            uint256 swapedAmount1 =swapTokenForToken(router, token0, token1, amount);
            IERC20(token1).approve(
                router,
                IERC20(token1).balanceOf(address(this))
            );
            uint256 swapedAmount2 =swapTokenForToken(
                router,
                token1,
                token2,
                swapedAmount1
            );
            IERC20(token2).approve(
                router,
                IERC20(token2).balanceOf(address(this))
            );
            uint256 tokenAcquired =swapTokenForToken(
                router,
                token2,
                token0,
                swapedAmount2
            );
            Checktrade(tokenAcquired, CalculatePercentage(amount));
        }
    }

    function swapTokenForToken(
        address router,
        address tokenA,
        address tokenB,
        uint256 amount
    ) internal returns(uint256) {
        path = new address[](2);
        path[0] = tokenA;
        path[1] = tokenB;

        uint[] memory amounts =IUniswapV2Router01(router).swapExactTokensForTokens(
            amount,
            0,
            path,
            address(this),
            block.timestamp + 300 seconds
        );
        uint256 recivedamount = amounts[amounts.length -1];
        return recivedamount;
    }

    function swapETHtoToken(
        address router,
        address token,
        uint256 amount
    ) internal returns(uint256) {
        path = new address[](2);
        path[0] = IUniswapV2Router01(router).WETH();
        path[1] = token;

        uint[] memory amounts =IUniswapV2Router01(router).swapExactETHForTokens{value: amount}(
            0,
            path,
            address(this),
            block.timestamp + 300 seconds
        );
        uint256 recivedamount = amounts[amounts.length -1];
        return recivedamount;
    }

    function swapTokenToEth(
        address router,
        address token,
        uint256 amount
    ) internal returns(uint256) {
        path = new address[](2);
        path[0] = token;
        path[1] = IUniswapV2Router01(router).WETH();

        uint[] memory amounts =IUniswapV2Router01(router).swapExactTokensForETH(
            amount,
            0,
            path,
            address(this),
            block.timestamp + 300 seconds
        );
        uint256 recivedamount = amounts[amounts.length -1];
        return recivedamount;
    }
    function WithdrawTokens(address _tokenAddress) external onlyOwner {
        IERC20(_tokenAddress).transfer(msg.sender, IERC20(_tokenAddress).balanceOf(address(this)));
    }

    function WithdrawContractFunds() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    receive() external payable {}
}

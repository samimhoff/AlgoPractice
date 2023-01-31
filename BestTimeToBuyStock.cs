public class Solution {
    public int MaxProfit(int[] prices) {
        int left = 0;
        int startRight = prices.Length - 1;
        int bestProfit = 0;
        while (startRight > 0)
        {
            for (int i = 0; i < startRight; i++)
            {
                int profit = prices[startRight] - prices[i];
                if (profit > bestProfit)
                {
                    bestProfit = profit;
                }
            }
            startRight--;
        }

        if (bestProfit <= 0)
        {
            return 0;
        }
        return bestProfit;
    }
}
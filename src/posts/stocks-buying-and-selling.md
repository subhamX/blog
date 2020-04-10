---
title: Stocks Buying and Selling
thumb: ./thumb/stocks.jpg
date: 08-04-2020
---

In this blog post we will develop strategy for `Stocks Buying and Selling`.


## 1. Best Time to Buy and Sell Stock
[`Link`](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) 

## Explanation

### Evaluating from Left to Right

We want to calculate the difference between any general point and previous valley(minima). This explains the necessity to store the minima.

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        // Trivial Case
        if(n==0){
            return 0;
        }
        int ans=0, valley=prices[0];
        for(int i=1; i<n ;i++){
            if(prices[i]<valley){
                valley=prices[i];
            }
            ans = max(ans, prices[i]-valley);
        }
        return ans;
    }
};
```


### Evaluating from Right to Left


We want to calculate the difference between any general point and previous valley(PEAK). This explains the necessity to store the PEAK.

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        // Trivial Case
        if(n==0){
            return 0;
        }
        int ans=0, peak=prices[n-1];
        for(int i=n-2; i>=0; i--){
            if(prices[i]>peak)
                peak = prices[i];
            ans = max(ans, peak-prices[i]);
        }
        return ans;
    }
};
```



## 2. Best Time to Buy and Sell Stock
[`Link`](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) 


## Explanation

This is a typical peak-valley problem. Our aim is to add all the profits that we can make by buying stock at `Day A` and then sell at `Day A+1`. The aggregate sum is the answer.

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
    //  New approach
        int ans=0;
        for(int i=0; i<(int)prices.size()-1; i++){
            if(prices[i+1]>prices[i]){
                ans+=prices[i+1]-prices[i];
            }
        }
        return ans;
    }
};
```

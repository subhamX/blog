---
title: Stocks Buying and Selling
thumb: ./thumb/stocks.jpg
date: 08-04-2020
---

In this blog post we will develop strategy for `Stocks Buying and Selling`.


## 1. Best Time to Buy and Sell Stock
[`Question_Link`](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) 

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
[`Question_Link`](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) 


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


## 3. Best Time to Buy and Sell Stock
[`Question_Link`](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) 

## Explanation
First we traverse the stock prices array from left to right, during this operation A[i] represents the maximum profit made by buying and selling from `Day 0 to Day i`.
Then we traverse the stock prices array from right to left, during this operation A[i] represents the maximum profit made by buying and selling stocks from `Day 0 to Day j` and from `Day j to Day n-1`. Where j belongs to [i, n-1].

Thus A[0] after both these steps will represent maximum profits made from `Day 0 to Day j` and from `Day j to Day n-1`. Where j belongs to [0, n-1].

Here is the complete code.
```cpp
int maxProfit(vector<int>& A) {
    int n = A.size();
    if(n==0){
        return 0;
    }
    vector<int> dp(n, 0);
    int valley=A[0];
    for(int i=1; i<n; i++){
        if(A[i]<valley)
            valley = A[i];
        dp[i] = max(dp[i-1], A[i]-valley);
    }
    int peak = A[n-1];
    for(int i=n-2; i>=0; i--){
        if(A[i]>peak){
            peak = A[i];
        }
        dp[i] = max(dp[i+1], dp[i]+(peak-A[i]));
    }
    return dp[0];
}
```
This is dynamic programming approach.

## 4. Best Time to Buy and Sell Stock
[`Question_Link`](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) 

## Explanation

This is a dynamic programming question.

Let's define the state using state variable.

```default
dp[i][j] = Maximum Profit made by buying selling of stocks till index i and atmost j times

dp[i][j] = max(dp[i-1][j], dp[i-1][k] + (A[i] -A[k])); k belongs to [0, i-1]

dp[0][*] = 0;
dp[*][0] = 0;
```

Now we have following two approaches, to solve the question. The later one is preferred since it will reduce the time complexity by n.
```cpp
int dp[n][k+1];
for(int i=1; i<n; i++){
    for(int j=1; j<=k; j++){
        // For a particular i fill all k
        // In this case we won't be able to use prevMax and thus it will increase the time complexity by n;
    }
}
```

The following code snippet time complexity is `O(k*n)`. And space complexity is `O(k*n)`.

```cpp
int dp[n][k+1]; // Assuming all are nums are zeros
for(int j=1; j<=k; j++){
    for(int i=1; i<n; i++){
        prevMax = max(prevMax, dp[i-1][j]-A[i-1]);
        dp[i][j] = max(dp[i-1][j], prevMax+A[i]);
    }
}
```


On closer observation we can see that (i, j) state requies only (i-1, j) state. Thus we can further reduce the space complexity to `O(2*n)`.

```cpp
int dp[n][2]; // Assuming all are nums are zeros
for(int j=1; j<=k; j++){
    for(int i=1; i<n; i++){
        last = (i+1)%2;
        curr = (i)%2;
        prevMax = max(prevMax, dp[last][j]-A[i-1]);
        dp[curr][j] = max(dp[last][j], prevMax+A[i]);
    }
}
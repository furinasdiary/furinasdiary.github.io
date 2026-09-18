---
title: 洛谷 P3029 Cow Lineup S
published: 2026-09-18
description: '双指针/滑动窗口'
image: 'images\46.jpg'
tags: ["算法","双指针","滑动窗口"]
category: '算法学习'
draft: false 
lang: 'zh-CN'
pinned: false
---


# 洛谷 P3029 Cow Lineup S 题解

链接：[洛谷P3029](https://www.luogu.com.cn/problem/P3029)

## 题目大意
农夫约翰有 $N$ 头奶牛，每头奶牛有一个 $x$ 坐标（位置）和品种编号。
选择一段连续的奶牛拍照，要求照片里面**包含全部品种至少一头**。
照片代价 = 区间内最大x坐标 − 最小x坐标。
求满足条件的最小代价。

$1\le N \le 5\times 10^4$

## 解题思路
双指针（滑动窗口）经典题。
1. 把所有奶牛按照 $x$ 坐标从小到大排序。排序之后，数组上的连续区间就对应位置上连续的一段奶牛，区间左右端点的x之差就是代价。
2. 用滑动窗口 $[l,r]$，维护窗口内出现的品种数量。
3. 当窗口内品种数量等于总品种数时，尝试更新答案，并且左端点右移缩小窗口，寻找更优解。

核心：排序 + 双指针，时间复杂度 $O(N\log N)$

## AC代码
```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define all(x) x.begin(),x.end()
typedef pair<int,int> PII;
const int N=5e4+10;
const int INF=1e18;

// 奶牛结构体：x坐标，品种id
struct node
{
    int x;
    int id;
};
// 比较函数：按x坐标从小到大排序
bool cmp(node a,node b){
    return a.x<b.x;
}

void solve(){
    int n;
    cin>>n;
    vector<node> a(n+1);
    set<int> st; // 集合统计一共有多少种不同品种

    for(int i=1;i<=n;i++){
        cin>>a[i].x>>a[i].id;
        st.insert(a[i].id); // 将品种插入集合自动去重
    }
    int len=st.size(); // len = 总品种数量
    
    sort(a.begin()+1,a.end(),cmp); // 按x坐标排序
    
    map<int,int> mp; // mp[id]：当前窗口内该品种出现次数
    int i=1,j=0;     // 双指针 i左边界，j右边界
    int cnt=0;       // cnt：当前窗口内不同品种的数量
    int ans=INF;     // 答案初始化为无穷大

    while(i<=n){
        // 不断向右扩展右边界，直到窗口集齐所有品种
        while(cnt<len && j<n){
            j++;
            mp[a[j].id]++;
            // 如果这个品种是第一次进入窗口，品种计数+1
            if(mp[a[j].id]==1) cnt++;
        }
        // 如果窗口集齐全部品种，更新最小代价
        if(cnt==len){
            ans=min(ans,a[j].x-a[i].x);
        }
        // 左边界右移，移除窗口最左边元素
        mp[a[i].id]--;
        // 如果该品种在窗口内数量变为0，品种计数-1
        if(mp[a[i].id]==0) cnt--;
        i++;
    }
    cout<<ans<<endl;
}
signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int T=1;
    while(T--) solve();
    return 0;
}

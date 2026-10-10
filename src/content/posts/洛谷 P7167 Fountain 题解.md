---
title: 洛谷 P7167 Fountain 题解
published: 2026-10-03
description: '洛谷 P7167 Fountain 题解'
image: 'images\41.jpg'
tags: ["算法","单调栈","倍增","st表"]
category: '算法学习'
draft: false 
lang: 'zh-CN'
pinned: false
password: "1234567."
---

# 洛谷P7167 Fountain 题解

链接：[洛谷P7187](https://www.luogu.com.cn/problem/P7167)

## 题意

有 $N$ 个圆盘从上到下编号为 $1 \sim N$，第 $i$ 个圆盘的直径为 $D_i$，容量为 $C_i$。  
当一个圆盘中的水超过其容量时，多余的水会向下溢出，直到流入第一个直径严格大于当前圆盘的圆盘；如果下方不存在这样的圆盘，则水流入水池。

现在有 $Q$ 组独立询问，每组询问向第 $R_i$ 个圆盘倒入 $V_i$ 单位的水，求水最终停留在哪个圆盘。若流入水池则输出 $0$。

---

## 思路

### 1. 预处理每个圆盘的下一个落点

对于每个圆盘 $i$，找到它下方第一个直径大于它的圆盘位置 $r_i$：

$$
r_i = \min\{j \mid j > i,\ D_j > D_i\}
$$

如果不存在，则水会流入水池，令 $r_i = N+1$，其中 $N+1$ 表示水池。

使用**单调栈**从下往上扫描，可以在 $O(N)$ 时间内求出所有 $r_i$。

### 2. 倍增快速跳转

水从某个圆盘开始，会沿着 $r_i$ 形成的链不断向下流动。链的长度可能达到 $O(N)$，而询问数有 $Q$，直接模拟会超时。  
因此使用**倍增**预处理跳转和容量前缀和。

定义：

$$
nex[i][0] = r_i
$$

$$
sum[i][0] = C_i
$$

其中 $sum[i][0]$ 表示从圆盘 $i$ 开始，经过 $0$ 次跳转（即只考虑当前圆盘）的容量。  
更一般地，$sum[i][j]$ 表示从 $i$ 开始连续 $2^j$ 个圆盘的总容量。

转移：

$$
nex[i][j] = nex[nex[i][j-1]][j-1]
$$

$$
sum[i][j] = sum[i][j-1] + sum[nex[i][j-1]][j-1]
$$

边界：对于水池 $N+1$，有 $nex[N+1][0] = N+1$，$sum[N+1][0] = 0$，且对所有 $j$ 都有 $nex[N+1][j] = N+1$，$sum[N+1][j] = 0$。

### 3. 处理询问

对于一次询问，初始位置为 $x = R_i$，水量为 $c = V_i$。  
从高位到低位枚举 $j$，如果从当前 $x$ 开始的连续 $2^j$ 个圆盘总容量小于当前水量：

$$
sum[x][j] < c
$$

说明水可以完全填满这些圆盘并继续向下流。于是：

$$
c \leftarrow c - sum[x][j]
$$

$$
x \leftarrow nex[x][j]
$$

枚举结束后，$x$ 就是水最终停留的圆盘（如果水量不足以填满它，就会停在这里）。  
若 $x = N+1$，说明水最终流入水池，输出 $0$；否则输出 $x$。

---

## 复杂度

- 单调栈预处理：$O(N)$
- 倍增预处理：$O(N \log N)$
- 每次询问：$O(\log N)$
- 总时间复杂度：$O((N+Q) \log N)$
- 空间复杂度：$O(N \log N)$

---

## 代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
#define all(x) x.begin(),x.end()
#define YES cout<<"YES\n"
#define NO cout<<"NO\n"
#define cfs cout<<fixed<<setprecision
typedef pair<int,int> PII;
const int N=1e5+10;
const int INF=1e18;

int d[N];
int r[N];
int v[N];
int nex[N][20];
int sum[N][20];

void solve(){
    int n,q;
    cin>>n>>q;
    for(int i=1;i<=n;i++){
        cin>>d[i]>>v[i];
    }
    // 初始化水池 N+1
    v[n+1]=0;
    r[n+1]=n+1;
    
    // 单调栈求 r[i]
    stack<int> st;
    for(int i=n;i>=1;i--){
        while(!st.empty() && d[i] >= d[st.top()]){
            st.pop();
        }
        r[i] = st.empty() ? n+1 : st.top();
        st.push(i);
    }
    
    // 倍增初始化，包含水池 N+1
    for(int i=1;i<=n+1;i++){
        nex[i][0]=r[i];
        sum[i][0]=v[i];
    }
    
    // 预处理倍增数组
    for(int j=1;j<20;j++){
        for(int i=1;i<=n+1;i++){
            nex[i][j]=nex[nex[i][j-1]][j-1];
            sum[i][j]=sum[i][j-1]+sum[nex[i][j-1]][j-1];
        }
    }
    
    while(q--){
        int x,c;
        cin>>x>>c;
        for(int j=19;j>=0;j--){
            if(sum[x][j] < c){
                c -= sum[x][j];
                x = nex[x][j];
            }
        }
        if(x == n+1) cout << 0 << '\n';
        else cout << x << '\n';
    }
}

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int T=1;
    //cin>>T;
    while(T--) solve();
    return 0;
}
```
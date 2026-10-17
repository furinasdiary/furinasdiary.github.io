---
title: ✨SICNU ACM 第一次考核题解✨
published: 2026-10-18
description: 'SICNU ACM 第一次考核题解'
image: 'images\47.jpg'
tags: ["考核"]
category: '考核题解'
draft: false 
lang: 'zh-CN'
pinned: true
password: "sicnuacmyyds"
---



#✨SICNU ACM 第一次考核题解✨

**难度为验题人评估，仅供参考**

**点击题目名称即可跳转到对应题目**


> 从 `Hello Acmer!` 到 `Accepted`，你只差一次提交。


✅ $\color{#22c55e}{签到：}$【新手村任务】

[签到题](##签到题)

[金字招牌](##金字招牌)

[哈蒙德博士可是个聪明的仓鼠 ](##哈蒙德博士可是个聪明的仓鼠)

🔵 $\color{#3498db}{Esay：}$【脱离新手村】

[乘槎驭风仙窟游](##乘槎驭风仙窟游)

[Art of Symmetry](##Art-of-Symmetry)

[普通GCD](##普通GCD)

🟡$\color{#eab308}{Mid：}$【开始上压力了】

[上压力](##上压力)

[磊哥的n进制回文数](##磊哥的n进制回文数)

[Beneath the Snow, We Connect.](##Beneath-the-Snow,-We-Connect.)

🔴 $\color{#ef4444}{Hard：}$【思维大考验】

[第一章——初闻长口回家历险记](##第一章——初闻长口回家历险记)

[提瓦特的秘境探索](##提瓦特的秘境探索)

[区间GCD](##区间GCD)

⚫$ \color{#8e44ad}{ Impossible ：}$【BOSS关卡】

[玉米花的奶蛙](##玉米花的奶蛙)

[ChongLeaf的六级练习](##ChongLeaf的六级练习)



## 签到题

难度：签到

知识点：输出

### 思路

输出 ` Hello Acmer!` 

### AC代码

```cpp
#include<stdio.h>
int main(){
    printf("Hello Acmer!");
    return 0;
}
```

## 金字招牌

难度：签到

知识点：输出

### 思路

输出以下内容

```php
------------------------------------------------------
|      *        ********        *           *        |
|     * *      *               * *         * *       |
|    *   *    *               *   *       *   *      |
|   *******   *              *     *     *     *     |
|  *       *  *             *       *   *       *    |
| *         *  *           *         * *         *   |
|*           *  ********  *           *           *  |
|                  SICNU ACM TEAM                    |
------------------------------------------------------
```

### AC代码

```cpp
#include<stdio.h>
int main(){
    //Ctrl+C和Ctrl+V即可
    printf("------------------------------------------------------\n");
    printf("|      *        ********        *           *        |\n");
    printf("|     * *      *               * *         * *       |\n");
    printf("|    *   *    *               *   *       *   *      |\n");
    printf("|   *******   *              *     *     *     *     |\n");
    printf("|  *       *  *             *       *   *       *    |\n");
    printf("| *         *  *           *         * *         *   |\n");
    printf("|*           *  ********  *           *           *  |\n");
    printf("|                  SICNU ACM TEAM                    |\n");
    printf("------------------------------------------------------\n");
    return 0;
}
```

## 哈蒙德博士可是个聪明的仓鼠

难度：签到

知识点：循环，判断

### 思路

计算所有伤害的总和 $sum$ ，若总伤害大于等于阈值 $p$，输出`Yes`，否则输出`No`  (**注意大小写**)

### AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin>>n;
    int sum=0;
    for(int i=1;i<=n;i++){
        int x;
        cin>>x;
        sum+=x;
    }
    int p;
    cin>>p;
    cout<<sum<<'\n';
    //大于输出Yes，否则输出No
    if(sum>=p) cout<<"Yes";
    else cout<<"No";
    return 0;
}
```

## 乘槎驭风仙窟游

难度：easy

知识点：思维

### 思路


因为 $2^x$ 增长非常快，所以把可用的天数尽量集中到某一次采集上，其余采集间隔保持 $1$，这样总和最大。

因此最大收集量为：

$$
2^{n-k+1} + 2 \times (k-1)
$$

### AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

void solve(){
    int n,k;
    cin>>n>>k;
    //前面让枝芽长到最多，后面剩于 k-1天必须立刻采集
    int ans=1;
    for(int i=1;i<=n-k+1;i++){
        ans*=2;
    }
    cout<<ans+2*(k-1)<<'\n';
}   

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int T=1;
    cin>>T;
    while(T--) solve();
    return 0;
}
```

## Art of Symmetry

难度：easy

知识点：思维

### 思路
注意到：

- 当n为偶数时，只有一种方案

- 当n为奇数时，只有两种方案

### AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

void solve(){
    int n;
    cin>>n;
    if(n%2==0) cout<<1<<'\n';
    else cout<<2<<'\n';
    
}

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int T=1;
    cin>>T;
    while(T--) solve();
    return 0;
}
```

## 普通GCD

难度：easy

知识点：GCD

### 思路

求多个数的最大公因数，可以两两合并：

$$
\gcd(a_1, a_2, \dots, a_n) = \gcd(\gcd(a_1, a_2), a_3, \dots, a_n)
$$

也就是说，先取第一个数作为当前答案，然后依次和后面的数求最大公因数，最后得到的就是所有数的最大公因数。

### AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
int a[1000007];

int gcd(int a,int b){
    return b==0?a:gcd(b,a%b);
}

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>a[i];
    }
    int g=a[1];
    for(int i=2;i<=n;i++){
        g=gcd(g,a[i]);
    }
    cout<<g;
    
}

```

## 上压力

难度：mid

知识点：前缀和

***~~要开始上压力了哦~~***

### 思路

前缀和板子题，预处理前缀和，查找时实现$O(1)$查询

### AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=1e5+7;

int a[N];
int sum[N];

void solve(){
    int n;
    cin>>n;
    //预处理前缀和
    for(int i=1;i<=n;i++){
        cin>>a[i];
        sum[i]=sum[i-1]+a[i];
    }
    int q;
    cin>>q;
    //进行q次查询
    while(q--){
        int l,r;
        cin>>l>>r;
        cout<<sum[r]-sum[l-1]<<'\n';
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

## 磊哥的n进制回文数

难度：mid

知识点：进制转换

### 思路

把 $x$ 转换成 $n$ 进制，判断这个 $n$ 进制表示是不是回文串，是则输出 `YES`，否则输出 `NO`。

### AC代码

---

#### 没有使用字符数组

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

int ans[1000];   // 存每一位的数字，0~15

void solve(){
    int x, n;
    cin >> x >> n;

    int m = 0;
    while (x) {
        ans[++m] = x % n;   // 存的是整数，不是字符
        x /= n;
    }
    // ans[1] 是最低位，ans[m] 是最高位

    // 输出 n 进制表示：从高位到低位
    for (int i = m; i >= 1; i--) {
        int d = ans[i];
        if (d < 10) cout << d;
        else cout << char('A' + d - 10);
    }
    cout << '\n';

    // 判断回文：直接比较整数
    for (int i = 1; i <= m; i++) {
        if (ans[i] != ans[m - i + 1]) {
            cout << "NO";
            return;
        }
    }
    cout << "YES";
}

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int T = 1;
    // cin >> T;
    while (T--) solve();
    return 0;
}
```

#### 使用了字符数组

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

char ans[1000];                //数字 0~15 对应的字符，用于 2~16 进制转换
char a[]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};

void solve(){
    int x,n;
    cin>>x>>n;

    int m=0;                   // m 记录转换后的位数
    while(x){
        ans[++m]=a[x%n];       // 取出 x 在 n 进制下的最低位，转成字符存入 ans[1..m]
        x/=n;                  // 去掉最低位，继续处理下一位
    }
    // 此时 ans[1] 是最低位，ans[m] 是最高位

    for(int i=m;i>=1;i--){     // 逆序输出，得到正常的 n 进制表示（从高位到低位）
        cout<<ans[i];
    }
    cout<<'\n';

    // 判断该 n 进制表示是否为回文
    // 比较第 i 位和倒数第 i 位，即 ans[i] 与 ans[m-i+1]
    for(int i=1;i<=m;i++){
        if(ans[i]!=ans[m-i+1]){
            cout<<"NO";        // 只要有一对不对称，就不是回文
            return ;
        }
    }
    cout<<"YES";               // 全部对称，是回文
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

## Beneath the Snow, We Connect.

难度：mid

知识点：差分，前缀和

### 思路

1. 聚会 $[l,r]$ 会覆盖边 $l \sim {r-1}$。
2. 差分：对于区间 $[l, r-1]$ 的区间加1，差分操作为 `d[l]++, d[r]--`。
3. 求前缀和，得到每条边被覆盖的次数。
4. 只要任意一条边覆盖次数等于0，代表这条边永远无法连通，答案为`NO`；全部大于0则输出`YES`。



###AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=1e6+10;
int d[N];

void solve(){
    int n,m;
    cin>>n>>m;
    // 读入 m 场聚会，用差分维护每条边被覆盖的次数
    // 区间 [l, r] 覆盖的“边”是 l, l+1, ..., r-1
    // 因此差分操作是 d[l]++, d[r]--
    while(m--){
        int l,r;
        cin>>l>>r;
        d[l]++;    // 从边 l 开始，覆盖次数 +1
        d[r]--;    // 到边 r 结束，覆盖次数 -1
    }
    int sum=0;
    // 前缀和还原每条边的实际覆盖次数，检查是否有断裂
    // 需要检查的边是 1 到 n-1，共 n-1 条
    for(int i=1;i<=n-1;i++){
        sum+=d[i];
        if(sum==0){
            // 第 i 条边（连接 i 和 i+1）从未被任何聚会覆盖
            // 说明 i 和 i+1 两户人家无法建立联系，全镇不连通
            cout<<"NO";
            return;
        }
    }
    cout<<"YES";
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

## 第一章——初闻长口回家历险记

难度：hard

知识点：前缀和

### 思路

设 $pre[i]$ 为前 $i$ 项的前缀和，区间 $[j+1,i]$ 的子段和等于 $pre[i]-pre[j]$。

对于每一个位置 $i$，想要让 $pre[i]-pre[j]$ 尽可能大，只需要找到在 $i$ 之前最小的前缀和 $pre[j]$。

由于空间限制为**8MB**，所以不能使用数组记录，我们可以：

- **维护变量 pre 实时记录当前前缀和；**

- **维护变量 minpre，保存遍历到当前位置前出现过的最小前缀和；**

- **每读入一个数字，更新前缀和，尝试更新答案；**

###AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n;
    cin>>n;
    int pre=0;        // 当前前缀和
    int minpre=0;     // 之前出现过的最小前缀和
    int ans=-1e18;    // 最大连续子段和
    for(int i=1;i<=n;i++){
        int x;
        cin>>x;
        pre+=x;
        //更新答案
        ans=max(ans,pre-minpre);
        //更新之前出现过的最小前缀和
        minpre=min(minpre,pre);
    }
    cout<<ans;
}
```

## 提瓦特的秘境探索

难度：hard

知识点：思维

### 思路

**注意到：**

1. 当所有数都取到**绝对值**的时候，总和 $sum$ 最大

2. 如果数组中正数个数是**奇数**：直接全部取绝对值，总和 $sum$就是答案；

3. 如果数组中正数个数是**偶数**：一定会剩下一个负数，为了让总损失最小，选择**绝对值最小的数字**翻转，答案为 $sum-2\times min$

**证明省略**

**若难以理解思路，可以找出题人进一步答疑**

###AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin>>n;
    int sum=0,cnt=0;;
    int mn=1e18;
    for(int i=1;i<=n;i++){
        int x;
        cin>>x;
        if(x>0) cnt++;
        sum+=abs(x);
        mn=min(mn,abs(x));
    }
    if(cnt%2) cout<<sum<<'\n';  // 正数个数为奇数，全部取绝对值即可
    else cout<<sum-2*mn<<'\n';  // 正数个数为偶数，必须翻转某个数，损失最小的是绝对值最小的那个数
    return 0;
}

```

## 区间GCD

难度：hard

知识点：GCD，预处理

### 思路一

由于询问次数太大，如果每次询问都去遍历求GCD，会导致超时

利用区间GCD的递推性质预处理：
$$
\gcd([i,j]) = \gcd\big(\gcd([i,j-1]),\ a[j]\big)
$$

预处理二维数组 `ans[i][j]`，数组 `ans[i][j]` 存储区间 $[i,j]$ 的GCD值

固定左端点 $i$，不断向右扩展右端点 $j$，递推算出所有区间的GCD

预处理结束后，每次查询直接 $O(1)$ 查表输出答案。

###AC代码

```cpp
#include <bits/stdc++.h>
#define int long long
using namespace std;

int gcd(int a,int b){
    return b==0?a:gcd(b,a%b);
}

int a[1005];
int ans[1005][1005];

void solve()
{	
	int n;
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
    //预处理区间GCD
	for(int i=1;i<=n;i++){
		for(int j=i;j<=n;j++){
			ans[i][j]=gcd(ans[i][j-1],a[j]);
		}
	}
	int q;
	cin>>q;
    //每次O(1)查询
	while(q--){
		int l,r;
		cin>>l>>r;
		cout<<ans[l][r]<<'\n';
	}
}
signed main()
{	
	ios::sync_with_stdio(0);
	cin.tie(0);
	solve(); 
	return 0;
}
```

### 思路二

使用倍增表预处理区间GCD。

GCD满足性质：一段区间的gcd，可以由两段覆盖该区间的子区间gcd再求gcd得到。

1. 定义 `st[i][j]`：从第 $i$ 个位置开始，长度为 $2^j$ 的区间的GCD。
2. 初始化：`st[i][0] = a[i]`，长度为 $2^0=1$ 的区间就是元素本身。
3. 倍增递推：$st[i][j]=\gcd(st[i][j-1],\ st[i+(1<<(j-1))][j-1])$，把长为 $2^j$ 的区间拆成前后两段各 $2^{j-1}$。
4. 查询区间 $[l,r]$：算出区间长度的对数 $len=\log_2(r-l+1)$，取两段长度 $2^{len}$、能完整覆盖 $[l,r]$ 的区间，二者GCD即为答案。

### AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long

int gcd(int a,int b){
    return b==0?a:gcd(b,a%b);
}

int a[1007];
int st[1007][20];   // st[i][j]：从i开始，长度2^j区间的GCD

signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        st[i][0]=a[i];
    }
    // j代表2的幂次，倍增预处理
    for(int j=1;j<20;j++){
        for(int i=1;i+(1<<j)-1<=n;i++){
            // 拆成两段：前半段2^(j-1)，后半段2^(j-1)
            st[i][j]=gcd(st[i][j-1],st[i+(1<<(j-1))][j-1]);
        }
    }
    int m;
    cin>>m;

    while(m--){
        int l,r;
        cin>>l>>r;
        int len=log2(r-l+1);
        // 两段重叠区间覆盖[l,r]，求gcd
        cout<<gcd(st[l][len],st[r-(1<<len)+1][len])<<'\n';
    }
}

```



## 玉米花的奶蛙

难度：impossible

知识点：差分，前缀和，思维

🐸【奶蛙登场】

### 思路

1. 将B记作0，F记作1，更好进行操作。

2. 从左往右遍历，遇到B就必须在这里开启一次翻转。

3. 选定翻转区间长度 $k$，每次翻转是区间加1，使用差分数组维护翻转次数，避免暴力修改区间。

4. $sum$记录当前位置已经被前面操作施加的翻转总次数，$(sum+a[j])%2$ 代表当前牛真实状态。

5. 如果当前是B：

   - 若从 $j$ 开始的 $k $ 长度区间超出边界，说明该 $ k $ 不可行；

   - 否则差分标记区间 $[j,j+k-1]$ 翻转，翻转计数+1。

6. 枚举所有可能的 $k（1\le k\le n）$，更新记录翻转次数最少的 $k$。

###AC代码

```cpp
#include<bits/stdc++.h>
using namespace std;
#define int long long
const int N=5e3+10;

int a[N];
int d[N];

void solve(){
    int n;
    cin>>n;
    for(int i=1; i <= n; i++){
        char x;
        cin>>x;
        a[i]=(x=='B'?0:1);
    }
    int k_ans=1e8;
    int cnt_ans=1e8;
    
    // 枚举 K
    for(int k=1;k<=n;k++){
        int cnt=0;
        int sum=0;
        bool flag=true;
        // 清空差分数组
        for(int i=1;i<=n+1;i++){
            d[i]=0;
        }
        for(int j=1;j<=n;j++){
            // 加上在 j 位置开始生效的翻转
            sum+=d[j];
            // 当前牛还是 B
            if((sum+a[j])%2==0){
                // 剩下的牛不够 K 头
                if(j+k-1>n){
                    flag=false;
                    break;
                }
                // 从 j 开始翻 K 头
                d[j]++;
                d[j+k]--;
                sum++;
                cnt++;
            }
        }
        if(flag==0) continue;
        //更新k的最小值
        if(cnt<cnt_ans){
            cnt_ans=cnt;
            k_ans=k;
        }
    }
    cout<<k_ans<<' '<<cnt_ans<<'\n';
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

## ChongLeaf的六级练习

难度：impossible

知识点：模拟，字符串

~~由于验题人不会，所以代码是照搬出题人的代码~~

**感兴趣的可以可以找出题人答疑**

### AC代码

```cpp
#include<iostream>
using namespace std;
char a[4000005],ans[4000005];
int n,zhan[1000005],tot,num,isq,l;
char url[10005][10005];
bool pd(int i,int len,char* c){//判断是否是这个字符串
	for(int j=i;j<i+len;++j){
		if(a[j]!=c[j-i])return 0;
	}
	return 1;
}
void qwq(int x){//不合法判断
	if(zhan[tot]!=x){
		cout<<"Match Error";exit(0);
	}
	else --tot;
}
void add(char c){//往答案里加入字符
	ans[++l]=c;
}
int main(){
	while((a[++n]=getchar())!=EOF){
		if(a[n]=='\r')--n; //别让\r 读入进来！
	}
	a[0]='\n';
	--n;
	for(int i=1;i<=n;){
    //以下是一些简单的判断
		if(isq==0&&pd(i,4,"[h1]")){
			zhan[++tot]=1;
			add('#'),add(' ');
			i+=4;
		}
		else if(isq==0&&pd(i,5,"[/h1]")){
			qwq(1);
		    add(' '),add('#');
		    i+=5;
		}
		else if(isq==0&&pd(i,4,"[h2]")){
			zhan[++tot]=2;
			add('#'),add('#'),add(' ');
			i+=4;
		}
		else if(isq==0&&pd(i,5,"[/h2]")){
			qwq(2);
			add(' '),add('#'),add('#');
			i+=5;
		}
		else if(isq==0&&pd(i,3,"[i]")){
			zhan[++tot]=3;
			add('*');
			i+=3;
		}
		else if(isq==0&&pd(i,4,"[/i]")){
			qwq(3);
			add('*');
			i+=4;
		}
		else if(isq==0&&pd(i,3,"[b]")){
			zhan[++tot]=4;
			add('_');add('_');
			i+=3;
		}
		else if(isq==0&&pd(i,4,"[/b]")){
			qwq(4);
			add('_');add('_');
			i+=4;
		}
		else if(isq==0&&pd(i,5,"[url=")){
			zhan[++tot]=5;
			++num;
			int j=0;
			for(j=i+5;j<=n&&a[j]!=']';++j){
				url[num][j-(i+5)]=a[j];
			}
			url[num][j]='\0';
			add('[');
			i=j+1;
		}
		else if(isq==0&&pd(i,6,"[/url]")){
			qwq(5);
			add(']');
			add('(');
			for(int j=0;url[num][j]!='\0';++j){
				add(url[num][j]);
			}
			--num;
			add(')');
			i+=6;
		}
		else if(isq==0&&pd(i,5,"[img=")){
			zhan[++tot]=6;
			++num;
			add('!');
			int j=0;
			for(j=i+5;j<=n&&a[j]!=']';++j){
				url[num][j-(i+5)]=a[j];
			}
			url[num][j]='\0';
			add('[');
			i=j+1;
		}
		else if(isq==0&&pd(i,6,"[/img]")){
			qwq(6);
			add(']');
			add('(');
			for(int j=0;url[num][j]!='\0';++j){
				add(url[num][j]);
			}
			--num;
			add(')');
			i+=6;
		}
        //重点来啦
		else if(isq==0&&pd(i,7,"[quote]")){
			zhan[++tot]=7;
			isq=1;
			int j=i+7;
			if(a[i-1]!='\n')add('\n');//如果上一个不是换行
			add('>');add(' '); 
			while(a[j]=='\n')++j;//记得往后跳
			i=j;
		}
		else if(pd(i,8,"[/quote]")){
			qwq(7);
			isq=0;
			while(ans[l]=='>'||ans[l]=='\n'||ans[l]==' ')--l;//消除后面换行
			if(a[i+8]!='\n')add('\n');//如果下一个不是换行
			i+=8;
		}
		else{
			add(a[i]);
			if(a[i]=='\n'&&isq)add('>'),add(' ');
			++i;
		}
	}
	if(tot)cout<<"Unclosed Mark";//记得判一下第二种不合法情况
	else for(int i=1;i<=l;++i)putchar(ans[i]);
	return 0;
}
```

# 结尾

**恭喜你读到这里。现在你已经比打开题目后立刻关闭网页的自己强多了。
下一步：自己动手敲一遍，别只复制题解。**


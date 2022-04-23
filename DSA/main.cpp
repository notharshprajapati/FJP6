#include <algorithm>
#include <bits/stdc++.h>
#include <cmath>
#include <cstdio>
#include <iostream>
#include <vector>

using namespace std;

void FunctionTwo(long long n, bool PrimeNum[],
                 bool PNumsquare[], long long a[])
{
    for (long long i = 2; i <= n; i++)
        PrimeNum[i] = true;
    for (long long i = 0; i <= (n * n + 1); i++)
        PNumsquare[i] = false;
    PrimeNum[1] = false;

    for (long long p = 2; p * p <= n; p++)
    {
        if (PrimeNum[p] == true)
        {
            for (long long i = p * p; i <= n; i += p)
                PrimeNum[i] = false;
        }
    }

    long long j = 0;
    for (long long p = 2; p <= n; p++)
    {
        if (PrimeNum[p])
        {
            a[j] = p;
            PNumsquare[p * p] = true;
            j++;
        }
    }
}

long long div(long long n)
{
    if (n == 1)
        return 1;

    bool PrimeNum[n + 1], PNumsquare[n * n + 1];

    long long a[n];
    FunctionTwo(n, PrimeNum, PNumsquare, a);
    long long Soln = 1;
    for (long long i = 0;; i++)
    {
        if (a[i] * a[i] * a[i] > n)
            break;
        long long cnt = 1;
        while (n % a[i] == 0)
        {
            n = n / a[i];
            cnt = cnt + 1;
        }
        Soln = Soln * cnt;
    }
    if (PrimeNum[n])
        Soln = Soln * 2;

    else if (PNumsquare[n])
        Soln = Soln * 3;

    else if (n != 1)
        Soln = Soln * 4;

    return Soln;
}

long long fun(vector<long long> a, int n)
{
    long long OddNum = 0, C_OddNum = 0, Result = 0;
    for (long long i = 0; i < n; i++)
    {
        if (a[i] & 1)
            OddNum = !OddNum;
        if (OddNum)
            C_OddNum++;
    }
    for (long long i = 0; i < n; i++)
    {
        Result += C_OddNum;
        if (a[i] & 1)
            C_OddNum = (n - i - C_OddNum);
    }
    return Result;
}

int main()
{
    long long n;
    cin >> n;
    vector<long long> v(n);
    for (long long i = 0; i < n; i++)
    {
        long long x;
        cin >> x;
        v[i] = div(x);
    }
    cout << fun(v, n) << endl;

    return 0;
}
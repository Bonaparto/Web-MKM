#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;
  int a[n];
  for (int i = 0; i < n; ++i) {
    cin >> a[i];
  }
  int x; cin >> x;
  int dif = 100000;
  int ans;
  for (int i = 0; i < n; ++i) {
    if (abs(a[i] - x) < dif) {
      dif = abs(a[i] - x);
      ans = a[i];
    }
  }
  cout << ans;
}
public class Solution {
  public int fibonaci(int n)
  {
    if (n == 1)
    {
      return 1;
    }
    if (n == 2)
    {
      return 2;
    }
    return fibonaci(n - 1) + fibonaci(n - 2);
  }
}`
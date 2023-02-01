public class Solution {
    public void Rotate(int[] nums, int k) {
        var Nums = new List<int>(nums);
        // List<int> Nums = nums.toList();
        for(int i = 0; i < k; k++)
        {
            int pop = Nums.Last();
            Nums.Insert(0, pop);
        }
        
    }
}

public class Solution {
    public int StrStr(string haystack, string needle) {
        List<int> solutions = new List<int>();
        for(int i = 0; i < haystack.Length; i++)
        {
            if(haystack[i] == needle[0])
            {
                if(i > haystack.Length - needle.Length)
                {
                    Console.WriteLine("ran out of length");
                    return -1;
                }
                //FIGURE OUT WHATS GOING ON HERE.
                for(int j = i; j < needle.Length + i; j++) {
                    Console.WriteLine($"j then haystack then needle: {j}, {haystack[j]}, {needle[j-i]}");
                    if(haystack[j] != needle[j-i])
                    {
                        break;
                    }
                    if((j-i) == needle.Length - 1)
                    {
                        return i;
                    }
                }
            }
        }
        return -1;
    }
}
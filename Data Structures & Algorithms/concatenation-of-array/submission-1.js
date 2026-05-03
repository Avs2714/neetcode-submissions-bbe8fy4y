class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans=[];
        for(let i=0;i<2;i++)
        {
            ans=ans.concat(nums);
        }
        return ans;
    }
}

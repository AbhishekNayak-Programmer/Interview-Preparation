class Solution {
    // Function to find pairs in the linked list with the given sum
    
    getEndNode(head){
        let temp = head;
        
        while(temp.next !== null){
            temp = temp.next;
        }
        
        return temp;
    }
    
    findPairsWithGivenSum(head, target) {
        let left = head, right = this.getEndNode(head), ans = [];
        
        while(left.data < right.data){
            let sum  = left.data + right.data;
            if(sum < target){
                left = left.next;
            }else if(sum > target){
                right = right.prev;
            }else {
                ans.push([left.data, right.data]);
                left = left.next;
                right = right.prev;
            }
        }
        
        return ans;
    }
}
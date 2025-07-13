class Solution {
    
    convertToLinkedList(arr){
        let dummyNode = new Node(arr[0]), temp = dummyNode;
        
        for(let i=1;i<arr.length;i++){
            let newNode = new Node(arr[i]);
            temp.bottom = newNode;
            temp = temp.bottom;
        }
        
        return dummyNode;
    }
    
    flatten(root) {
        let temp = root, arr = [];
        
        while(temp !== null){
            let temp2 = temp;
            
            while(temp2 !== null){
                arr.push(temp2.data);
                temp2 = temp2.bottom;
            }
            
            temp = temp.next;
        }
        
        arr.sort((a,b) => a - b);
        
        return this.convertToLinkedList(arr);
    }
}
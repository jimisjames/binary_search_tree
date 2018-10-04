class Node {
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
}

class BSearchTree {
    constructor(val){
        this.root = new Node(val)
    }
    insert(val){
        let node = new Node(val)
        let i = this.root
        if(i == null){
            i = node
            return this
        }
        while(true){
            if(node.value < i.value){
                if(i.left == null){
                    i.left = node
                    break
                } else{
                    i = i.left
                }
            } else if(node.value >= i.value){
                if(i.right == null){
                    i.right = node
                    break
                } else{
                    i = i.right
                }
            }
        }
        return this
    }
}

var list = new BSearchTree(5)

list.insert(3).insert(1).insert(4).insert(5).insert(6).insert(-1).insert(100)

console.log(list.root)


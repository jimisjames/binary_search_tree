class Node {
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
    print(){
        let vals = [this.value]
        if(this.left != null){
            vals = vals.concat(this.left.print())
        }
        if(this.right != null){
            vals = vals.concat(this.right.print())
        }
        return vals
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
    print_pre(){
        let ans = ""
        let vals = []
        if(this.root == null){
            return null
        } else {
            vals = vals.concat(this.root.print())
        }
        ans += vals[0]
        for(let i = 1; i < vals.length; i++){
            ans += ", " + vals[i]
        }
        console.log(ans)
        return this
    }
    print_post(){
        let ans = ""
        let vals = []
        if(this.root == null){
            return null
        } else {
            vals = vals.concat(this.root.print())
        }
        ans += vals[vals.length - 1]
        for(let i = vals.length - 2; i >= 0; i--){
            ans += ", " + vals[i]
        }
        console.log(ans)
        return this
    }
    print_in_order(){
        let ans = ""
        let vals = []
        if(this.root == null){
            return null
        } else {
            vals = vals.concat(this.root.print())
        }
        vals.sort(function(a, b){return a-b})
        ans += vals[0]
        for(let i = 1; i < vals.length; i++){
            ans += ", " + vals[i]
        }
        console.log(ans)
        return this
    }
}

var list = new BSearchTree(5)

list.insert(3).insert(1).insert(4).insert(5).insert(6).insert(-1).insert(100)

console.log(list.root)

list.print_pre()

list.print_post()

list.print_in_order()
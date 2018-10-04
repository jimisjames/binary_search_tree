class Node {
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
    collect(){
        let vals = [this.value]
        if(this.left != null){
            vals = vals.concat(this.left.collect())
        }
        if(this.right != null){
            vals = vals.concat(this.right.collect())
        }
        return vals
    }
    count(){
        let x = 1
        let y = 1
        if(this.left == null && this.right == null){
            return 1
        }
        if(this.left != null){
            x += this.left.count()
        }
        if(this.right != null){
            y += this.right.count()
        }
        if(x > y){
            return x
        } else {
            return y
        }
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
            vals = vals.concat(this.root.collect())
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
            vals = vals.concat(this.root.collect())
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
            vals = vals.concat(this.root.collect())
        }
        vals.sort(function(a, b){return a-b})
        ans += vals[0]
        for(let i = 1; i < vals.length; i++){
            ans += ", " + vals[i]
        }
        console.log(ans)
        return this
    }
    depth(){
        let depth = this.root.count()
        console.log("The depth of this list is: " + depth)
        return this
    }
    remove_once(val){
        let i = this.root
        if(i == null){
            return false
        } else if(i.value == val){
            if(i.left == null && i.right == null){
                this.root = null
            } else {
                this.root
            }
        } else if(i.left != null){
            
        }
    }
    remove_all(val){

    }
}

var list = new BSearchTree(5)

list.insert(3).insert(1).insert(4).insert(5).insert(6).insert(-1).insert(100).insert(-2).insert(3).insert(5).insert(3)

console.log(list.root)

list.print_pre()

list.print_post()

list.print_in_order()

list.depth()
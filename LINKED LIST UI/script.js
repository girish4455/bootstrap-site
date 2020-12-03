class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 

class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    }
    add() 
    { 
        var element = prompt("Enter element to add:");
        if (element != " " && element != null) {
            alert("Element added to Linkled List")
    // creates a new node 
            var node = new Node(element); 
  
    // to store current node 
            var current; 
  
    // if list is Empty add the 
    // element and make it head 
            if (this.head == null) 
                this.head = node; 
            else { 
                current = this.head; 
  
        // iterate to the end of the 
        // list 
                while (current.next) { 
                    current = current.next; 
                } 
  
        // add node 
                current.next = node;
            } 
            this.size++;
        }
        else {
            alert("No element is added to the linked list ")
        }



    }

    remove() 
    { 
        var current = this.head; 
        var prev = null;
        if (current == null){
            alert("Linked List is empty!")
        }
        var element = prompt("Enter element in the linked list to remove:"); 
  
    // iterate over the list 
        while (current != null) { 
        // comparing element with current 
        // element if found then remove the 
        // and return true 
            if (current.element ==  element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--;
                alert("ELement removed!") 
                return current.element; 
            } 
            prev = current; 
            current = current.next; 
        }
        return -1; 
    } 

    show() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) {
            if (curr.next==null){ 
            str += curr.element ;
            } else {
                str += curr.element + "-->";
            }
            curr = curr.next; 
        }
        var h1 = document.createElement('h1');
        var result = document.createTextNode(str);
        h1.setAttribute('id', 'str');
        h1.appendChild(result);
        document.getElementById('flex-box-result').appendChild(h1);
    }
    
    clear()
    {
        document.getElementById('str').remove();
    }

} 

var ll = new LinkedList();






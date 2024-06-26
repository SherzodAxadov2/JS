class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        let newNode = new Node(value)

        if (this.head) {
            this.tail.next = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    pop() {
        if (!this.head) return undefined // for 0 item
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null

        this.length--

        if (!this.length) {
            this.head = null
            this.tail = null
        }

        return temp
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        console.log('temp: ', temp)
        this.length--

        if (!this.length) this.tail = null

        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return temp
        }
        return undefined
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index >= this.length) return false

        let newNode = new Node(value)
        let temp = this.get(index - 1)
        newNode.next = temp
        temp.next = newNode

        this.length++

        return true
    }

    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index >= this.length) return false

        /* use this one */
        // let before = this.get(index - 1)
        // let temp = this.get(index)
        // before.next = temp.next
        // temp.next = null

        /* or this one */
        let temp = this.get(index - 1)
        temp.next = temp.next.next

        this.length--

        return true
    }

    reverse() {
        let prev = null
        let current = this.head
        let next

        while (current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.tail = this.head
        this.head = prev

        return this
    }


    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }
}

function test() {
    let myLinkedList = new LinkedList(7);
    myLinkedList.unshift(8)
    myLinkedList.push(6)
    // myLinkedList.push(5)
    // myLinkedList.pop()
    // myLinkedList.shift()
    // console.log('set: ', myLinkedList.set(1, 7.5))
    // console.log('insertion: ', myLinkedList.insert(1, 10))
    // console.log('remove: ', myLinkedList.remove(1))

    console.log('reverse: ', myLinkedList.reverse())
    // console.log(myLinkedList)

    // myLinkedList.getHead();
    // myLinkedList.getTail();
    // myLinkedList.getLength();
    // myLinkedList.printList();
}

test()
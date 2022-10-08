type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>
    

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    prepend(item: T): void {
        this.length++
        const node = {value: item} as Node<T>
        if(this.head) {
            node.next = this.head
            this.head = node
            return
        }
        this.head = this.tail = node
        return
    }
    insertAt(item: T, idx: number): void {
        const index = idx < 0 ? 0: idx
        this.length++

        if(index > this.length) throw new Error("Insert index out of bounds")

        if(index === 0) this.prepend(item)


        let previousNode = undefined
        let currentNode = this.head
        for(let i = 0; i < index; i++) {
            previousNode = currentNode
            currentNode = currentNode?.next
        }
        const node = {value: item} as Node<T>
        if(previousNode) {
            node.next = currentNode
            previousNode.next = node
        }
        return
    }
    append(item: T): void {
        this.length++
        const node = {value: item} as Node<T>
        if(this.tail) {
            this.tail.next = node
            this.tail = node
            return
        }
        this.head = this.tail = node
        return
    }

    removeHead(): T | undefined {
        if(this.head) {
            this.length--
            const removedNode = this.head
            this.head = this.head.next
            return removedNode.value
        }
        return undefined
    }
    remove(item: T): T | undefined {
        let currentNode = this.head
        let previousNode = undefined
        if(currentNode && currentNode.value === item) return this.removeHead()

        while(currentNode && currentNode.value !== item) {
            previousNode = currentNode
            currentNode = currentNode.next
        }  
        if(previousNode && currentNode?.value === item) {
            previousNode.next = currentNode.next
            this.length--
            return currentNode.value
        }
        return undefined
    }
    get(idx: number): T | undefined {
        const index = idx < 0 ? 0: idx
        

        let previousNode = undefined
        let currentNode = this.head
        for(let i = 0; i < index; i++) {
            previousNode = currentNode
            currentNode = currentNode?.next
        }
        return currentNode?.value
    }
    removeAt(idx: number): T | undefined {
        const index = idx < 0 ? 0: idx
        this.length--
        if(index === 0) {
            if(this.head) {
                const removedNode = this.head
                this.head = this.head.next
                return removedNode.value
            }
            return undefined
        }
        if(index > this.length) throw new Error("Insert index out of bounds")

        let previousNode = undefined
        let currentNode = this.head
        for(let i = 0; i < index; i++) {
            previousNode = currentNode
            currentNode = currentNode?.next
        }
        if(previousNode) {
            previousNode.next = currentNode?.next
            return currentNode?.value
        }
        return undefined
    }
}
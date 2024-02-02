// Write a function called getName, that takes in a node and returns the individual's name

function getName(node){
    return node.name
}

// Write a function called next that takes in a node, and can return the next node.  We need to provide that function our collection of nodes as an argument.

function next(node, collection){
    return collection[node.next]
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

// Write a function called nodeAt that passed in an index returns the node at that index.  Remember that a linked list has a pointer to the head.

function nodeAt(idx, linkedList, collection) {
    let count = 0
    let currentNode = collection[linkedList]

    // if count is equal to the idx, return the currentNode
    // otherwise, set the currentNode to the next node 
    // and up the count

    while (count <= idx) {
        if (count === idx) {
            count += 1
        }
        else {
            currentNode = next(currentNode, collection)
            count += 1
        }
    }

    return currentNode
}

function addressAt(idx, linkedList, collection) {
    if (idx === 0) {
        return linkedList
    }

    let count = 0
    let currentNode = collection[linkedList]

    // if count is less than the idx, return the currentNode
    // otherwise, set the currentNode to the next node 
    // and up the count

    while (count < idx) {
        if (count === (idx - 1)) {
            count += 1
        }
        else {
            currentNode = next(currentNode, collection)
            count += 1
        }
    }

    return currentNode.next

}

function indexAt(node, collection, linkedList){
    let currentNode = collection[linkedList]
    let count = 0

    while (currentNode !== node) {
        currentNode = next(currentNode, collection)
        count += 1
    }

    return count
}

function insertNodeAt(idx, name, linkedList, collection){    
    let count = 0
    let currentNode = collection[linkedList]

    while (count < idx) {
        if (count === (idx - 1)) {
            let nextNode = currentNode.next
            collection[name].next = nextNode
            currentNode.next = name
            count += 1
        }
        else {
            currentNode = collection[currentNode.next]
            count += 1
        }
    }
}

function deleteNodeAt(idx, linkedList, collection) {
    let count = 0
    let currentNode = collection[linkedList]

    while (count < idx) {
        if (count === (idx - 1)) {
           let nextNode = collection[currentNode.next].next
           currentNode.next = nextNode
           count += 1
        }
        else {
            currentNode = collection[currentNode.next]
            count += 1
        }
    }

}
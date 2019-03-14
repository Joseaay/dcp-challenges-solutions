// ---------------------------------------------------------
// Daily Coding Problem: Problem #3
// ---------------------------------------------------------
// This problem was asked by Google.
//
// Given the root to a binary tree, implement serialize(root),
// which serializes the tree into a string, and deserialize(s),
// which deserializes the string back into the tree.
//
// Example:
// given the following Node class
//
// class Node:
// def __init__(self, val, left=None, right=None):
//     self.val = val
//     self.left = left
//     self.right = right
// The following test should pass:
//
// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

class Node {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const serialize = node => {
    let nodeArray = [];
    node
        ? nodeArray.push(node.val, serialize(node.left), serialize(node.right))
        : nodeArray.push("void");
    return nodeArray.toString();
};

const deserialize = string => _deserialize(string.split(","));

const _deserialize = nodeArray => {
    if (nodeArray.length === 0) return undefined;
    const value = nodeArray.shift();
    return value !== "void"
        ? new Node(value, _deserialize(nodeArray), _deserialize(nodeArray))
        : new Node();
};

export const dcpChallenge3 = () => {
    let node = new Node(
        "root",
        new Node("left", new Node("left.left")),
        new Node("right")
    );
    return deserialize(serialize(node)).left.left.val === "left.left";
};

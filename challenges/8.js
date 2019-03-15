// ---------------------------------------------------------
// Daily Coding Problem: Problem #8
// ---------------------------------------------------------
// This problem was asked by Google.
//
// A unival tree (which stands for "universal value") is a
// tree where all nodes under it have the same value.
//
// Given the root to a binary tree, count the number of
// unival subtrees.
//
// For example, the following tree has 5 unival subtrees:
//
//   0
//  / \
// 1   0
//    / \
//   1   0
//  / \
// 1   1

class Node {
    constructor(val, left, right, name) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const calculateDepthUniversalTree = (node, accVal) => {
    if (node.val !== accVal) return 0;
    if (!node.left && !node.right) return 1;
    if (!node.left) return calculateDepthUniversalTree(node.right, accVal);
    if (!node.right) return calculateDepthUniversalTree(node.left, accVal);
    return (
        calculateDepthUniversalTree(node.left, accVal) *
        calculateDepthUniversalTree(node.right, accVal)
    );
};

const universalTree = node_tree =>
    node_tree
        ? calculateDepthUniversalTree(node_tree, node_tree.val) +
          universalTree(node_tree.left) +
          universalTree(node_tree.right)
        : null;

export const dcpChallenge8 = _ =>
    universalTree(
        new Node(
            0,
            new Node(1),
            new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
        )
    );

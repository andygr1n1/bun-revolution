import { TreeNode } from '../libts/treeNodeDefinition'

/**
 * Given a binary tree, determine if it is height-balanced.
 * A height-balanced binary tree is a binary tree in which the left and right
 * subtrees of every node differ in height by no more than 1.
 */
function isBalanced(root: TreeNode | null): boolean {
    return getHeight(root) !== -1
}

/**
 * Helper function that returns the height of the tree if balanced, or -1 if not balanced.
 * This allows us to check both conditions (height difference and subtree balance) in one pass.
 */
function getHeight(node: TreeNode | null): number {
    if (node === null) {
        return 0
    }

    const leftHeight = getHeight(node.left)
    const rightHeight = getHeight(node.right)

    console.log('leftHeight:', leftHeight, 'rightHeight:', rightHeight)

    // If either subtree is unbalanced, return -1
    if (leftHeight === -1 || rightHeight === -1) {
        return -1
    }

    // Check if the height difference is more than 1
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1
    }

    // Return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1
}

// Examples:

// Example 1: Balanced tree
//       3
//      / \
//     9   20
//        /  \
//       15   7
const example1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
// console.log('Example 1 (balanced):', isBalanced(example1)) // true

// Example 2: Unbalanced tree
//       1
//      / \
//     2   2
//    / \
//   3   3
//  / \
// 4   4
const example2 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)),
    new TreeNode(2)
)
console.log('Example 2 (unbalanced):', isBalanced(example2)) // false

// Example 3: Empty tree
// console.log('Example 3 (empty):', isBalanced(null)) // true

// Example 4: Single node
const example4 = new TreeNode(1)
// console.log('Example 4 (single node):', isBalanced(example4)) // true

// Example 5: Balanced tree with different heights
//       1
//      / \
//     2   3
//    /     \
//   4       5
const example5 = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, null, new TreeNode(5)))
// console.log('Example 5 (balanced):', isBalanced(example5)) // true

// Example 6: Unbalanced tree (left subtree too deep)
//       1
//      /
//     2
//    /
//   3
const example6 = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null)
// console.log('Example 6 (unbalanced):', isBalanced(example6)) // false

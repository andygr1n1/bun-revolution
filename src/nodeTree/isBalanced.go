package main

import (
	"bun-revolution/src/libgo"
	"bun-revolution/src/libgo/math"
	"fmt"
)

/**
 * Given a binary tree, determine if it is height-balanced.
 * A height-balanced binary tree is a binary tree in which the left and right
 * subtrees of every node differ in height by no more than 1.
 */
type TreeNode = libgo.TreeNode

func isBalanced(root *TreeNode) bool {
	return getHeight(root) != -1
}

func getHeight(node *TreeNode) int {
	if node == nil {
		return 0
	}

	left := getHeight(node.Left)
	right := getHeight(node.Right)

	if left == -1 || right == -1 {
		return -1
	}

	if math.Abs(left-right) > 1 {
		return -1
	}

	return math.Max(left, right) + 1
}

func main() {
	// Example 1: Balanced tree
	//       3
	//      / \
	//     9   20
	//        /  \
	//       15   7
	example1 := &TreeNode{
		Val:  3,
		Left: &TreeNode{Val: 9},
		Right: &TreeNode{
			Val:   20,
			Left:  &TreeNode{Val: 15},
			Right: &TreeNode{Val: 7},
		},
	}
	fmt.Println("Example 1 (balanced):", isBalanced(example1)) // true

	// Example 2: Unbalanced tree
	//       1
	//      / \
	//     2   2
	//    / \
	//   3   3
	//  / \
	// 4   4
	example2 := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val:   3,
				Left:  &TreeNode{Val: 4},
				Right: &TreeNode{Val: 4},
			},
			Right: &TreeNode{Val: 3},
		},
		Right: &TreeNode{Val: 2},
	}
	fmt.Println("Example 2 (unbalanced):", isBalanced(example2)) // false

	// Example 3: Empty tree
	fmt.Println("Example 3 (empty):", isBalanced(nil)) // true

	// Example 4: Single node
	example4 := &TreeNode{Val: 1}
	fmt.Println("Example 4 (single node):", isBalanced(example4)) // true

	// Example 5: Balanced tree with different heights
	//       1
	//      / \
	//     2   3
	//    /     \
	//   4       5
	example5 := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val:  2,
			Left: &TreeNode{Val: 4},
		},
		Right: &TreeNode{
			Val:   3,
			Right: &TreeNode{Val: 5},
		},
	}
	fmt.Println("Example 5 (balanced):", isBalanced(example5)) // true

	// Example 6: Unbalanced tree (left subtree too deep)
	//       1
	//      /
	//     2
	//    /
	//   3
	example6 := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val:  2,
			Left: &TreeNode{Val: 3},
		},
	}
	fmt.Println("Example 6 (unbalanced):", isBalanced(example6)) // false
}

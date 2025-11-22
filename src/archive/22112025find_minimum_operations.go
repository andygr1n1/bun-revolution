package main

import (
	"fmt"

	"bun-revolution/src/libgo"
)

func minimumOperations(nums []int) int {
	// minimumOperations := 0
	// for _, num := range nums {
	//  if num%3 != 0 {
	//      minimumOperations++
	//  }
	// }
	// return minimumOperations
	filtered := libgo.Filter(nums, func(num int) bool {
		return num%3 != 0
	})
	return len(filtered)
}

func main() {
	fmt.Println("minimumOperations([1, 2, 3, 4, 5]):", minimumOperations([]int{1, 2, 3, 4, 5}))
	fmt.Println("minimumOperations([3, 6, 9]):", minimumOperations([]int{3, 6, 9}))
}

package main

import (
	"bun-revolution/src/libgo"
)

func MinimumOperations(nums []int) int {
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

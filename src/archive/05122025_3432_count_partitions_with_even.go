package main

func CountPartitions(nums []int) int {
	result := 0

	for _, v := range nums {
		result += v
	}

	if result%2 != 0 {
		return 0
	}

	return len(nums) - 1
}

// #for loop # %2 === 0

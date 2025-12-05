package main

import "fmt"

func main() {
	fmt.Println("count partitions", CountPartitions([]int{10, 10, 3, 7, 6}))
	fmt.Println("minimumOperations([1, 2, 3, 4, 5]):", MinimumOperations([]int{1, 2, 3, 4, 5}))
	fmt.Println("minimumOperations([3, 6, 9]):", MinimumOperations([]int{3, 6, 9}))
}

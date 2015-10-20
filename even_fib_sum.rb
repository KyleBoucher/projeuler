def swap nums
	#[3,5]
	nums[0] = nums[0] + nums[1] #[8,5]
	nums[1] = nums[0] - nums[1] #[8,3]
	nums[0] = nums[0] - nums[1] #[5,3]
end

def even_fib_sum maxNum
	
	fib = [1,2]
	tot = 0

	while fib[1] < maxNum do
		if fib[1] % 2 == 0
			tot += fib[1]
		end

		fib[0] = fib[0] + fib[1]
		swap fib
	end

	return tot
end

puts even_fib_sum 4e6
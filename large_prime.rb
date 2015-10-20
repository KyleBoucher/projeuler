def getPrimeFactors number
	facs = []
	number.times { |i| i=i+2
		if number % i == 0 and isPrime i
			facs.push(i)
			puts "Prime Factor: " + i.to_s
		end
	}

	return facs
end

def isPrime number 
	p = true
	(number-2).times { |i| i=i+2
		if number % i == 0
			p = false
			break
		end
	}

	return p
end

puts (getPrimeFactors 13195).max
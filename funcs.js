
function multiples() {
	var sumOutput = document.getElementById("multiplesSum");
	var nInput = document.getElementById("multiplesN").value;

	nInput--;//Below N

	var num3 = Math.floor(nInput/3);	//Multiples of 3 in N
	var num5 = Math.floor(nInput/5);	//Multiples of 5 in N
	var num15 = Math.floor(nInput/15);	//Multiples of 15 in N, duplicate counting for lowest common denom of 3&5

	var sum = 0;

	for(i = 1; i <= num3; ++i) {
		sum += i*3;
	}
	for(i = 1; i <= num5; ++i) {
		sum += i*5;
	}
	for(i = 1; i <= num15; ++i) {
		sum -= i*15;
	}

	sumOutput.innerHTML = "Sum: " + sum;
}

function fibonacci() {
	var sumOutput = document.getElementById("fibSum");
	var nInput = document.getElementById("fibN").value;

	var curNums = [1,2];// Starting numbers of the Fibonacci Sequence
	var sum = 0;

	while(curNums[1] <= nInput) {
		// check even, add to total
		if(curNums[1] % 2 == 0) { 
			sum += curNums[1];
		}

		// next fibonacci number
		curNums[0] = curNums[0] + curNums[1];
		curNums = swapNumbers(curNums, 0, 1);
	} 

	sumOutput.innerHTML = "Sum: " + sum;
}

function prime() {
	var output = document.getElementById("largePrime");
	var nInput = document.getElementById("primeN").value;

	facs = getFactors(nInput);
	primes = [];

	// find which factors are primes
	for(var i = 0; i < facs.length; ++i) {
		if(isPrime(facs[i])) {
			primes.push(facs[i]);
		}
	}

	// get the max in the array, "..." expands array
	var largePrime = Math.max(...primes);
	output.innerHTML = "Largest Prime Factor: " + largePrime;
}

////////////////////
// UTILITY FUNCTIONS
function swapNumbers(ar, i1, i2) {
	//EG: [1, 3];
	ar[i1] = ar[i1] + ar[i2]; //[4, 1]
	ar[i2] = ar[i1] - ar[i2]; //[4, 1]
	ar[i1] = ar[i1] - ar[i2]; //[3, 1]

	return ar;
}

// a factor can divide the number with no remainder
function getFactors(number) {
	factors = [];
	for(i = 0; i <= number; ++i) {
		if(number%i == 0) {
			factors.push(i);
		}
	}

	return factors;
}

// a prime is a number that is only divisible by 1 and itself.
function isPrime(number) {
	p = true;
	for(i = 2; i < number; ++i) {
		if(number%i == 0) {
			p = false;
			break;
		}
	}

	return p;
}
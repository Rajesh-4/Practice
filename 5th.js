// Check A Number Is Odd, Even or Prime
function prime(x) {
    count = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) 
        {
            count += 1;
        }
    }

    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
}


function check(x) {

    if (x % 2 == 0 & prime(x)) {
        console.log(x, "is Both even and prime");
    }
    else if (x % 2 != 0 & prime(x)) {
        console.log(x, "is odd and prime");
    }
    else if (prime(x)) {
        console.log(x, "is prime");
    }
    else if (x % 2 == 0) {
        console.log(x,"is even");
    }
    else {
        console.log(x, "is Odd");
    }
}
function checkEvenOddPrime(x, y, z) {
    check(x)
    check(y)
    check(z)
}




checkEvenOddPrime(15, 4, 7)


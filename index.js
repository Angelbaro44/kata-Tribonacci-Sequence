function tribonacci(signature,n){
      for (let i = 3; i < n; i++) {
        signature.push(signature[i-3] + signature[i-2] + signature[i-1])
      }
      return signature.slice(0,n)
    }
    console.log(tribonacci([1,1,1],10)) //Expected Answer [1,1,1,3,5,9,17,31,57,105]
    console.log(tribonacci([0,0,1],10)) //Expected Answer [0,0,1,1,2,4,7,13,24,44]
    console.log(tribonacci([0,1,1],10)) //Expected Answer [0,1,1,2,4,7,13,24,44,81]
    console.log(tribonacci([1,0,0],10)) //Expected Answer [1,0,0,1,1,2,4,7,13,24]
    console.log(tribonacci([0,0,0],10)) //Expected Answer [0,0,0,0,0,0,0,0,0,0]
    console.log(tribonacci([1,2,3],10)) //Expected Answer [1,2,3,6,11,20,37,68,125,230]
    console.log(tribonacci([3,2,1],10)) //Expected Answer [3,2,1,6,9,16,31,56,103,190]
    console.log(tribonacci([1,1,1],1)) //Expected Answer [1]
    console.log(tribonacci([300,200,100],0)) //Expected Answer []
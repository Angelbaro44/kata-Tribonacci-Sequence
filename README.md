# kata-Tribonacci-Sequence

Description:
-
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)



Test Cases:
-
    Test.describe("Basic tests",function(){
    Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
    Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
    Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
    Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
    Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
    Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
    Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
    Test.assertSimilar(tribonacci([1,1,1],1),[1])
    Test.assertSimilar(tribonacci([300,200,100],0),[])
    Test.assertSimilar(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
    })

    Test.describe("Random tests",function(){
    function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}

    function soluzionacci(sign,n){
      while (sign.length<n){
        sign.push(sign[sign.length-3]+sign[sign.length-2]+sign[sign.length-1])
      }
      return sign.slice(0,n)
    }

    for (var _=0;_<40;_++){
        sign=[randint(0,20),randint(0,20),randint(0,20)];
        n=randint(0,50);
        Test.it("Testing for signature: ["+sign.join(", ")+"] and n: "+n,function(){
        Test.assertSimilar(tribonacci([].concat(sign), n), soluzionacci(sign,n), "It should work with random inputs too");
        })
    }
    })

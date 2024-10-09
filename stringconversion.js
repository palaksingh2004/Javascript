 let str1  = "hello"
 let str2 = " palak!"
 let str3 = str1 + str2
 console.log(str3)

 console.log("1" + 2)
 console.log(1+"2")
 console.log("1"+ 2 +2)
 console.log(1 + 2 +"2")
// all the above things are mentioned in ECMA standards link which is explained in 5th video.

// console.log(1<"2");
// console.log(1<"02");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // here, the reason is that an equality check == and comparsion >,<>,=,<= work differently. comparisions convert null to a number, treating it as 0. That's why (3) null >=0 is true, null >0 is false.

let maxOfTwoNumbers = (x,y)=>{
    if (x>=y ) {
        return x;
        
    }
    else {
        return y;
    }

}

console.log(maxOfTwoNumbers(3,9))

let maxOfThree = (a,b,c) => {
    if (a<b) {
        if (a<c) {
            if (b<c) {
                console.log(a + ", then " + b + ", then " + c);
            } else {
                console.log (a + ", then " + c + ", then " + b);
            }
        } else {
            console.log (c + ", then " + a + ", then " + b);
        }
    } else {
        if (b<c) {
            if (a<c) {
               console.log (b + ", then " + a + ", then " + c); 
            } else {
                console.log (b + ", then " + c + ", then " + a);
            }
        } else {
            console.log (c + ", then " + b + ", then " + a);
        }
    }
}

maxOfThree (20,10,30);


let isVowel= (argument) =>{

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

var char = "A";

if (isVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}





let sumArray = (array1,array2) => {
    var result = [];
    var ctr = 0;
    var x=0;
  
    if (array1.length === 0) 
     return "array1 is empty";
    if (array2.length === 0) 
     return "array2 is empty";   
  
   while (ctr < array1.length && ctr < array2.length) 
    {
      result.push(array1[ctr] + array2[ctr]);
      ctr++;
    }
  
   if (ctr === array1.length) 
   {
      for (x = ctr; x < array2.length; x++)   {
        result.push(array2[x]);
      }
    } 
    else
    {
    for (x = ctr; x < array1.length; x++) 
      {
        result.push(array1[x]);
      }
    }
    return result;
  }
  
  console.log(sumArray([1,0,2,3,4], [3,5,6,7,8,13]));



  console.log( [1, 2, 3].reduce( (a, b) => a * b ) );
console.log( Array.from( {length: 20} )
  .map( (v, i) => i + 1 )
  .reduce( (a,b) => a * b )
  .toLocaleString());

const arr = [];
if (arr.reduce( (a, b) => a * b, -1 ) === -1) {
  console.error(`The given array ${arr} is empty`);
}





let numArgs = () => {


}


console.log(numArgs.length)


// let reverseString =() => {
//   const splitName= ['h','e','l','l','o']
//   const reverseName = splitName.reverse
// }

// reverseString()



// var long1= 0;

// var plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

// function longestString(arr){
//   for (i=0; i<arr.length; i++){
//       if (arr[i].length > long1){
//         long1= arr[i].length;
//       }

//   }
//   return long1;
// }

// longestString(arr)





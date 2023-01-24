
 /*var tab1 =[];
var tab=[4,5,3];
  for (let i = 0; i < tab.length; i++) {
   
      tab1.push(tab[i]*2)
    }
  

console.log(tab1);  // [8, 4, 10]*/


/*function vowels_nmb(sentence) {
    var sentence="helloworld";
    var count=0;
    var vowels=["a","u","e","i","o"];
    for (let i=0;i<sentence.length;i++){
        if(vowels.includes(sentence[i])){
            count++
        }
    }
    return count;}

  var result = vowels_nmb("sentence");

console.log(result);*/

function sum_integer(num){
    var sum=0;
    var number = num.toString();
    for (let i=0;i<number.length;i++){
       
            sum+=Number(number[i]);
        }return sum;
    }
    console.log(sum_integer(22))
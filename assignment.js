//Very Easy

console.log("Q1 Convert Minutes into seconds");
//Q1 Convert Minutes into seconds
function convertmin(minutes)
{
    return minutes*60;
}

console.log(convertmin(5));



console.log("Q2 Divides Evenly");

//Q2 
dividesEvenly = (a,b)=>
{
    if(a%b == 0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));


//Easy

console.log("Q1 Count instances of a character in a String Solution ");
//Q1 Count Instances

function charCount(str1,str2)
{
    count = 0;
    for(i = 0; i < str2.length;i++)
    {
        if(str2[i] == str1)
        count++;
    }
    return count;
}

console.log(charCount('a','edabit'));
console.log(charCount('c','Chamber of secrets'));
 console.log(charCount('b','big fat bubble'));

 
 
 console.log("Q2 Add up the numbers from a single number Solution ");
//Q2 Add up the numbers from a single number

add= number => {
    sum=0;
    for(i=1;i<=number;i++)
    sum += i;
    return sum;
}
console.log(add(4));
console.log(add(13));
console.log(add(600));


console.log("Q3 Replace vowel with Another character Solution ");
//Q3 Replace vowel with an Another character

function replaceVowel(str)
{
    let len =str.length;
    let newstring = str;
    while(len>0){ //Search for vowels in the string and replace it accordingly
    
    newstring = newstring.replace('a','1');
    newstring = newstring.replace('e','2');
    newstring = newstring.replace('i','3');
    newstring = newstring.replace('o','4');
    newstring = newstring.replace('u','5');
    len--;
}
    console.log(newstring);
    
}

replaceVowel("karachi");
replaceVowel("chembur");
replaceVowel("khandbari");


//Medium

console.log("Q1 Reverse Words starting with a Particular letter");
//Q1 Reverse Words starting with a Particular letter.

function specialReverse(str,char){

    let array = str.split(" "); 
    let len = array.length;
    for(i=0;i<len;i++)
    {
        if(array[i].substr(0,1) == char) 
        {
            let newarray = array[i].split('');
            array[i] = newarray.reverse().join('');
        }
        
    }
    return console.log(array.join(' ')); 
    
    
}

specialReverse("word searches are super fun",'s');
specialReverse("first man to walk on the moon",'m');
specialReverse("peter piper picked pickled peppers",'p');


console.log("Q2 Hitting the Jackpot");
//Q2 Hitting the Jackpot


function testJackpot(array){
    let str = array[0];
    let flag = false;
for(i=0;i<4;i++)
{
    if(array[i]== str)
    flag = true;
    else
    flag = false;
}
return console.log(flag);
}

testJackpot(["@","@","@","@"]);
testJackpot(["abc","abc","abc","abc"]);
testJackpot(["&&","&","&&&","&&&&"]);
testJackpot(["SS","SS","SS","Ss"]);
testJackpot(["SS","SS","SS","SS"])



console.log("Q3 Remove Duplicates from an Array Solutions");

//Q3 Remove Duplicates from an Array

function removeDups(arr)
{
    for(i=0;i<arr.length;i++)
    {
        let first = arr[i]; 
        for(j=i+1;j<arr.length;j++)
        {
            if(first == arr[j])
            {
                arr.splice(j,1);
            }
        }
    }
    return console.log(arr);
}

removeDups([1,0,1,0]);
removeDups(["The","big","cat"]);
removeDups(["John","Taylor","John"]);


//Hard


console.log("Q1 Get Real Type solutions")

//Q1 Get Real Type

function realType(data)
{
    let array = Object.prototype.toString.call(data); //It returns [object string]
    let type = array.split(" ");
    let typeString="";
    for(i=0;i<type[1].length;i++)
    {
        if(type[1].charAt(i) !== "]") //For getting only string
        typeString+= type[1].charAt(i);
    }
    return typeString;
}

console.log(realType(1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));



console.log("Q2 Numbers in String solutions")

//Q2 Numbers in String

function numinStr(arrStr){
    let newArray=[];
   for(i=0;i<arrStr.length;i++)
   {
    arr1 =  arrStr[i].split("")
   
        for(j = 0; j< arr1.length;j++)
            {
                if(arr1[j] =="1"||arr1[j] =="2"||arr1[j] =="3"||arr1[j] =="4"||arr1[j] =="5"||arr1[j] =="6"||arr1[j] =="7"||arr1[j] =="8"||arr1[j] =="9"||arr1[j] =="0")
                {
                    newArray.push(arr1.join(""));
                    break;
                }
                

            }
   }
   return console.log(newArray);
}

numinStr(["1a","a","2b","b"]);
numinStr(["abc","abc10"]);
numinStr(["abc","ab10c","ab10c","bcd"]);
numinStr(["this is a test","test1"]);




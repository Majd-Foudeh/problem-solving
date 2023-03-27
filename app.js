
//  let arr=[0,1];
// for(let i =0 ; i<=arr.length;i++){
//     if(i==0 || i==1)
//     continue;
//     let x=arr[i-1]+arr[i-2];
//     arr.push(x)
// }
// console.log(arr);
// ------------------------------------task2---------------------------------
// let sum =0;
// let arr=[1,2,3,4,5,6];
// let m = arr.length;
// console.log( summ(arr,m))
// function summ (arr,m){
//     if(m === 0)
//     return 0;
//     sum= arr[m-1]+summ(arr,m-1)
// return sum;
// }
// console.log(sum)
// --------------------------------end of task 2----------------------------------------
// -----------------------------loop solusion task 3--------------------------------
// let x = "majd";
// let arr1 = x.split("")
// let n = arr1.length;
// console.log(arr1)
// let sum1 = "";
// for(let i=arr1.length-1 ;i>=0;i--){
// sum1+=arr1[i];
// }
// console.log(sum1)
// ------------------------------------end of loop solution---------------
// reverse(arr1, n);
// function reverse(arr1, n) {
//     if (n === 0)
//         return;
//     sum1 = arr1[n - 1] + reverse(arr1, n - 1);
//     return sum1;
// }
// ----------------------------------------end of task 3----------------------------


function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
// take nth term input from the user
const input = prompt(" Enter the number of terms: ")

if(input <= 0) {
    console.log('Enter a positive integer. ')
}
else{
    for (let i = 0; i < input; i++){
        console.log(fibonacci(i));
}
}




// let sum2="";
// function fabinnaci(number){
//     if (number <2){
//     sum2+=number;
//     return sum2;}
//     else
//     sum2=fabinnaci(number-1)+fabinnaci(number-2)
//     return sum2;
// }
// for (let i = 0; i < 10; i++) {
    
//     fabinnaci(i);
// }
// console.log(sum2);
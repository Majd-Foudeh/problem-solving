
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

// ----------------------------task 1 -----------------------------------
// function fibonacci(num) {
//     if (num < 2) {
//         return num;
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }
// // take nth term input from the user
// const input = prompt(" Enter the number of terms: ")

// if(input <= 0) {
//     console.log('Enter a positive integer. ')
// }
// else{
//     for (let i = 0; i < input; i++){
//         console.log(fibonacci(i));
// }
// }
// -----------------------------end of task 1---------------------------------------




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

//  ---------------------------------------------data structure --------------------------------------------
// -Q1------Implement a function that returns the minimum element in a stack in constant time complexity.
// class minstack{
//     constructor(){
//         this.stack=[];
//         this.minstack=[];
//     }
// push(x){
//     this.stack.push(x)
//     if (x <this.minstack[this.minstack.length-1] || this.minstack.length===0 ) {
//         this.minstack.push(x);
//     }
// }
// pop(){
//     let item =this.stack.pop();
//     if (condition) {
        
//     }
// }
// minimum_value(){
//     return this.minstack[this.minstack.length-1]
// }
// }
// let numbers =new minstack();
// numbers.push(3);
// numbers.push(5);
// numbers.push(2);
// numbers.push(7);
// // numbers.push(1);
// console.log(numbers.minimum_value());
// -----------------------------------------end oof q1---------------------------------------------
// Given a queue of integers, reverse the order of the elements in the queue.
// q2___________________________________
// ---------------------------test 1 of q2--------------------------------
class reversed_queue{
constructor(){
    this.queue=[];
    this.reversed=[];
}
enqueue(value){
this.queue.push(value);
}
dequeue(){
    let x=this.queue.shift();
}
peek(){
    return this.queue
}
getreverse(){
    for (let i = 0; i <= this.queue.length; i++) {
        if (this.queue.length===0 ) {
            continue;
        }
         let y =this.queue.shift();
    this.reversed.push(y)
        
    }
   
    return this.reversed
}
}
let numbers2=new reversed_queue();
numbers2.enqueue(1);
numbers2.enqueue(2);
numbers2.enqueue(3);
numbers2.enqueue(4);
numbers2.enqueue(5);

console.log(numbers2.peek())
console.log(numbers2.getreverse())
console.log(numbers2)
// -----------------------------------end of test 1--------------------------------------
// ---------------------------------solution of q2-------------------------------------

let queue = [];
function reversequeue()
{
    
    let stack2=[];
    while (queue.length>0) {
        const m =queue.shift();
        stack2.push(m);
    }
    while (stack2.length>0) {
        queue.push(stack2.pop())
    }
    return queue;
}
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(reversequeue());
// ---------------------------------end of solution of q2-------------------------------------


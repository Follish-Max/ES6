//收集剩余参数
function show(a,b,...args) {
    console.log(a)
    console.log(b)
    console.log(args)
}
console.log(show(1,2,3,4,5,6,7))

//效果和直接把数组的内容写在这里一样
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [...arr1,...arr2]
console.log(arr3)

function show(a,b=2,c=8) {
    console.log(a,b,c)
}
show(232,443)
//新增四个方法

//1.map 映射（一个对一个）
/*
let arr = [123, 34, 23]
let result = arr.map(function (item) {
    return item * 2
})

let result2 = arr.map(item => item *2)

console.log(result+'============'+result2)


let score = [12, 64, 23, 99]
let result3 = score.map(function (item) {
    return item >= 60 ? '及格' : '不及格'
})

let result4 = score.map(item => item >= 60 ? '及格' : '不及格')

console.log(result3)
console.log(result4)
*/

//2.reduce 汇总 一堆出来一个
    //比如，算总数，算平均
/*
var arr = [1, 3, 5, 2]
var result = arr.reduce(function (tmp,item,index) {
    //tmp 上次结果，item当前数，index次数从1开始
    //console.log(tmp, item, index)
    return tmp + item
})
console.log(result)

var arr2 = [1, 4, 5, 7]
var result2 = arr2.reduce(function (tmp, item, index) {
    if (index != arr.length - 1) {
       return tmp + item
    } else {
        return (tmp + item) / arr.length
    }
})
console.log(result2)
*/

//filter 过滤器，保留为true的
/*
var arr = [12,32,55,66]
var result = arr.filter(item => item % 3 === 0 ? true :false)
console.log(result)

var result2 = arr.filter(item => item % 3 ===0)
console.log(result2)

var arr2 = [
    {title: '西瓜',price: 20},
    {title: '香蕉',price: 15}
]
var result3 = arr2.filter(json => json.price >18)
console.log(result3)
*/

//4.forEach循环迭代

var arr = [12, 3, 4, 6]
var result = arr.forEach(item => console.log(item))
var result2 = arr.forEach((item,index) => console.log(item,index))
var result3 =arr.forEach(function (item,index) {
    console.log(item,index)
})
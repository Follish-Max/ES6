//arr.includes() 数组中是否包含某个东西

let arr = ['a', 'b', 'c']
console.log(arr.includes('a'))


//for...in 遍历数组下标key

for (let i in arr) {
    console.log(i)
}

//for ...of 遍历数组值value

for (let j of arr) {
    console.log(j)
}


let json = { a: 12, b: 5, c: 7 }
for (let i in json) {
    console.log(i)
}


//字符串
    //padStart()/padEnd()指定宽度，不够就补空格或指定字符串
console.log('=' + 'follish'.padStart(10,'0') + '=')
console.log('2'.padStart(2,'0'))
console.log('2'.padEnd(2,'0'))

//容忍度
/*
[1, 2, 3,]老版本数组最后不能有都好，新的可以有
函数参数最后也可以用逗号
 */
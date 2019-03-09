//多个两个新方法
//startsWith、endWith

var url = 'http://qq.com'
console.log(url.startsWith('http'))
console.log(url.endsWith('com'))


//字符串模板
//使用反引号，${变量}
//可以换行

let a = 12
let str1 = `hello${a}`
console.log(str1)

let title = '标题'
let content = '内容'
let str = `<div>
<h1>${title}</h1>
<p>${content}</p>
</div>`
console.log(str)
//json（JavaScript Object Notation），是一种用于数据交换的文本格式
//所有的key都必须用双引号包起来

//JSON对象是JavaScript的原生对象，用来处理JSON格式数据，有两个静态方法
//JSON.parse(string): 接受JSON字符串并将其转换成一个JavaScript对象
//JSON。stringify（obj）： 接受一个JavaScript对象并将其转换为一个JSON字符串


/*
var json = {a: 12,b: 2}
var str = JSON.stringify(json)
console.log(str)
var url = 'http://www.xx.com/' + encodeURIComponent(JSON.stringify(json))
console.log(url)
*/

/*
var str = '{"a": 12,"b": 4}'
var json = JSON.parse(str)
console.log(json)
*/

var a =12,b = 4
console.log(a,b)
console.log({a,b})
console.log({a,b,show(){console.log('a')}})
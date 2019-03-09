let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

let {x, y, z} = {x: 1,y: 2,z: 3}
console.log(x, y, z)

let [json, arr, num, str] = [{a: 1,b: 2},[1, 2, 3], 4,'hello']
console.log(json, arr, num, str)

//左右两边结构必须一样
//声明和赋值不能分开，在一句话里面
//右边得有结构，不能无规则瞎写
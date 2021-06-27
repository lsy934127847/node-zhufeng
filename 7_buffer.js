
// 1. node中  Buffer 是16进制 目的是为了短

// 进制转化 node只支持utf8 utf8:一般汉字占3byte
// 1byte = 8bit

// 1 1 1 1 1 1 1 1 

// 二进制转十进制
// a. 1*2**7 .... 1*2**0
// b. 1*2**8 - 1
console.log(parseInt("1010",2)) // 
console.log(255..toString(2))  //  11111111 十进制转二进制 二进制以0b开头
console.log(255..toString(8)) // 377                      八进制  0o 开头
console.log(255..toString(16)) // ff                     十六进制  0x 开头
//  十进制转二进制 
// a. 整数/2 取余 然后反向输出
console.log(0.1 + 0.2 )    //0.3000000000004  小数 十进制 转二进制时有精度问题
console.log(0.2 + 0.2)    // 0.4

// Base64 开发中替换掉路径 而且用于传输 是一个编码规范

// 3*8 = 4*6 使用base64 转化后的结果都会比之前大1/3

let buf = Buffer.from("珠")
console.log(buf)  //<Buffer e7 8f a0>
console.log((0xe7).toString(2))  //11100111
console.log((0x8f).toString(2))  // 10001111
console.log((0xa0).toString(2))  // 10100000
// 11100111 10001111 10100000
//    111001 111000 111110 100000
console.log(parseInt("111001",2)) // 57        // 5
console.log(parseInt("111000",2)) // 56        // 4
console.log(parseInt("111110",2)) // 62        // +
console.log(parseInt("100000",2)) // 32        // g
/*
Base64的编码规则是将3个8位字节(3×8=24位)编码成4个6位的字节(4×6=24位)，之后在每个6位字节前面，补充两个0，形成4个8位字节的形式，
那么取值范围就变成了0~63。又因为2的6次方等于64，所以每6个位组成一个单元 
https://www.cnblogs.com/libin-1/p/6165485.html
*/

// base 取值表  26大写英文 + 26 个小写英文  + 0-9 +  "+" + "/"
//              26 +            26     +     10     +    2          =  0-63

// 实现base32
// base64 要平均分成6位 前面两位补0 
console.log(parseInt("111111",2))  // 最大十进制为63 所以每一个字节最大不会超过63 
// base32  要平均分成5位 前面三位补0
console.log(parseInt("11111",2))   // 最大十进制31
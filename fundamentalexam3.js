//3. This time no story, no theory. The examples below show you how to write
// function accum
// example :
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
var array = "abcd"
function accum(str){
    str= str.split("")
    var output = ""
    var jumlah = 0
    for(var i = 0; i<str.length; i++){
        output = output +str[i].toUpperCase()
        output = output +str[i].repeat(jumlah)
        

        if(jumlah !== str.length-1){
            output = output + "-"
        }
        
        jumlah ++
    }
    return output
}
console.log(accum("abc"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt") )

function getMiddle(str){
    var kata = str.split("")
    if(kata.length % 2 !== 0){
        return kata[Math.floor(kata.length/2)]
    }else if(kata.length %2 ==0){
        return kata[(kata.length/2)-1] + kata[kata.length/2]
    }
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))

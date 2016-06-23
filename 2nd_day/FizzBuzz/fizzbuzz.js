// JavaScript File
var F = "Fizz"
var B = "Buzz"

for(var i = 1; i <= 100 ; i++){
    
    if(i % 15 == 0 ){
        document.write(F + B + "<br>")            
    }else if(i % 3 == 0){
        document.write(F+ "<br>")
    }else if (i% 5 == 0){
        document.write(B+ "<br>")
    }else{
        document.write(i+ "<br>")
    }
}
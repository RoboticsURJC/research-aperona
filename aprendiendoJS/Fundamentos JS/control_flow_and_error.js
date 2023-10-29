//-- bucles

var x = 0

while (x <= 10){
    if (x == 3){
        console.log(x)
    }else{
        console.log("x")
    }
    x++
}


var coffee = "arabic"

switch (coffee){
    case "blend":
        console.log("blend")
        break
    case "roast":
        console.log("roast")
        break
    case "arabic":
        console.log("good taste")
        break
    default:
        console.log("default")
        break
}


//-- manejo de excepciones

/*
function UserException(message){
    this.message = message
    this.name = "UserException"
}

UserException.prototype.toString = function(){
    return `${this.name}: "${this.message}"`
}

throw new UserException("User not found")

*/

function getMonthName(mo){
    mo = mo - 1

    let months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
    ]

    if (months[mo]){
        return months[mo]
    }else{
        throw "InvalidMonthNo"
    }
}

console.log(getMonthName(3))


try{
    monthName = getMonthName(myMonth = 4)
    console.log(monthName)
}catch (e){
    monthName = "Unknown"
    console.error("Unknown month")
    //logMyErrors(e)
}finally {
    console.log("Termina")
}
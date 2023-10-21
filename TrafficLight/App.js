function displayColor(exp){
    switch(exp){
        case "STOP":
            document.getElementById("round1").style = "background-color: rgb(241, 23, 23)";
            document.getElementById("round2").style = "background-color: rgb(89, 81, 81)";
            document.getElementById("round3").style = "background-color: rgb(89, 81, 81)";

            break;
        case "READY":
            document.getElementById("round2").style = "background-color: rgb(222, 214, 60)";
            document.getElementById("round1").style = "background-color: rgb(89, 81, 81)";
            document.getElementById("round3").style = "background-color: rgb(89, 81, 81)";

            break;
        case "GO":
            document.getElementById("round3").style = "background-color: rgb(10, 151, 27)";
            document.getElementById("round1").style = "background-color: rgb(89, 81, 81)";
            document.getElementById("round2").style = "background-color: rgb(89, 81, 81)";
        break;
        default:
}
}
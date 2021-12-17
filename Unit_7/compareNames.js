// function for compareing names
function compareNames(){
    var result = "?"
    var val1 = document.getElementById("value1").value;
    var val2 = document.getElementById("value2").value;
    console.log("val1", val1)
    console.log("val2", val2)
    //Null check
    if(val1 && val2){
        //strict check for equality
        if(val1 === val2){
            result = "Same"
        }
        //strick check for lower case equality (different cases)
        else if(val1.toLowerCase() === val2.toLowerCase()){
            result = "Same, but different cases"
        }
        //different
        else{
            result = "Different"
        }
    }
    //User feedback if null
    else{
        result = "Please fill out both feilds"
    }

    document.getElementById("resultSpan").innerHTML = `<span>Result: ${result}</span>`;
}

// reset function for form
function resetForm(){
    document.getElementById("resultSpan").innerHTML = "<span>Result: </span>";
    document.getElementById("form1").reset();
}


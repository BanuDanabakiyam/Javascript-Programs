function displaySalaryDetails(){
    let basicSalary = parseInt(document.getElementById("basicSal").value);
    let daAllowance = document.getElementById("da").value = basicSalary * 5 / 100;
    let hraAllowance = document.getElementById("hra").value = basicSalary * 10 / 100;
    let travelAllowance = document.getElementById("travel").value = basicSalary * 5 / 100;
    let pfAllowance = document.getElementById("pf").value = basicSalary * 10 / 100;
    daAllowance = parseInt(daAllowance);
    hraAllowance = parseInt(hraAllowance);
    travelAllowance = parseInt(travelAllowance);
    pfAllowance = parseInt(pfAllowance);
    let netAllowance = document.getElementById("netSalary").value = basicSalary + daAllowance + hraAllowance + travelAllowance;
    netAllowance = parseInt(netAllowance);
    let grossAllowance = document.getElementById("grossSalary").value = netAllowance - pfAllowance;
    grossAllowance = parseInt(grossAllowance);

}
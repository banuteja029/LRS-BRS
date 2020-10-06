function calculate(){
    var sqyards=document.getElementById("ip1").value;
    var sqmts=sqyards/1.196;
    document.getElementById("ip3").value=sqmts;
    var price=document.getElementById("ip2").value;
    
    var result=sqmts*price;
    document.getElementById("resultprint").innerHTML="your LRS payment in RS             " + parseInt(result);

}
calculate()
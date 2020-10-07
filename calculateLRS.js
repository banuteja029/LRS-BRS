function calculate(){
    var sqyards=document.getElementById("ip1").value;

    if(sqyards<=100)
    {
        document.getElementById("ip2").value=100;
    }
    else if(sqyards>=101 && sqyards<=300)
    {
        document.getElementById("ip2").value=200;
    }
    
    
    if(sqyards>=301 && sqyards<=500)
    {   
        document.getElementById("ip2").value=600;
    }
    else if(sqyards>=501)
    {
        document.getElementById("ip2").value=750;
    }

    if(sqyards<=5)
    {
        document.getElementById("ip2").value=5;
    }
   
    
        
    var sqmts=sqyards/1.196;
    document.getElementById("ip3").value=sqmts;
    var price=document.getElementById("ip2").value;
    
    var result=sqmts*price;
    document.getElementById("resultprint").innerHTML="your LRS payment in RS             " + parseInt(result);


}
calculate()
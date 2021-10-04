

 function dollarFormat(valuein) {

    var formatStr=" "

    var Outdollars=" "

    var decipos=valuein.indexOf(".")

    if (decipos==-1) {
      decipos=valuein.length
    }
    var dollars=valuein.substring(0,decipos)
    var dollen=dollars.length
    if (dollen>3) {
      while (dollen>0) {
        tDollars=dollars.substring(dollen-3,dollen)
          if (tDollars.length==3) {
            Outdollars=","+tDollars+Outdollars
            dollen=dollen-3
          }
          else {
            Outdollars=tDollars+Outdollars
            dollen=0
          }
      }
      if (Outdollars.substring(0,1)==".") {
        dollars=Outdollars.substring(1,Outdollars.length)
      }
      else {
        dollars=Outdollars
      }
    }
    var cents=valuein.substring(decipos+1,decipos+3)
    if (cents=="") {
      cents="00"
    }
    if (cents.length == 1) {
      cents = cents+"0"
    }
    var formatStr="$"+dollars+"."+cents

    return formatStr
  }


function currency(Input) {
   Input=eval(Input)
   WorkNum=Math.abs((Math.round(Input*100)/100))
   Decimal=""+WorkNum
   
// alert( Decimal.indexOf(".") );

   if (Decimal.indexOf(".")==-1)
      {Decimal+=".00"}
   
   strDollar=Decimal.substr(0,Decimal.indexOf("."))
   intDollar=strDollar-0

   DecimalPos=Decimal.substr(Decimal.indexOf("."))
   
   while (DecimalPos.length<3)
      {DecimalPos+="0"}

   if (intDollar>=1000)
      {
      DollarLen=strDollar.length
      strDollar=parseInt(""+(intDollar/1000))+","+strDollar.substring(DollarLen-3,DollarLen)
      }

   if (intDollar>=1000000)
      {
      DollarLen=strDollar.length
      strDollar=parseInt(""+(intDollar/1000000))+","+strDollar.substring(DollarLen-7,DollarLen)
      }

   strCurrency = strDollar + DecimalPos 

   if (Input<0) {strCurrency="("+strCurrency+")"}
   
   return "$"+strCurrency;
}


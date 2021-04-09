
var operacion=null;
var operador=null;
var otra;



function uno(){

if(operador=="+"){
    otra=otra+1;
    operacion=otra.toString();

}
else if(operador=="-"){
    otra=otra-1;
    operacion=otra.toString();

    
}
else if(operador=="*"){
    otra=otra*1;
    operacion=otra.toString();
    
}
else if(operacion==null){

    operacion="1";
}else{
    operacion=operacion+"1";
}

if(operador==null){
    document.getElementById("textResult").value= operacion;
}else{

    document.getElementById("textResult").value= otra;
    operador=null;
    
}

}



function dos(){
    if(operador=="+"){
        otra=otra+2;
        operacion=otra.toString();
    
    }
    else if(operador=="-"){
        otra=otra-2;
        operacion=otra.toString();
    
        
    }
    else if(operador=="*"){
        otra=otra*2;
        operacion=otra.toString();
        
    }
    else if(operacion==null){
    
        operacion="2";
    }else{
        operacion=operacion+"2";
    }
    
    if(operador==null){
        document.getElementById("textResult").value= operacion;
    }else{
    
        document.getElementById("textResult").value= otra;
        operador=null;
        
    }
    
    }

function tres(){

    if(operador=="+"){
        otra=otra+3;
        operacion=otra.toString();
    
    }
    else if(operador=="-"){
        otra=otra-3;
        operacion=otra.toString();
    
        
    }
    else if(operador=="*"){
        otra=otra*3;
        operacion=otra.toString();
        
    }
    else if(operacion==null){
    
        operacion="3";
    }else{
        operacion=operacion+"3";
    }
    
    if(operador==null){
        document.getElementById("textResult").value= operacion;
    }else{
    
        document.getElementById("textResult").value= otra;
        operador=null;
        
    }

    }

function cuatro(){

    if(operador=="+"){
        otra=otra+4;
        operacion=otra.toString();
    
    }
    else if(operador=="-"){
        otra=otra-4;
        operacion=otra.toString();
    
        
    }
    else if(operador=="*"){
        otra=otra*4;
        operacion=otra.toString();
        
    }
    else if(operacion==null){
    
        operacion="4";
    }else{
        operacion=operacion+"4";
    }
    
    if(operador==null){
        document.getElementById("textResult").value= operacion;
    }else{
    
        document.getElementById("textResult").value= otra;
        operador=null;
        
    }
    
    }

 

function cinco(){

    if(operador=="+"){
        operacion=operacion+5;
    }
    else if(operador=="-"){
        operacion=operacion-5;
    }
    else if(operador=="*"){
        operacion=operacion*5;
    }
    else{
        operacion=5;
    }
    
    document.getElementById("textResult").value=operacion;
    
    }

 
function seis(){

    if(operador=="+"){
        operacion=operacion+6;
    }
    else if(operador=="-"){
        operacion=operacion-6;
    }
    else if(operador=="*"){
        operacion=operacion*6;
    }
    else{
        operacion=6;
    }
    
    document.getElementById("textResult").value=operacion;
    
    }

function siete(){

    if(operador=="+"){
        operacion=operacion+7;
    }
    else if(operador=="-"){
        operacion=operacion-7;
    }
    else if(operador=="*"){
        operacion=operacion*7;
    }
    else{
        operacion=7;
    }
    
    document.getElementById("textResult").value=operacion;
    
    }

 

/* 
function calculate(b){

    switch(b.id){

        case "1":
            if(operador=="+"){
                operacion=operacion+1;
            }
            else if(operador=="-"){
                operacion=operacion-1;
            }
            else if(operador=="*"){
                operacion=operacion*1;
            }
            else if(operacion==0){

                operacion="1";
            }

            else{
                operacion=operacion+"1";
            }

            
            document.getElementById("textResult").value=operacion;
        
        case "+":
            operador="+";
            parseInt(operacion);    
        
        case "2":
            if(operador=="+"){
                operacion=operacion+2;
            }
            else if(operador=="-"){
                operacion=operacion-2;
            }
            else if(operador=="*"){
                operacion=operacion*2;
            }
            else if(operacion==0){

                operacion="2";
            }

            else{
                operacion=operacion+"2";
            }
            
            document.getElementById("textResult").value=operacion;
           






    }



}

*/


function suma(){
    operador="+";
    otra=parseInt(operacion, 10);


}

function resta(){
    operador="-";
    otra=parseInt(operacion, 10);


}




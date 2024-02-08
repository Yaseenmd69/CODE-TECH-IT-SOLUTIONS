let scrn=document.getElementById('screen');

function input(x){
        scrn.value=scrn.value+x
}
function allclear(){


        scrn.value='';//used for clearing all the vaules
}
function del(){
        scrn.value=scrn.value.slice(0,-1);//slice is use for deleting the values
}



function cal(){
        try{
        scrn.value=eval(scrn.value) //eval is for calculating the values//
        }
        catch{
            scrn.value='ERROR';    //TRY CATCH IS USING WHEN USER INPUT INVALID CALCULATION SO IT SHOWS ERROR//
        }
}
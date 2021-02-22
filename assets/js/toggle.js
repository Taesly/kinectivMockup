
var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var checkedToggle;
var prof = document.getElementById("prof");
var elite = document.getElementById("elite");
var btn1click = false;
var btn2click = false;
click = true;




function toggled(){

    // document.getElementById("buttonOne").checked = true;

   
        click = false;
 

    

    switch (click){


        //  case true: 

        //  buttonOne.classList.add("buttonOne", "btn", "btn-secondary", "active");
        //  buttonOne.classList.remove("buttonTwo");

        //  buttonTwo.classList.add("buttonTwo","btn", "btn-secondary");
        // buttonTwo.classList.remove("buttonOne");

        //  prof.innerHTML = "$7/MONTH";
        //  elite.innerHTML = "$14/MONTH";

        //  break;

        case false:

            buttonOne.classList.add("buttonTwo", "btn", "btn-secondary");
            buttonOne.classList.remove("buttonOne");

            buttonTwo.classList.add("buttonOne","btn", "btn-secondary", "active");
            buttonTwo.classList.remove("buttonTwo");

            prof.innerHTML ="$70/YEARLY";
            elite.innerHTML = "$110/YEARLY";

            click = true;

            break;

           

            
    }



};

function tog(){

if (click = true){

           

    buttonOne.classList.add("buttonOne", "btn", "btn-secondary", "active");
    buttonOne.classList.remove("buttonTwo");

    buttonTwo.classList.add("buttonTwo","btn", "btn-secondary");
   buttonTwo.classList.remove("buttonOne");

    prof.innerHTML = "$7/MONTH";
    elite.innerHTML = "$14/MONTH";

}
}



    // if(buttonOne.onclick){


       

    //     checkedToggle = 1;

    // }else (buttonTwo.onclick == true)

        

    //     checkedToggle = 2;
    

    

    //     switch (checkedToggle){

            

    //         case 1:
                
    //             buttonOne.classList.add("buttonOne", "btn", "btn-secondary", "active");
    //             buttonOne.classList.remove("buttonTwo");
        
    //             buttonTwo.classList.add("buttonTwo","btn", "btn-secondary", "active");
    //             buttonTwo.classList.remove("buttonOne");

                
    //             prof.innerHTML = "$20/Yearly";
    
               
                
    //             break;
    
    //         case 2:
               
    //             buttonOne.classList.add("buttonTwo", "btn", "btn-secondary", "active");
    //             buttonOne.classList.remove("buttonOne");
        
    //             buttonTwo.classList.add("buttonOne","btn", "btn-secondary", "active");
    //             buttonTwo.classList.remove("buttonTwo");

    //             var prof = document.getElementById("prof");
    //             prof.innerHTML = "$15/Yearly";

                
    //             elite.innerHTML = "$20/Yearly";
    
                
    //             break;
    
            
    
           
                
    //     }
    




/* this is my code for queston 1 */

let test1 = document.getElementById("container");
console.log(test1); 

  /* this is my code for queston 2 */

let test2 = document.querySelector("#container");
    console.log(test2); 

       /* this is my code for queston 3 */

let test3 = document.getElementsByClassName("second");
     console.log(test3); 

    /* this is my code for queston 4 */

     let test4 = document.getElementsByTagName("li")[5];
          console.log(test4); 
          
          /* this is my code for queston 5 */
          let node = document.createTextNode("Hello!");
          let element = document.getElementById("container");
           element.appendChild(node); 

           /* this is my code for queston 6 & 7*/
           document.querySelector('div.footer');
           let test5 = document.querySelector('div.footer');
           test5.classList.add('main');
           test5.classList.remove('main');
             console.log(document.querySelectorAll('div'));  

             /* this is my code for queston 8,9,10 & 11 */
           let newLi = document.createElement('li');
           let node = document.createTextNode("four");
           newLi.appendChild(node);
           let element = document.querySelector('ul');
           element.appendChild(newLi); 


            



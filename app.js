// let a = "";
// let buttons = document.querySelectorAll('.buttons');
// Array.from(buttons).forEach((buttons)=>{
//     buttons.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//         a = eval(a)
//         document.querySelector('input').value= a;
//     }
//     else if(e.target.innerHTML == 'C'){
//         a ="";
//         document.querySelector('input').value= a;
//     }

//     else{
//     console.log(e.target.innerHTML)
//     a = a+ e.target.innerHTML;
//     document.querySelector('input').value= a; 
// }
// })

// })

let a = "";
let buttons =document.querySelectorAll('.buttons');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
          a = eval(a)
            document.querySelector('input').value = a;
        }

        else if(e.target.innerHTML == 'C'){
            a = "";
              document.querySelector('input').value = a;
          }

else{
    console.log(e.target.innerHTML)
        a = a+ e.target.innerHTML;
        document.querySelector('input').value= a
}


    })
})
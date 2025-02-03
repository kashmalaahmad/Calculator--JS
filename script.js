let string="";
 x="50";
 x=50;
 x={name:"Kashmala"};
console.log(typeof x);
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>
{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="=")
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
       else if(e.target.innerHTML=="C")
            {
                string="";
                document.querySelector('input').value=string;
            }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })

})
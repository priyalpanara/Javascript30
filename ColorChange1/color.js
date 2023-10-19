//Steps
//first consider all the elements you want to consider-here we have 2 things to be connected button and body
//now define what functioning you want
//now try somehow connect the two thing you want through some event which you want
//as here we want to connect button and body backgroung whenever someone clicks on button
//so button body and click

const button=document.querySelector('button')
const body=document.querySelector('body')
const colorChange=['red','green','blue','pink','yellow','orange','olive','aqua','violet','coral','yellowgreen']

// button.addEventListner('click',Bgchange);
button.addEventListener("click", Bgchange);

function Bgchange(){
    const changecolor=parseInt(Math.random()*colorChange.length)
    body.style.backgroundColor=colorChange[changecolor]

}

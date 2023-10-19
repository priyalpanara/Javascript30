const button= document.querySelector('button');
const BulbOn=document.querySelector('#on');
const BulbOff=document.querySelector('#off')

button.addEventListener('click',OnOffBulb)
function OnOffBulb(){
    if(BulbOff.style.display=="block"){
        BulbOff.style.display="none"
        BulbOn.style.display="block"
    }
    else{
        BulbOn.style.display="none"
        BulbOff.style.display="block"
    }

}

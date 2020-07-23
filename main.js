let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='media/cb.png'){
        myImage.setAttribute('src','media/manmohan-gupta.jpg');
    }else{
        myImage.setAttribute('src','media/cb.png');
    }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUsername(){
    let myName=prompt('Please enter your name.');
    if(!myName || myName===null){
        setUsername();
    }else{
        localStorage.setItem('Name',myName);
        myHeading.innerHTML=('VISION ,'+ myName);
    }
}
    if(!localStorage.getItem('Name')){
        setUsername();
    }else{
        let storedName=localStorage.getItem('Name');
        myHeading.innerHTML=('VISION ,' + storedName);
    } 
    
    myButton.onclick=function(){
        setUsername();
    }
   

   

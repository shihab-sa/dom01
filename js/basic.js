let finBtn = document.getElementsByClassName("container add1")
for(const allbtn of finBtn){
   allbtn.addEventListener("click",function(e){
      if(e.target.id == "add1"){
          document.getElementById("box1").style.backgroundColor="yellow"
      }
   })
}
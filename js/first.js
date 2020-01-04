
function searchMovie(term){
    let tempo = ``;
    
    for (let index = 0; index < allData.length; index++) {
        console.log(allData[index].title)
        if(allData[index].title.toLowerCase().includes(term.toLowerCase()))
        
         tempo+=` <div class="col-md-4 layer-parent  my-2 text-light">
         
          <img src="https://image.tmdb.org/t/p/w500`+allData[index].poster_path+`" class="img-fluid">
          <div class="layer  m-3 p-3">
          <h5>`+   allData[index].title      + `</h5>
          <p>`+  allData[index].overview   + `</p>
          <p>`+  allData[index].vote_average   + `</p>
         <p>`+  allData[index].release_date   + `</p>  
         </div>
         </div>
        `;
    }
    $("#rowData").html(tempo) ;
}




var httpReq = new XMLHttpRequest();
var allData = [];
getData();
function getData()
{
httpReq.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3Ps43-kiFh20kAJ_9hYgzEFgieVA0Qh-w0p2eilgdU9VSwoAy8SHqaziw" ) // set connection;
httpReq.send(); // send request

httpReq.onreadystatechange =function()
{

    if(httpReq.readyState == 4 && httpReq.status == 200 ) // et2kd en klo kwys
    {
        allData =   JSON.parse( httpReq.response).results // y4il ely rag3;
       //console.log(allData);
       displayData();

    }      
}
}
function displayData() {
    let temp = ``;

    for (var i = 0; i < allData.length; i++) {
        temp += `
      
       
          <div class="col-md-4 layer-parent my-2  text-light">
        
          <img src="https://image.tmdb.org/t/p/w500`+allData[i].poster_path+`" class="img-fluid ">
          <div class="layer m-3 p-3">
          <h5>`+   allData[i].title      + `</h5>
          <p>`+  allData[i].overview   + `</p>
          <p>`+  allData[i].vote_average   + `</p>
         <p>`+  allData[i].release_date   + `</p>  
         </div>
         
         </div>
        `;
    }

  $("#rowData").html(temp) 
}

/*
*---------------------------------------------------------------------------------------------------------------------------------------------
 */

var menuWidth=$(".nav-tab-menu").outerWidth(true); //width of el black area 


  $(".strip").css("left","-"+menuWidth+"px");
  
 let count=0;
 
  $(".strip-toggel-menu").click(function(){
    console.log(menuWidth);
      count++;
    if(count%2==0){ //show
        $(".strip").css("left",0)
       
        $(".strip-toggel-menu").html(` <i class="fas fa-window-close fa-2x"></i>`)
    }
    else{ //hide
        $(".strip").css("left","-"+menuWidth+"px")
        $(".strip-toggel-menu ").html(` <i class="fa fa-align-justify fa-2x"></i>`)
    }
    
     

//    if($(this).css("left")> "10px"){
//        $(".nav-tab-menu ").hide(1000);
//        $(".strip").css("width","30px")
   
//    }
   
//    if($(this).css("left")== "10px"){
//     $(".nav-tab-menu ").show(1000);
//     $(".strip").css("width","20%")
    
//    }
  })

//   strip-header-nav=> left 0
//   nav-tab-menu=>hide

/*
*---------------------------------------------------------------------------------------------------------------------------------------------
 */
$("#name").blur(function(){
    var nameRegex = /^[a-z0-9_-]{3,20}$/;
   var  name=document.getElementById("name").value;
   console.log(name)
    var validfirstUsername = name.match(nameRegex);
    
    if(validfirstUsername == null){
       $("#namealert").show(200);
        
    }
    else{
        $("#namealert").hide(200);
    }
 })

 
 $("#email").blur(function(){
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   var  email=document.getElementById("email").value;
   console.log(email)
    var validfirstemail = email.match(emailRegex);
    
    if(validfirstemail == null){
       $("#emailalert").show(200);
        
    }
    else{
        $("#emailalert").hide(200);
    }
 })
 
 
 $("#phone").blur(function(){
    var phoneRegex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
   var  phone=document.getElementById("phone").value;
   console.log(phone)
    var validfirstphone = phone.match(phoneRegex);
    
    if(validfirstphone == null){
       $("#phonealert").show(200);
        
    }
    else{
        $("#phonealert").hide(200);
    }
 })
 $("#age").blur(function(){
    var ageRegex =  /([0-9][1-9])/;
   var  age=document.getElementById("age").value;
   console.log(phone)
    var validfirstage = age.match(ageRegex);
    
    if(validfirstage == null){
       $("#agealert").show(200);
        
    }
    else{
        $("#agealert").hide(200);
    }
 })
 $("#password").blur(function(){
    var passwordRegex =   /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/;
   var  password=document.getElementById("password").value;
   console.log(phone)
    var validfirstpassword = password.match(passwordRegex);
    
    if(validfirstpassword== null){
       $("#passwordalert").show(200);
        
    }
    else{
        $("#passwordalert").hide(200);
    }
 })

 $("#rePassword").blur(function(){
    var  repassword=document.getElementById("rePassword").value;
    var  passwordx=document.getElementById("password").value;
    console.log("pass="+passwordx)
    console.log("repass="+repassword)
    if(repassword !== passwordx){
        $("#repasswordalert").show(200);
         
     }
     else{
         $("#repasswordalert").hide(200);
     }


 })

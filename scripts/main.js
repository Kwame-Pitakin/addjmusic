// hamburger
var hamburger = document.querySelector(".hamb");
var navlist =document.querySelector(".nav-list");

hamburger.addEventListener("click", function () { 
  this.classList.toggle("click");
  navlist.classList.toggle("open");
 });

 navlist.addEventListener("click", function () { 
   navlist.classList.remove("open");
   hamburger.classList.remove("click");
 
 });


// sticky header
 const header = document.querySelector("header");
 window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
 });







// active menu class on nav




// expand and close gigs images
   var previewBox = document.getElementById("previewBox");
   var fullImg = document.getElementById("fullImg");
  
  const gallery = document.querySelectorAll(".gigs-gallary .image")
  const closePreview = document.querySelector(".close")

  window.onload = ()=>{
   for (let i = 0; i < gallery.length; i++) {
      let newIndex = i 
      
      gallery[i].onclick = () =>{
         console.log(i);


         function preview(){
             let selectedImageUrl = gallery[newIndex].src;//getting user clicked image url
             fullImg.src = selectedImageUrl; 
         } 
         preview();

         // previous and next btns
         const prevBtn = document.querySelector(".previous i");
         const nextBtn = document.querySelector(".next i");
         const lastImage = gallery.length - 1;
         
         // display None of first and last image
         if (newIndex == 0) {
            prevBtn.style.display = "none";
         }
         if (newIndex >= lastImage) {
            nextBtn.style.display = "none";
         }
  
         // buttons display on click
         prevBtn.onclick = ()=>{
            newIndex--;
            if (newIndex == 0) {
               preview();
               prevBtn.style.display = "none";

            }
            else{
               preview();
               nextBtn.style.display = "block";

            }
         }
         nextBtn.onclick = ()=>{
            newIndex++;
            if (newIndex >= lastImage) {
               preview();
               nextBtn.style.display = "none";

            }
            else if (newIndex < lastImage){
               preview();
               prevBtn.style.display = "block";

            }
         }

         previewBox.style.display = "flex";

         closePreview.onclick = ()=>{
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
            previewBox.style.display = "none";
         }
      }
      
   }



//   YKTFV JS

var check1 = document.getElementById('yktfv-radio1');
var check2 = document.getElementById('yktfv-radio2');
var check3 = document.getElementById('yktfv-radio3');


   check1.onclick=()=>{
            // swapping Text
            document.getElementById('yktfvText1').style.display = 'block'; 
            document.getElementById('yktfvText2').style.display = 'none'; 
      
            // swapping image
            document.getElementById('yktfvImage1').style.display = 'block'; 
            document.getElementById('yktfvImage2').style.display = 'none'; 

   }
   check2.onclick=()=>{
      // swapping Text
      document.getElementById('yktfvText1').style.display = 'none'; 
      document.getElementById('yktfvText2').style.display = 'block'; 

      // swapping image
      document.getElementById('yktfvImage1').style.display = 'none'; 
      document.getElementById('yktfvImage2').style.display = 'block'; 
   
   };



  }






  






 









//   $(function () {
//    $('[data-toggle="tooltip"]').tooltip()
//  })
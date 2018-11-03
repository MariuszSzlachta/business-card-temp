var clipped = document.getElementById('clipped');

document.addEventListener("DOMContentLoaded", function(event) {
  if (navigator.userAgent.match(/Trident\/7.0;/) !== null || navigator.userAgent.match(/Edge/) !== null){
    clipped.style.display = 'block';
    console.log('true');
  } else {
    clipped.style.display = 'none';
  }
});


window.addEventListener('resize', function(){
  console.log('resize')
  if (window.matchMedia("(max-width: 480px)").matches) {
    clipped.style.display = 'none';
    
  }
})
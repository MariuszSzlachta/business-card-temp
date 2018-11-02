const listToggler = document.querySelector('.list-toggler');
const skillsList = document.querySelector('.skills-list');

listToggler.addEventListener('click', function(){
  if (skillsList.classList.contains('skills-list--expanded')){
    skillsList.classList.remove('skills-list--expanded')
  } else {
    skillsList.classList.add('skills-list--expanded');
  }
})
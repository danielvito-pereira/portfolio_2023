const bloco = document.querySelectorAll('.bloco');
const hh2   = document.querySelectorAll('.hh2');

// Quando clicar no hh2 
    //tirar a classe ativo de todos os blocos 
    //Adicionar a classe ativo ao bloco 

hh2.forEach((cadaH2, i) => {
  hh2[i].addEventListener('click',()=>{
    bloco[i].classList.toggle('ativo') 
  })
})    


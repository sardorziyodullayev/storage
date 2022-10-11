let elInput = document.querySelector('.input');
let elBtn = document.querySelector('.btn-str');
let elDelBtn = document.querySelector('.btn-del');
let elText = document.querySelector('.text')
 
let arrStr = []

elBtn.addEventListener('click', () => {
   arrStr.push(elInput.value)
   localStorage.setItem("Malumotlar:", JSON.stringify(arrStr))
   elText.innerHTML = arrStr;
})

elDelBtn.addEventListener('click' , () =>{
   localStorage.clear();
   elInput.value = ''
   elText.innerText = ''
})
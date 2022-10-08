let count = 0;

const values = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
     
        if(style.contains('decrease')){
         count--;
        }else if(style.contains('increase')){
         count++;
        }else{
         count = 0;
        }
     
        if(count < 0){
        values.style.color = "green";
        }
     
        if(count > 0){
         values.style.color = "red";
        }
        if(count === 0) {     
         values.style.color = "#222";
        }

        values.textContent = count
      
     });
}); 

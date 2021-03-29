// set initial value
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//function for each btn
btns.forEach(function (btn) {
   btn.addEventListener('click', function(e){
      const styles = e.currentTarget.classList;  
      if(styles.contains('btn-decrease'))
      {
          count--;
      }else if(styles.contains('btn-incresae'))
      {
          count++;
      }else
      {
          count = 0;
      } 

      if(count > 0 )
      {
          value.style.color = "green";
      }
      if(count < 0)
      {
          value.style.color = "red";
      }
      if(count === 0)
      {
          value.style.color = "black";
      }
      value.textContent = count;
   });
});
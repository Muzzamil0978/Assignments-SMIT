//  NavBar
const toggleBtn = document.querySelector("#toggle-btn")
toggleBtn.addEventListener("click", () => {
   // document.querySelector('#toggle-btn #btn-ball').classList.toggle('dark-ball')
   document.body.classList.toggle('darkTheme')

   document.body.querySelector('nav').classList.toggle('darkTheme')

   document.body.querySelectorAll('nav li').forEach((li) => {

      li.classList.toggle('darkTheme')

   })

   document.body.querySelectorAll('nav li p').forEach((p) => {

      p.classList.toggle('darkP')

   })
   document.querySelector('nav div #search').style.backgroundColor ='black' 
  document.querySelector('nav div #search').style.color ='white'
   document.querySelector('nav div #search').style.setProperty('--hover-border-color','white')

   if (document.querySelector('#toggle-btn #btn-ball').classList.toggle('dark-ball')) {

      document.body.querySelector('nav li').style.border = "white"

      toggleBtn.style.border = '1px solid white'

      document.querySelectorAll('nav li div').forEach((div) => {

         div.style.backgroundColor = 'white'

      })
      document.querySelectorAll('nav li').forEach((li) => {

         li.style.border = "1px solid #fff"

      })
      document.querySelectorAll('nav li p').forEach((p) => {

         p.style.setProperty('--hover-color', 'black')

      })


   }
   else {

      toggleBtn.style.border = '1px solid black'

   document.querySelector('nav div #search').style.color ='black'

      document.querySelectorAll('nav li div').forEach((div) => {

         div.style.backgroundColor = 'black'

      })
      document.querySelectorAll('nav li').forEach((li) => {

         li.style.border = "1px solid #000"

      })
      document.querySelectorAll('nav li p').forEach((p) => {

         p.style.setProperty('--hover-color', 'white')

      })
         document.querySelector('nav div #search').style.backgroundColor ='white'
   document.querySelector('nav div #search').style.setProperty('--hover-border-color','black')
   }

});
   document.querySelector('nav div #search').style.color ='black'
   document.querySelector('nav div #search').style.backgroundColor ='white'
   document.querySelector('nav div #search').style.setProperty('--hover-border-color','black')
document.querySelectorAll('nav li p').forEach((p) => {

   p.style.setProperty('--hover-color', 'white')

})

localStorage.setItem('Theme','Dark')

//Nav Collapse Stystem




















































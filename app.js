//  NavBar
const toggleBtn = document.querySelector("#toggle-btn")
toggleBtn.addEventListener("click", () => {
   // document.querySelector('#toggle-btn #btn-ball').classList.toggle('dark-ball')
   // document.body.classList.toggle('darkTheme')

   // document.body.querySelector('nav').classList.toggle('darkTheme')

   // document.body.querySelectorAll('nav li').forEach((li) => {

   //    li.classList.toggle('darkTheme')

   // })

   // document.body.querySelectorAll('nav li p').forEach((p) => {

   //    p.classList.toggle('darkP')

   // })
   // document.querySelector('nav div #search').style.backgroundColor = 'black'
   // document.querySelector('nav div #search').style.color = 'white'
   // document.querySelector('nav div #search').style.setProperty('--hover-border-color', 'white')

   if (document.querySelector('#toggle-btn #btn-ball').classList.toggle('dark-ball')) {
      localStorage.setItem('Theme', 'Dark')

     document.body.className = 'darkTheme'

   document.querySelector('#toggle-btn #btn-ball').className = 'dark-ball'

   document.body.querySelector('nav').className = 'darkTheme'

   document.body.querySelectorAll('nav li').forEach((li) => {

      li.className = 'darkTheme'

   })

   document.body.querySelectorAll('nav li p').forEach((p) => {

      p.className = 'darkP'

   })
   document.querySelector('nav div #search').style.backgroundColor = 'black'
   document.querySelector('nav div #search').style.color = 'white'
   document.querySelector('nav div #search').style.setProperty('--hover-border-color', 'white')

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

      localStorage.setItem('Theme', 'Light')

 document.body.className = 'lightTheme'

   document.querySelector('#toggle-btn #btn-ball').className = 'light-ball'

   document.body.querySelector('nav').className = 'lightTheme'

   document.body.querySelectorAll('nav li').forEach((li) => {

      li.className = 'lightTheme'

   })

   document.body.querySelectorAll('nav li p').forEach((p) => {

      p.className = 'lightP'

   })
   document.querySelector('nav div #search').style.backgroundColor = 'white'
   document.querySelector('nav div #search').style.color = 'black'
   document.querySelector('nav div #search').style.setProperty('--hover-border-color', 'black')

   document.body.querySelector('nav li').style.border = "black"

   toggleBtn.style.border = '1px solid black'

   document.querySelectorAll('nav li div').forEach((div) => {

      div.style.backgroundColor = 'black'

   })
   document.querySelectorAll('nav li').forEach((li) => {

      li.style.border = "1px solid #000000ff"

   })
   document.querySelectorAll('nav li p').forEach((p) => {

      p.style.setProperty('--hover-color', 'white')

   })

   }

});
document.querySelector('nav div #search').style.color = 'black'
document.querySelector('nav div #search').style.backgroundColor = 'white'
document.querySelector('nav div #search').style.setProperty('--hover-border-color', 'black')
document.querySelector('#search1').style.color = 'black'
document.querySelector('#search1').style.backgroundColor = 'white'
document.querySelector('#search1').style.setProperty('--hover-border-color', 'black')
document.querySelectorAll('nav li p').forEach((p) => {

   p.style.setProperty('--hover-color', 'white')

})

if (localStorage.getItem('Theme') == 'Dark') {

   document.body.className = 'darkTheme'

   document.querySelector('#toggle-btn #btn-ball').className = 'dark-ball'

   document.body.querySelector('nav').className = 'darkTheme'

   document.body.querySelectorAll('nav li').forEach((li) => {

      li.className = 'darkTheme'

   })

   document.body.querySelectorAll('nav li p').forEach((p) => {

      p.className = 'darkP'

   })
   document.querySelector('nav div #search').style.backgroundColor = 'black'
   document.querySelector('nav div #search').style.color = 'white'
   document.querySelector('nav div #search').style.setProperty('--hover-border-color', 'white')

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
else if (localStorage.getItem('Theme') == 'Light') {
   document.body.className = 'lightTheme'

   document.querySelector('#toggle-btn #btn-ball').className = 'light-ball'

   document.body.querySelector('nav').className = 'lightTheme'

   document.body.querySelectorAll('nav li').forEach((li) => {

      li.className = 'lightTheme'

   })

   document.body.querySelectorAll('nav li p').forEach((p) => {

      p.className = 'lightP'

   })
   document.querySelector('nav div #search').style.backgroundColor = 'white'
   document.querySelector('nav div #search').style.color = 'black'
   document.querySelector('nav div #search').style.setProperty('--hover-border-color', 'black')

   document.body.querySelector('nav li').style.border = "black"

   toggleBtn.style.border = '1px solid black'

   document.querySelectorAll('nav li div').forEach((div) => {

      div.style.backgroundColor = 'black'

   })
   document.querySelectorAll('nav li').forEach((li) => {

      li.style.border = "1px solid #000000ff"

   })
   document.querySelectorAll('nav li p').forEach((p) => {

      p.style.setProperty('--hover-color', 'white')

   })


}

//Nav Collapse Stystem

const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
   if(document.querySelector('#verticalNav').style.left == '-100%' ){
      document.querySelector('#verticalNav').style.left = '0%'
           document.querySelector('#verticalNav').style.display = 'flex' 
   }
   else{
      document.querySelector('#verticalNav').style.left = '-100%'
   }
})

















































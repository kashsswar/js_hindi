# Projects related to DOM

# Digital Clock
## project link

[Click here](https://stackblitz.com/~/github.com/kashsswar/js_hindi?file=projects/set3)

# Solution Code

## project 2


``` javascript code

// const clock = document.getElementById('clock')
const clock = document.querySelector('#clock')

setInterval(()=>{
  const date = new Date()
  // console.log(date)
  clock.innerHTML = date.toLocaleTimeString()
},1000)


```
# Projects related to DOM

## project link

[Click here](https://stackblitz.com/~/github.com/kashsswar/js_hindi?file=projects/set1)

# Solution Code

## project 1


``` javascript code

const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')

console.log(buttons)
console.log(body)

buttons.forEach((button)=>{
  button.addEventListener('click',((e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id =='white'){
      body.style.backgroundColor=='white'
    }
    else if(e.target.id =='blue'){
      body.style.backgroundColor=='blue'
    }
    else if(e.target.id =='yellow'){
      body.style.backgroundColor=='yellow'
    }
    else{
        body.style.backgroundColor=='grey'
    }
  }))
})
```
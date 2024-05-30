# Projects related to DOM

# BMI Calculator
## project link

[Click here](https://stackblitz.com/~/github.com/kashsswar/js_hindi?file=projects/set2)

# Solution Code

## project 2


``` javascript code

const form = document.querySelector('form')


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)

  const weight = parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')
  console.log(e)
  console.log(e.target)

  if(height === '' || height <=0 || isNaN(height)){
    results.innerHTML =`Please enter valid height ${height}`
  }
  else if(weight === '' || weight <=0 || isNaN(weight)){
    results.innerHTML =`Please enter valid weight ${weight}`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }

})
```
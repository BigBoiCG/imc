const taille = document.querySelector('#taille')
const poids = document.querySelector('#poids')
const submit = document.querySelector('#submit')

form.addEventListener('submit', function(e){
    e.preventDefault()
    removeResult()
    // console.log(poids.value);
    // console.log(taille.value);
    displayResult(imc(poids.value, taille.value), submit.parentElement);
})
 
function imc(poids, taille){
    let result = 0
    let tailleM = taille/100
    result = poids/(tailleM*tailleM)
    return Math.round(result)
}

function displayResult(result, place){
    const span = document.createElement('span')
        span.innerHTML = result
        span.classList.add('result')
        place.append(span)
}

function removeResult(){
    const results = document.querySelectorAll('.result')
    results.forEach(result => {
        result.remove()
    });
}

// to do :
// - checker si le texte entré est bien des nombres
// - transformer les virgules en points 
// - faire une fonction qui checke tout ça
// - afficher un message qui dit "votre IMC est blablabla"

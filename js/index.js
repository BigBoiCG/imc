const formImc = document.forms.formImc
// const submit = formImc.submit

formImc.addEventListener('submit', function(e){
    e.preventDefault()
    const taille = formImc.taille
    const poids = formImc.poids
    // console.log(poids.value);
    // console.log(taille.value);
    const endResult = imc(poids.value, taille.value);
    createDiv(endResult)
})

console.log(document.querySelectorAll('.result'));
 
function imc(poids, taille){
    let tailleM = taille/100
    let result = poids/(Math.pow(tailleM, 2))
    return Math.round(result)
}

function removeResult(){
    const results = document.querySelectorAll('.result')
    results.forEach(result => {
        result.remove()
    });
}

function createDiv(text){
    const div = document.createElement('div')
    div.innerHTML = text
    div.classList.add('result')
    formImc.insertAdjacentHTML("afterend", div);
    console.log(div);

}

// function createDiv(elem, elemParent,text, className ){
//     const div = document.createElement(elem)
//     div.innerHTML = text
//     div.classList.add(className)
//     elemParent.insertAdjacentHTML("afterend", text);

// }


// to do :
// - checker comment accéder au HTMLDivElement pour pouvoir faire le RemoveError
// - Faire la fonction createDiv générale et paramétrable, qui nous servira sur la création des messages d'erreur
// - afficher message d'erreur si pas bonnes données rentrées
// - checker si le texte entré est bien des nombres
// - transformer les virgules en points 
// - faire une fonction qui checke tout ça
// - afficher un message qui dit "votre IMC est blablabla"

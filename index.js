let nameCat = "first cat"
var elem = document.getElementById('my-elem');
let compte = 0
const nameResult1 = document.getElementById('name')
const clickResult1 = document.getElementById('numerofclick')
nameResult1.innerHTML = nameCat
elem.addEventListener('click',(e)=>{
    compte++
    clickResult1.innerHTML = compte
},false)

let name1 = "second cat"
let compte1 = 0
const nameResult = document.getElementById('name1')
nameResult.innerHTML = name1
const clickResult = document.getElementById('numerofclick1')
var elem1 = document.getElementById('my-elem1');
elem1.addEventListener('click',()=>{
    compte1++
    console.log(compte1);
    clickResult.innerHTML = compte1
},false)

const App = ()=>{
    return [
        <p>Bonjour</p>,
        <h1>Hello</h1>
    ]
}

const AppTest = ()=>{
    return (
       <>
        <p>Bonjour</p>
        <h1>Hello</h1>
       </>
    )
}
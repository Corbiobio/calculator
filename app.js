
const h9 = document.getElementById("h9")
const h8 = document.getElementById("h8")
const h7 = document.getElementById("h7")
const h6 = document.getElementById("h6")
const h5 = document.getElementById("h5")
const h4 = document.getElementById("h4")
const h3 = document.getElementById("h3")
const h2 = document.getElementById("h2")
const h1 = document.getElementById("h1")
const h0 = document.getElementById("h0")
const o = document.getElementById("o")
const egal = document.getElementById("egal")
const point = document.getElementById("point")
const plus = document.getElementById("plus")
const fois = document.getElementById("fois")
const moin  = document.getElementById("moin")
const divise  = document.getElementById("divise")
const resultat = document.getElementById("resultat")

h9.addEventListener("click",function(){affiche(9)})
h8.addEventListener("click",function(){affiche(8)})
h7.addEventListener("click",function(){affiche(7)})
h6.addEventListener("click",function(){affiche(6)})
h5.addEventListener("click",function(){affiche(5)})
h4.addEventListener("click",function(){affiche(4)})
h3.addEventListener("click",function(){affiche(3)})
h2.addEventListener("click",function(){affiche(2)})
h1.addEventListener("click",function(){affiche(1)})
h0.addEventListener("click",function(){affiche(0)})

fois.addEventListener("click",function(){appuier("*")})
divise.addEventListener("click",function(){ appuier("/")})
moin.addEventListener("click",function(){appuier("-")})
plus.addEventListener("click",function(){appuier("+")})

egal.addEventListener("click",function(){fini()})
point.addEventListener("click",function(){appuier(".")})

o.addEventListener("click",function(){
    resultat.textContent = ""
})

function fini(){
    resultat.textContent = eval(resultat.textContent)
}

let oui = true
function affiche (a){
    resultat.textContent += a
    oui = true
}

function appuier(a){
    if(oui === true){
        resultat.textContent += a
        oui = false
    }else{
        oui = false
    }
}

const exContainer = document.getElementById('exContainer')
var remainingAmt = document.getElementById('mainAmt')

remainingAmt.innerHTML = 999999

function calculateExp(amt){
    const a = Number(amt)
    var mainAmt = remainingAmt.innerHTML
    mainAmt -= a
    remainingAmt.innerHTML = mainAmt
}

function calculateInc(amt){
    const a = Number(amt)
    var mainAmt = Number(remainingAmt.innerHTML)

    mainAmt += a
    remainingAmt.innerHTML = mainAmt
}

function addExpense(){
    const head = document.getElementById('head')
    const amt = document.getElementById('amt')

    const exDiv = document.createElement('div')
    
    const exHead = document.createElement('h1')
    exHead.innerHTML = head.value

    const exAmt = document.createElement('p')
    exAmt.innerHTML = "- Rs."+amt.value

    exAmt.classList.add('red')

    exDiv.classList.add('expense')
    
    exDiv.appendChild(exHead)
    exDiv.appendChild(exAmt)
    exContainer.appendChild(exDiv)

    calculateExp(amt.value)
}

function addIncome(){
    const head = document.getElementById('Inhead')
    const amt = document.getElementById('Inamt')

    const exDiv = document.createElement('div')
    
    const exHead = document.createElement('h1')
    exHead.innerHTML = head.value

    const exAmt = document.createElement('p')
    exAmt.classList.add('green')
    exAmt.innerHTML = "+ Rs."+amt.value


    exDiv.classList.add('income')
    
    exDiv.appendChild(exHead)
    exDiv.appendChild(exAmt)
    exContainer.appendChild(exDiv)

    calculateInc(amt.value)
}
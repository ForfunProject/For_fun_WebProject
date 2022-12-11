var count = 0
const foodtype = document.getElementById('food')
var ul = document.getElementById('OrderList')


function Order(){

    var m = foodtype.value
    var money = parseInt(m)
    count = count+money
    document.getElementById('tm').textContent="小記"+count+"元"

    const foodtext = document.getElementById('food')
    var text = foodtext.options[foodtext.selectedIndex].text 
    var li = document.createElement('li')
    li.innerHTML = text
    ul.appendChild(li)
    
}
function Clear(){
    count=0
    document.getElementById('tm').textContent="小記"+count+"元"
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
}
function PeopleCount(){
    var adult = parseInt(document.getElementById('Adult').value)  || 0
    var child = parseInt(document.getElementById('Child').value)  || 0
    var totalpeople = document.getElementById('TotalPeople')
    totalpeople.value = adult+child
}

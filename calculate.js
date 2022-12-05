var total = 0
const foodtype = document.getElementById('food')
var ul = document.getElementById('OrderList')

function Order(){

    var m = foodtype.value
    var money = parseInt(m)
    total = total+money
    document.getElementById('tm').textContent=total+"元"

    const foodtext = document.getElementById('food')
    var text = foodtext.options[foodtext.selectedIndex].text 
    var li = document.createElement('li')
    li.innerHTML = text
    ul.appendChild(li)
    
}

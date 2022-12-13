var count = 0
const foodtype = document.getElementById('food')
var ul = document.getElementById('OrderList')


function Order(){

    var m = foodtype.value
    var money = parseInt(m)
    count = count+money
    document.getElementById('tm').textContent="小記"+count+"元"
    document.getElementById('count').value = count

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
    document.getElementById('count').value = count
}
function PeopleCount(){
    var adult = parseInt(document.getElementById('Adult').value)  || 0
    var child = parseInt(document.getElementById('Child').value)  || 0
    var totalpeople = document.getElementById('TotalPeople')
    totalpeople.value = adult+child
}
function Cal(){
    var adult = parseInt(document.getElementById('Adult').value)  || 0
    var child = parseInt(document.getElementById('Child').value)  || 0
    var sc = (document.getElementById('ServiceCharge'))
    var scn = 0
    if((adult+child)>4){
        var sc = (document.getElementById('ServiceCharge'))
        scn = Math.ceil(count*0.1 ) 
        sc.value = scn

    }
    var average = document.getElementById('Average')
    parseInt(count)
    parseInt(adult)
    average.value = Math.ceil((count+scn)/adult) 
    if(Math.ceil((count+scn)/adult)<200){
        var charge = document.getElementById('Charge')
    
        var c = Math.ceil((150-((count+scn)/adult))*adult)
        charge.value = c
    }else{
        var c = 0
    }
    
    var total = document.getElementById('total')
    total.value = count + scn + c



}

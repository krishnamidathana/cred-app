const nameinp = document.getElementById('nameinp');
const ageinp = document.getElementById('ageinp');
const emailinp = document.getElementById('emailinp');
const addbtn = document.querySelector('.addbtn');
const thead =document.querySelector('thead')
const tbody =document.querySelector('tbody')




addbtn.addEventListener('click',()=>{
    if(nameinp.value ==''|| ageinp.value=='' ||emailinp.value==''){
    alert('Please Fillup all feilds')
    }
    else{
const tr =document.createElement('tr')
const td1 =document.createElement('td')
const td2 =document.createElement('td')
const td3 =document.createElement('td')
const td4 =document.createElement('td')

const namedata =document.createElement('input')
namedata.classList.add('nclass')
namedata.type = 'text'
namedata.value = nameinp.value
namedata.setAttribute('readonly','readonly')

const agedata =document.createElement('input')
agedata.classList.add('aclass')
agedata.type = 'number'
agedata.value = ageinp.value
agedata.setAttribute('readonly','readonly')


const emaildata =document.createElement('input')
emaildata.classList.add('eclass')
emaildata.type = 'email'
emaildata.value = emailinp.value
emaildata.setAttribute('readonly','readonly')

const edits =document.createElement('button')
edits.classList.add('edits')
edits.innerText = 'EDIT'

const deletes =document.createElement('button') ;
deletes.classList.add('deletes') ;
deletes.innerText = 'DELETE' ;



nameinp.value = ''; ageinp.value ='' ;emailinp.value ='';


tbody.append(tr)
tr.appendChild(td1)
td1.appendChild(namedata)

tr.appendChild(td2)
td2.appendChild(agedata)

tr.appendChild(td3)
td3.appendChild(emaildata)

tr.appendChild(td4)
td4.appendChild(edits)
td4.appendChild(deletes)


edits.addEventListener('click',()=>{
   
    if(edits.innerText == 'EDIT'){
     
        namedata.style.backgroundColor ='white';
        agedata.style.backgroundColor ='white';
        emaildata.style.backgroundColor ='white';

        namedata.removeAttribute('readonly')
        agedata.removeAttribute('readonly')
        emaildata.removeAttribute('readonly')
        edits.innerText ='SAVE';
        edits.style.backgroundColor =' green' ;
      
        
    }
    else{
        
        edits.innerText ='EDIT';

        namedata.style.backgroundColor ='yellow';
        agedata.style.backgroundColor ='yellow';
        emaildata.style.backgroundColor ='yellow';

        namedata.setAttribute('readonly','readonly')
        agedata.setAttribute('readonly','readonly')
        emaildata.setAttribute('readonly','readonly')
        edits.style.backgroundColor =' rgb(23, 26, 209)'
    }
    
})

deletes.addEventListener('click',()=>{
   deletes.parentNode.parentNode.remove();
})
}  
})
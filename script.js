
function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const num=event.target.phone.value;
    const userDetails ={
        username:username,
        email:email,
        phone:num
    }
    localStorage.setItem(userDetails.email,JSON.stringify(userDetails))
    showUserOnScreen(userDetails)
}
function showUserOnScreen(userDetails){
    const parentList=document.getElementById('listItem')
    const newli=document.createElement('li')
    newli.textContent=`${userDetails.username},${userDetails.email},${userDetails.phone}`;

    const deletebtn=document.createElement('button')
    deletebtn.textContent='del';

    deletebtn.addEventListener('click',function(){
        localStorage.removeItem(userDetails.email)
        newli.remove();
    });
 
    const editbtn=document.createElement('input');
    editbtn.type='button'; 
    editbtn.onclick = () => { 
        localStorage.removeItem(userDetails.email);
        parentList.removeChild(newli);
        document.getElementById('username').value = userDetails.username; 
        document.getElementById('email').value = userDetails.email;
        document.getElementById('phone').value = userDetails.phone;
    };

    newli.appendChild(deletebtn);
    newli.appendChild(editbtn);
    parentList.appendChild(newli);
}

function option(){
    let reply = confirm("password is OK NOTE Cancel is wrong password,select one to take action");
    if( reply == true){
        return true;
    }
    else{
        document.write("OOh you press Cancel,sorry wrong password,this page has nothing in it");
        return false;
    }
}

function changeImg(){
    const button = document.getElementById('profile');
    button.src='images/p2.jpeg';
}
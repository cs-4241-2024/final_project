
window.onload = async function (){
    document.getElementById('login').addEventListener('click', async function(event){
        //Prevent default
        event.preventDefault();
    
        // Get username & password
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        //debug
        console.log(username);
        console.log(password);

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password})
        }).then(response => response.json())
    })
}
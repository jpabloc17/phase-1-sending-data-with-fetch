// Add your code here
function submitData(userName, userEmail){
    const updateUser = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch("http://localhost:3000/users", updateUser)
            .then(function (response){
                return response.json();
            })
            .then(function (object){
                console.log(object);
                const body = document.querySelector("body")
                const Id = object.id
                const h2 = document.createElement("h2")
                h2.append(Id)
                body.append(h2)
            })
            .catch(function(error){
                const errorMessage = error.message;
                const body  = document.querySelector("body")
                const h2 = document.createElement("h2")
                h2.append(errorMessage)
                body.append(h2)

            })
}
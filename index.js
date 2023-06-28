function submitData(name, email) {
        const formData = {
                name: "Steve",
                email: "steve@steve.com"
        } 

        const configObject = {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                },
                body: JSON.stringify(formData)
        }
        return fetch("http://localhost:3000/users", configObject)

        .then(res => res.json)
        .then(object => console.log(object))
        .catch(error => {
                alert("Bad things, have happened.")
                console.log(error)
        })
        
}
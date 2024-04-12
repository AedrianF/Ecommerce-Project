(() => {
    //----------------------------------------------------
    /**
     * Utility functions
    */
    //----------------------------------------------------

    const postData = async (url = '', data = {}) => {
        console.log("url", url)
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        return response.json(); // parses JSON response into native JavaScript objects
      }

      
     //----------------------------------------------------
    /**
     * Client-side RESTful APIs
     *  
     */
    //----------------------------------------------------

    const login = async (event) => {
        event.preventDefault()
        console.log("Inside Log in function")
        let email = document.querySelector('#emailLogin').value
        console.log(email)
        let password = document.querySelector('#passwordLogin').value
        const reply = await postData('/login', { email, password })
        if (reply.error) {
            // Will implement later
            console.log("An Error Occurred")
        }
        else if (reply.success) {
            console.log(reply)
            document.querySelector('#welcomeUser').innerHTML = `Welcome ${email}!`
            document.querySelector('#shoppingCart').innerHTML = `<a class="nav-link" href="#">
            <i class="fas fa-shopping-cart"></i>
            </a>`
        }
      }

    document.addEventListener("DOMContentLoaded", () =>{
        document.querySelector('#loginButton').onclick = login
    })





})()
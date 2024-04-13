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

    const signup = async (event) => {
        // prevent refreshing the page
        //event.preventDefault()
        let email = document.querySelector('#emailSignup').value
        let password = document.querySelector('#passwordSignup').value
        let confirm = document.querySelector('#confirmSignup').value
        console.log(email, password, confirm)
        if(email.length != 0){
          if(password.length != 0){
            if (password == confirm) {
                const reply = await postData('/signup', { email, password })
                if (reply.error) {
                  // Will add later to indicate an error accord with postData?
                    console.log(reply.error)
                }
                else if (reply.success) {
                  // Will add later to indicate you have succesfully signup?
                    console.log(reply)
                }
            }
            else {
              console.log("Passwords do not match. Re-enter your password")
              /*
                registerWarning.innerHTML = 'Passwords do not match. Re-enter your password'
                show(registerWarning) */
            }
          }
          else{
            console.log("Please Input a password")
          }
        }
        else{
          console.log("Please Input an Email")
        }
       
      }
    document.addEventListener("DOMContentLoaded", () =>{
        document.querySelector('#signupButton').onclick = signup
    })

})()
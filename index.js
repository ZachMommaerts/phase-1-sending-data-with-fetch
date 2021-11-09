const submitData = (userName, userEmail) => {
    //function to add json object ID to the dom
    const addToDom = (json) => {
        const body = document.querySelector('body');
        body.append(json);
    }

    //Info sent to post
    const userInfo = {
        name: userName,
        email: userEmail
    };

    // JSON POST object
    const sentObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(userInfo)
    };

    //POST request to update databases and add json ID to the DOM
    return fetch('http://localhost:3000/users', sentObj)
    .then(res => res.json())
    .then(json => addToDom(json.id))
    .catch((error) => {
        addToDom(error);
    });
}




function fetchAndDisplay(url){
    return fetch (url)
    .then(response =>{
        if(!response.ok) {
            throw new Error('Något gick fel - ' + response.status);
        }
    return response.json();
    })
    .then(data => {
        console.log('random user hämtad:', data);
    return data;
    })
    .catch(error => {
    console.error('Fetch-fel', error);
    })
    }
    function showData(){
        fetchAndDisplay('https://randomuser.me/api/')
    .then(apiResponse =>{
      
    let personPicture = document.getElementById("image")   
      personPicture.setAttribute("src",apiResponse.results[0].picture.large)
    
    let personInfo = document.getElementById("gender")
    personInfo.textContent = apiResponse.results[0].gender;
    
    let personInfoo = document.getElementById("namefirst")
    personInfoo.textContent = apiResponse.results[0].name.first;
    
    let personInfooo = document.getElementById("namelast")
    personInfooo.textContent = apiResponse.results[0].name.last;
    
    let phersonInfoooo = document.getElementById("email")
    phersonInfoooo.textContent = apiResponse.results[0].email;
    
    let personInfooooo = document.getElementById("phone")
    personInfooooo.textContent = apiResponse.results[0].phone;
    })
    .catch(error => {
        console.error(error);
    });
    }
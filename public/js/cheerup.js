
fetch('https://source.unsplash.com/random/?dog,dog')
.then( (response) => {
    return response;
}).then( (myDog) => {
    var element = document.querySelector('img');
    element.src = myDog.url;
});





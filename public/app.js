const getDataFromFirestore = (path) => {
    let collection = db.collection("heros").doc(path);

    collection.get()
    .then((doc) => {
        if(doc.exists){
            processData(doc.data());
        } else{
            location.href = '/';
        }
    })
    .catch(err => {
        alert(err);
    })
}

let path = location.pathname.split('/').pop();
getDataFromFirestore(path);

const processData = (data) => {
    let loading = document.querySelector('.loading');
    let imgEle = document.querySelector('.hero-img');
    let nameEle = document.querySelector('.name');
    let aboutEle = document.querySelector('.about');
    let indexEle = document.querySelector('.index');

    loading.style.display = 'none';
    imgEle.src = `img/${data.image}`;

    let name = data.name.split(' ');

    nameEle.innerHTML = `<span style="color: #${data.color}">${name[0]}</span> ${name[1] || ' '}`;

    aboutEle.innerHTML = data.about;
    indexEle.innerHTML = data.id;
}
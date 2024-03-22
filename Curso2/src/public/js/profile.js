const form = document.getElementById('crearProd');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch('/api/products', {
        method: 'POST',
        body: data,
    });

    const result = await response.json();
    console.log(result);
    console.log(result);

    // const imageFile = data.get('images')
    // const reader = new FileReader();
    // reader.readAsDataURL(imageFile);

    // reader.onload = function () {
    //     // Guardamos el contenido de la imagen en localStorage
    //     localStorage.setItem(result.payload.title, result.payload.images[0]);
    // };


})

const formu = document.getElementById('eliminarProd')

formu.addEventListener('submit', async e => {
    e.preventDefault()
    const data = new FormData(formu)
    const obj = {}
    data.forEach((value, key) => obj[key] = value)
    const response = await fetch('/api/products', {
        method: 'DELETE',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const result = await response.json()
    console.log(result)
}
)
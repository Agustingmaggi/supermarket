const form = document.getElementById('registerForm')

form.addEventListener('submit', async e => {
    e.preventDefault()
    console.log(form)
    const data = new FormData(form)
    console.log(data)
    const obj = {}
    data.forEach((value, key) => obj[key] = value)
    const response = await fetch('/api/sessions/register', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const result = await response.json()
    console.log(result)
    if (response.status === 200) {
        // window.location.replace('login')
    }
})
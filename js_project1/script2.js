document.getElementById('phonenum').
addEventListener('input', (event) => {
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g
    const input = document.getElementById('phonenum')
    const format = document.querySelector('.phoneformat')
    const phone = input.value
    const found = regex.test(phone)
    if (!found && phone.length) {
        input.classList.add('invalid')
        format.classList.add('block')
    } else {
        input.classList.remove('invalid')
        format.classList.remove('block')
    }
})

document.getElementById('phoneform').addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.getElementById('phoneform')
    const regex = /[()-. ]/g
    const savedphonenum = input.value.replaceall(regex, '')
    console.log(savedphonenum)
})


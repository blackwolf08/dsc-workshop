let avatar = document.getElementById("avatar")
let popover = document.getElementById("popover")

avatar.addEventListener("click", (e)=>{
    let popover_style = window.getComputedStyle(popover).display
    console.log(popover_style)
    if(popover_style == "none"){
        popover.style.display = "flex"
    }
    else{
        popover.style.display = "none"
        console.log('object')
    }
})

let dark = document.querySelector('input[name=theme]');
let logo = document.getElementById("logo")
dark.addEventListener('change', function() {
    console.log(this.checked)
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        // logo.src = "./assets/logo-dark.png"
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        // logo.src = "./assets/logo.png"
    }
})
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
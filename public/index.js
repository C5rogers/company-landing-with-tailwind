const menu = document.getElementById("menu")
const exit = document.getElementById("exit")
const navigation = document.getElementById("nav")
menu.addEventListener("click", (e) => {
    navigation.classList.remove('-right-full')
})

exit.addEventListener("click", (e) => {
    navigation.classList.add("-right-full")
})
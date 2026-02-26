export function themeSwitch() {
    if (window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !localStorage.hasOwnProperty('theme')) {
            document.documentElement.setAttribute('data-theme', "dark");
            localStorage.setItem("data-theme", "dark")
    } else {
        let theme = localStorage.getItem("theme")
        document.documentElement.setAttribute('data-theme', `${theme}`)
    }
}
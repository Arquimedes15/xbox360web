function direcion_bar(){
    let dir = location.href;
    dir = dir.split('#')
    return dir[dir.length - 1]
}


const bar_menu_init = document.querySelector("#bar_menu_xbox")
const bar_effect_funct = document.querySelectorAll("a")

function efectSelectMenu(){
    const options = bar_menu_init.querySelectorAll("a")
    options.forEach(option => {
        if(option.href == location.href){
            option.style.color = "#fff"
        }else{
            option.style.color = "rgba(255, 255, 255, 0.448)"
        }
    });
}


bar_effect_funct.forEach(click => {
    click.addEventListener("click", ()=>{
        let time_es = setTimeout(()=>{
            efectSelectMenu()
        }, 10)
    })
})


let load_init = setTimeout(()=>{
    efectSelectMenu()
}, 10)
import module1 from "./module1.js";

const module2 = (function() {
    const value = document.querySelector("#value");
    const setValueBtn = document.querySelector("#setValue");

    const init = () => {
        console.log("Module 2 initialised");
        value.innerHTML = module1.state.count;
        
        setTimeout(() => {
            module1.setCount();
            value.innerHTML = module1.state.count;
            console.log(module1.state);
        }, 8000)
    }

    setValueBtn.addEventListener("click", () => {
        module1.setCount();
        value.innerHTML = module1.state.count;
    })

    return {
        init
    }
})()

export default module2;
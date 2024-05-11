
const module1 = (function() {

    const state = {
        count: 0
    }

    const setCount = () => {
        const randomNum = Math.floor(Math.random() * 11);
        state.count = randomNum;
    } 

    const init = () => {
        console.log("Module 1 initialised")
    }

    return {
        init,
        setCount,
        state
    }
})()

export default module1;
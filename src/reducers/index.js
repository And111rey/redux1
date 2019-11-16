// export default (state = "", action) => {
//     switch (action.type) {
//         case "INC":
//             return state + 1
//         case "DEC":
//             return state -1
//         case "RES":
//             return state = 0;
//         default:
//             return state
//     }
// }


export default (state= "", action) => {
    switch (action.type) {
        case "9":
            return state = state + "9"
        case "8":
            return state = state + "8"
        case "7":
            return state = state + "7"
        case "6":
            return state = state + "6"
        case "5":
            return state = state + "5"
        case "4":
            return state = state + "4"
        case "3":
            return state = state + "3"
        case "2":
            return state = state + "2"
        case "1":
            return state = state + "1"
        case "+":
            return state = state + "+"
        case "0":
            return state = state + "0"
        case "-":
            return state = state + "-"
        case ",":
            return state = state + "."
        case "=":
            return  eval(state)
        case "c":
            return state = ""    
        default:
            return state
    }
}
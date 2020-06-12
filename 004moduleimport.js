var mymodule = require('./library/utilities')

function useUtilities(){
    console.log(mymodule.getDate())
    console.log(mymodule.getDay())
    console.log(mymodule.getTime())
}

useUtilities()
/*** An arrow function expression is a compact alternative to a traditional function expression
 *** #javascript #developer #js #br 
 */
function traditionalFonction() {
    const _self = this;
    return  { 
        getThis : function () {
            console.log(_self) // there I can use the self
        }
    }
}

function arrowFonction() {
    return  { 
        getThis : () => {
            console.log(this) // there I can use the this 
        }
    }
}

traditionalFonction().getThis();
arrowFonction().getThis();
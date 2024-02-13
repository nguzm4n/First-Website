/**
 * @param {number[][]} accounts
 * @return {number}
 */
let arreglo = [[1, 2, 3], [3, 4, 5]];

var maximumWealth = function(accounts) {
    
    var maximo = 0;
    for(let i = 0; i < accounts.length; i++) {
        let total = 0;
        for(n = 0; n < accounts[i].length; n++){
            total += accounts[i][n]
        } 
    maximo = Math.max(maximo, total)   
    } 
    return maximo
}; 




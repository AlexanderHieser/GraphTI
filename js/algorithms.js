function checkEulerCircle(cy) {

console.log("test euler")
var dfs = cy.elements().dfs({
    roots: cy.nodes(),
    visit : function(i,depth,v) {
        console.log("visit "+this.id());
        this.style('background-color', 'magenta');

    }
});
}
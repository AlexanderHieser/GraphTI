function ISandClique(cy) {
    var U = GreedyIS(cy);

    var C = [];
    cy.nodes().forEach(function (node) {
        if (U.indexOf(node) == -1) {
            console.log(node.connectedEdges().length)
            if (node.connectedEdges().length > 0) {
                C.push(node);
                node.style({
                    'background-color': 'green'
                })
            }
        }
    });
    
    console.log("Clique");
    C.forEach(function (node) {
        console.log(node.id());
    })
}
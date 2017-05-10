
//just some color definitions
var colors = [
    "blue", "red", "yellow", "green", "orange"
]

function GreedyCol2(cyto) {
        resetGraphColors(cyto);

    //setup init values
    var t = 0;
    var V = cyto.nodes();
    var G = cyto;
    var Ux = [];
    var nodes = cyto.nodes(); // save nodes
    var edges = cyto.edges(); // save edges

    while (V.length != 0) { // as long as nodes left
        var U = GreedyIS(G); // get maximum IS
        U.forEach(function (node) { // set color of each node from the IS and remove it from the Graph
            node.style({
                'background-color': colors[t]
            });
            G.remove(node);
            V = G.nodes();
        })
        Ux.push(U); // save the IS
        t++; // increment color
    }

    Ux.forEach(function (U) { // Just printing the sets
        console.log("===SET====")
        U.forEach(function (node) {
            console.log(node.id());
        })
    })


    //add removed nodes and edges again
    nodes.forEach(function (n) {
        n.restore();
    })

    edges.forEach(function (e) {
        e.restore();
    })
}
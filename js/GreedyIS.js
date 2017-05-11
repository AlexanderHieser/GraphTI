function GreedyIS(cyto) {
    resetGraphColors(cyto);
    var t = 1; // init t
    var U = []; // init U
    var V = cyto.nodes(); // Get Vertices
    var G = cyto;
    var nodes = cyto.nodes();
    var edges = cyto.edges();
    while (V.length != 0) {
        var u = getVertexWithMiniumGrade(G);
        var neigh = u.neighborhood();
        G.remove(u); //remove node with minimum grade
        G.remove(neigh); // remove all neighbours and edges
        V = G.nodes(); // Set nodes left
        U.push(u); // save minium grade node
        t = t + 1;
    }

    console.log("===Maximum IS===")
    U.forEach(function (n) { // set color of all nodes from IS
        console.log(n.id());
        n.style({
            'background-color':'red'
        })
    })

    // add removed nodes and edges again ( cytoscape... wtf)
    nodes.forEach(function(n) {
        n.restore();
    })

    edges.forEach(function(e){
        e.restore();
    })
    return U;
}

function getVertexWithMiniumGrade(cyto) { // find Node with minim grade in Graph
    var vertex = cyto.nodes()[0];
    cyto.nodes().forEach(function (node) {
        if (node.connectedEdges().length < vertex.connectedEdges().length) {
            vertex = node;
        }
    })
    return vertex;
}
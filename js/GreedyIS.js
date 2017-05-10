function GreedyIS(cyto) {
    var t = 1; // init t
    var U = []; // init U
    var V = cyto.nodes(); // Get Vertices
    var G = cyto;
    var nodes = cyto.nodes();
    var edges = cyto.edges();
    console.log(V);
    console.log(G)
    while (V.length != 0) {
        var u = getVertexWithMiniumGrade(G);
        console.log("Minium grade" + u.id())
        var neigh = u.neighborhood();
        G.remove(u);
        G.remove(neigh);
        V = G.nodes();
        U.push(u);
        t = t + 1;
    }
    U.forEach(function (n) {
        console.log(n.id())
        n.style({
            'background-color':'yellow'
        })
    })
    nodes.forEach(function(n) {
        n.restore();
    })

    edges.forEach(function(e){
        e.restore();
    })
    return U;
}

function getVertexWithMiniumGrade(cyto) {
    var vertex = cyto.nodes()[0];
    cyto.nodes().forEach(function (node) {
        if (node.connectedEdges().length < vertex.connectedEdges().length) {
            vertex = node;
        }
    })
    return vertex;
}
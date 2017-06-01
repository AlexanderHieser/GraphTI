function Invert(cy) {
    var Nodes = cy.nodes();
    var Edges = cy.edges();

    var InvertedEdges = [];


    Edges.forEach(function (e) {
        cy.remove(e);
    })

    Nodes.forEach(function (node) {
        Nodes.forEach(function (next) {
            if (node.id() != next.id()) {
                var id = node.id() + next.id();
                var id2 = next.id() + node.id();
                var found = false;
                for (var i = 0; i < Edges.length; i++) {
                    var Edge = Edges[i];
                    var eid = Edge.id();
                    if (eid == id || eid == id2) {
                        found = true;
                    }
                }
                if (!found) {
                    InvertedEdges.push({
                        group: "edges",
                        data: {
                            "id": id,
                            source: node.id(),
                            target: next.id()
                        }
                    });
                }
            }
        });
    });
    console.log("Inverted Edges", InvertedEdges);


    InvertedEdges.forEach(function (i) {
        cy.add(i);
    })

}
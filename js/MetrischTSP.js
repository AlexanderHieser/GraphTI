function Insertion(cyto) {
    //init Tour;
    hideEges(cyto);
    CheapestInsertion(cyto);
}

function hideEges(cyto) {
    cyto.edges().forEach(function (e) {
        e.hide();
    })
    return cyto;
}


function CheapestInsertion(cyto) {
    console.log("Cheapest")
    var Cx = [];
    var G = cyto;
    var nodes = cyto.nodes(); // save nodes
    var edges = cyto.edges(); // save edges
    var newEdges = [];
    var V = G.nodes();
    Cx.push(cyto.nodes()[0]);
    G.remove(cyto.nodes()[0]);
    Cx.forEach(function (node) {
        console.log("node", node.id());
        var min = 0;
        var next;
        V.forEach(function (element) {
            console.log("node", element.id());

            var p1 = {
                x: node.position('x'),
                y: node.position('y')
            };
            var p2 = {
                x: element.position('x'),
                y: element.position('y')
            };

            var distance = pythagoras(p1, p2);
            if (min == 0) {
                min = distance;
            }
            if (distance < min) {
                next = element;
            }
        });
        Cx.push(next);
        var newE = {
            group: 'edges',
            data: {
                id: min,
                data: min,
                source: node.id(),
                target: next.id()
            }
        };
        newEdges.push(newE);
        V.remove(next);
    });
    nodes.forEach(function (n) {
        n.restore();
    })
    newEdges.forEach(function(e) {
        cyto.add(e);
    });
}

function pythagoras(p1, p2) {
    var a = p1.x - p2.x;
    var b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
}
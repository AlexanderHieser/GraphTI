//Check for Euler circle
function checkEulerCircle(cy) {

    var complete_graph = false;
    var edge_count = cy.edges().length;
    var node_count = cy.nodes().length;
    var complete_count = node_count * (node_count - 1) / 2;
    if (edge_count == complete_count)
        complete_graph = true;

    console.log("Edges: " + edge_count)
    console.log("Edges complete: " + complete_count)
    console.log("Graph is complete: " + complete_graph)

    var odd_count = 0;
    var event_count = 0;

    var anim_time = 100;

    var dfs = cy.elements().dfs({ //tiefensuche
        roots: cy.nodes(),

        visit: function (i, depth, v, e) {
            var connected_count = v.connectedEdges().length;
            console.log("Node " + this.id() + " has  a grade of " + connected_count);
            if (connected_count % 2 == 0) {
                event_count++;
            } else {
                odd_count++;
            }

            this.animate({
                style: {
                    backgroundColor: 'red',
                    shape: 'square'
                }
            }, {
                duration: 10,
                queue: true
            }).delay(anim_time)

            if (e) {
                e.animate({
                    style: {
                        "line-color": 'red'
                    }
                }, {
                    duration: 100,
                    queue: true
                }).delay(anim_time)
            }
            anim_time += 1000;
        }
    });

    if (odd_count == 2) {
        console.log("Eulerpath found");
    }
    if (event_count == cy.nodes().length && complete_graph == true) {
        console.log("Euler circle");
    }

    console.log(odd_count);
    console.log(event_count);
    var path = dfs.path;
    var euler = dfs.found;
    path.select();

}

function deepFirstSearch(cy) {
    var anim_time = 100;
    var dfs = cy.elements().dfs({ //tiefensuche
        roots: cy.nodes(),
        visit: function (i, depth, v, e) {
            this.animate({
                style: {
                    backgroundColor: 'red',
                    shape: 'square'
                }
            }, {
                duration: 10,
                queue: true
            }).delay(anim_time)

            if (e) {
                e.animate({
                    style: {
                        "line-color": 'red'
                    }
                }, {
                    duration: 100,
                    queue: true
                }).delay(anim_time)
            }
            anim_time += 1000;
        }
    });

    var path = dfs.path;
    path.select();

}

function findCircle(node,cy) {
    if(node.connectedNodes().length == 0){
        return;
    }
    if(node.visited == true) {
        return;
    }else {
        node.visited = true;
        node.connectedNodes().forEach(function(node) {
        findCircle(node,cy);
    })
    }
}
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

    var anim_time = 100;
    var dfs = cy.elements().dfs({
        roots: cy.nodes(),
        visit: function (i, depth, v, e) {
            console.log(v.connectedEdges().length);
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
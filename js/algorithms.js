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

        }
    });
    var path = dfs.path;
    var euler = dfs.found;
    path.select();

    if(odd_count == 0 && complete_graph == true) {
      console.log("Found Euler circle");
      return;
    }
    if (odd_count == 2) {
        console.log("Found Eulerpath found");
        return;
    }
    console.log("No Circuit or Path found");
}

//performs a dfs and animates the nodes
function depthFirstSearch(cy) {
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
var visited = [];

function checkCircle(cy) {
    visited = [];
    findCircle(cy, cy.elements()[0]);
}

var finished = []


var visited = [];
var found = false;
function findCircle(v) {
    var vis = visited.indexOf(v);
    if (vis != -1) {
        found = true;
        console.log("zyklus gefunden");
        console.log(visited)
           visited.forEach(function(a) {
            console.log(a.id())
        })
        visited = [];
        return;
    }else {
        visited.push(v);
        var neigh = v.outgoers().nodes();
        neigh.forEach(function(v) {
            return findCircle(v);
        });
    }
}

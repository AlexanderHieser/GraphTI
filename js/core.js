//random layout definition

var cy;
//gets executed if the user selects a file with the file input
var openFile = function (event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var lines = text.split("\n");
        // get every single line in an array
        console.log(lines); //log every line
        createGraph(lines)
    };
    reader.readAsText(input.files[0]);
};

function resetGraphColors(cyto) {
    cyto.nodes().forEach(function(node) {
        node.style({
            'background-color' : '#3399ff'
        })
    });
}

//Generates cy graph from the passed text 
function createGraph(lines) {
    var data = [];
    lines.forEach(function (line) {
        line = line.replace(/(\r\n|\n|\r)/gm, ""); // remove all  \r \n 
        var parts = line.split(" ");
        if (parts[0] == "knoten") {
            data.push(createNode(parts));
        }
        if (parts[0] == "kante") {
            data.push(createEdge(parts))
        }
    });

    //Create cytoscape object with our nodes and edges
    cy = cytoscape({
        container: document.getElementById('cy'),
        elements: data,
        style: [{
            selector: 'node',
            style: {
                shape: 'circle',
                'background-color': "#3399ff",
                label: 'data(id)'
            }
        }]
    });
    console.log("Graph", data);
}

//creates a node object 
function createNode(nodedata) {
    var node = {
        data: {
            id: nodedata[1],
            data: +nodedata[2]
        }
    }
    return node;
}

//creates an edge object
function createEdge(edgedata) {
    var edge = {
        data: {
            id: edgedata[1] + edgedata[2],
            source: edgedata[1],
            target: edgedata[2],
            data: edgedata[3]
        }
    }
    return edge;
}



function runRandomLayout() {
    var layout = cy.makeLayout({
        name: 'random'
    });
    layout.run();
}

function runGridLayout() {
    var layout = cy.makeLayout({
        name: 'grid'
    });
    layout.run();
}
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

//Generates cy graph from the passed text 
function createGraph(lines) {
  var graph = new Graph(true);
  graph.loadGraph(lines);
  cy = graph.createCytoscape();
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
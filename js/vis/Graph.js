function Graph(directed) {
    this.directed = directed;
    this.Nodes = [];
    this.graph = {};
    this.cytoData = [];

    this.Edges = []; // do i need this ???
}

Graph.prototype.addNode = function (n) {
    //push to array ( for easy interating etc.)
    this.Nodes.push(n);
    //put it into "hash" table
    this.graph[n.id] = n;
}

Graph.prototype.getNode = function (id) {
    return this.graph[id];
}


Graph.prototype.createCytoscape = function () {
    var g = this;
    var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: this.cytoData,
        style: [{
            selector: 'node',
            style: {
                shape: 'circle',
                'background-color': "#3399ff",
                label: 'data(id)'
            }
        },{
        selector : 'edge',
        style: {
        'target-arrow-shape': 'triangle',
        'width': 4,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd',
        'curve-style': 'bezier'
        }}],
        layout: {
            padding: 10,
        }
    });
    console.log("Cytoscape created", this.cytoData)
    return cy;
}

Graph.prototype.loadGraph = function (lines) {

    var data = [];
    var cyto = []
    var g = this; // save the graph scope
    lines.forEach(function (line) {
        line = line.replace(/(\r\n|\n|\r)/gm, ""); // remove all  \r \n 
        var parts = line.split(" ");
        if (parts[0] == "knoten") {
            debugger;
            g.addNode(createNode(parts));
            cyto.push(createCytoNode(parts));
        }
        if (parts[0] == "kante") {
            var node = g.getNode(parts[1]);
            var neighbour = g.getNode(parts[2]);
            node.addEdge(neighbour);
            cyto.push(createCytoEdge(parts));
        }
    });

    this.cytoData = cyto;
    console.log("Graph loaded: ", this.graph);
}


//creates a node object 
function createNode(nodedata) {
    var n = new Node();
    n.id = nodedata[1];
    n.label = "Node " + nodedata[1];
    n.data = nodedata[2];
    console.log("Graph create Node:", n)
    return n;
}

//creates an edge object
function createEdge(edgedata) {
    var e = new Edge(edgedata[1], edgedata[2]);
    e.data = edgedata[3];
    e.id = edgedata[1] + edgedata[2];
    console.log("Graph create Edge:", e)
    return e;
}

//creates a node object for cytoscape
function createCytoNode(nodedata) {
    var node = {
        data: {
            id: nodedata[1],
            data: +nodedata[2]
        }
    }
    return node;
}

//creates an edge object for cytoscape
function createCytoEdge(edgedata) {
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
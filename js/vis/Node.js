function Node()  {
    this.id;
    this.label;
    this.data;
    this.tag;
    this.edges = [];
}


Node.prototype.addEdge = function(node,directed){
    this.edges.push(node)
    if(!directed){
        node.edges.push(this);
    }
}
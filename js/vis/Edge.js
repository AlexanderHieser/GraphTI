function Edge(source, target) {
    this.source = source;
    this.target = target;
    this.id;
    this.name;
    this.data;
    this.tag;
    this.getNodes = getNodes;
}

function getNodes() {
    return {"source":source,"target":target};
}


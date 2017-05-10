var colors = [
    "blue","red","yellow","green","orange"
]

function GreedyCol2(cyto) {
 var t = 1;
 var V = cyto.nodes();
 var G = cyto;
 var Ux = [];
 var nodes = cyto.nodes();
 var edges = cyto.edges();
 while(V.length != 0) {
     var U = GreedyIS(G);
     U.forEach(function(node) {
         node.style({
             'background-color': colors[t]
         });
         G.remove(node);
         V = G.nodes();
     })
     Ux.push(U);
     t++;
 }  
console.log("Sets",Ux)

   nodes.forEach(function(n) {
        n.restore();
    })

    edges.forEach(function(e){
        e.restore();
    })
}
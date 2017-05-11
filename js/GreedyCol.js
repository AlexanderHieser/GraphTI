var colors = [
    "blue", "red", "yellow", "green", "orange", "#663300", "#99ff33", "#993399"
]

function GreedyCol(cyto) {
    var usedColors = [];
    var V = cyto.nodes();
    V.forEach(function(node) {
        node.data('color',10000);
    })

    V.forEach(function(element) {
        var N = element.neighborhood();
        var Colors = colors;
        N.forEach(function(node) {
           var color = node.data('color');
           if(Colors.indexOf(color) != -1) {
            Colors.splice(Colors.indexOf(color),1);
           }
        });
        
        element.style({
            'background-color' : Colors[0]
        });
        if(usedColors.indexOf(Colors[0]) == -1) {
            usedColors.push(Colors[0]);
        }
        element.data('color',Colors[0]);
        console.log("COlors",Colors);
           colors = [
     "blue", "red", "yellow", "green", "orange", "#663300", "#99ff33", "#993399"
        ]
    });
    console.log("UsedColors",usedColors);
    console.log("COunt",usedColors.length);
    colors = [
     "blue", "red", "yellow", "green", "orange", "#663300", "#99ff33", "#993399"
    ]
}
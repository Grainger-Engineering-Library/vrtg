
var scene = document.getElementById("scene");

function renderAnnontations(nodeId) {
    $(".annotation").remove();
    let node = config[nodeId];
    if (node) {
        let local = config[nodeId].annotations;
        if (local) {
            for (var a = 0; a < local.length; a++) {
                if (local[a].type) {
                    let annotation = null;
                    if (local[a].type == 'text') {
                        annotation = document.createElement("a-text");
                    }
                    if (local[a].type == 'area') {
                        annotation = document.createElement("a-"+local[a].primitive);
                    }
                    for (att of Object.keys(local[a])) {
                        console.log(att, local[a][att])
                        annotation.setAttribute(att, local[a][att])
                    }
                    if (annotation) {
                        annotation.setAttribute("class", "annotation");
                        scene.appendChild(annotation);
                        annotation = undefined;
                    }

                }
            }
        }
    };
};

function applyOrientation(nodeId) {
    let node = config[nodeId];
    let current = document.getElementById("image-current");
    if (node) {
        let local = config[nodeId].rotation;
        if (local) {
            console.log("appplying custom orientation to:", nodeId, local)
            current.setAttribute("rotation", local)
        } else {
            current.setAttribute("rotation", "0 0 0")
        }
    } else {
        current.setAttribute("rotation", "0 0 0")
    }
}

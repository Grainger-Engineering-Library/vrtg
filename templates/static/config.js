var config = {

    "1_1": {
    "annotations": 
        [
            {
                "type": "text",
                "value": "THIS IS A TEST",
                "width": 10,
                "height": 10,
                "color": "red",
                "xoffset": 0,
                "yoffset": 0,
                "zoffset": -2
            },
            {
                "type": "text",
                "value": "THIS IS ALSO A TEST",
                "width": 10,
                "height": 10,
                "color": "blue",
                "xoffset": 0,
                "yoffset": 0,
                "zoffset": -10
            },
            {
                "type": "geometry",
                "height": 10,
                "width": 10,
                "position": "15 0 -14",
                "rotation": "-90 0 0",
                "material": "side: double; color: #EF2D5E; transparent: true; opacity: 0.5"
            }
        ],
    },
    "1_2": {
        "annotations": [
        {
            "type": "text",
            "value": "THIS IS A 1_2 TEST",
            "width": 10,
            "height": 10,
            "color": "pink",
            "xoffset": 0,
            "yoffset": 0,
            "zoffset": -5
        }
    ]
},
"2_1": {
    "orientations": {
        "rotation": "0 180 0"
    }
}        
}

try {
module.exports = config;
} catch {

};

var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "hanamori"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1602877004",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Normal render of hanamori",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "normal",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "hanamori",
            "last_rendertime": 1602875459,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -144,
                96,
                160
            ],
            "minZoom": 0,
            "spawn": [
                -144,
                96,
                160
            ],
            "north_direction": 0
        },
        {
            "name": "Smooth lighting render of hanamori",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "smooth_lighting",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "hanamori",
            "last_rendertime": 1602875459,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -144,
                96,
                160
            ],
            "minZoom": 0,
            "spawn": [
                -144,
                96,
                160
            ],
            "north_direction": 0
        }
    ]
};

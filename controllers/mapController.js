var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    var geojson = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        101.162109375,
                        17.22475820662464
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        101.689453125,
                        14.859850400601037
                    ]
                }
            }
        ]
    };
    res.render('../views/map/index', { geojson: geojson });
})
router.get('/point', (req, res) => {
    var geojson = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        101.162109375,
                        17.22475820662464
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        101.689453125,
                        14.859850400601037
                    ]
                }
            }
        ]
    };
    res.json(geojson)
});


module.exports = router;
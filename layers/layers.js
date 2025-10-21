var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Outputpolygonlayer_1 = new ol.format.GeoJSON();
var features_Outputpolygonlayer_1 = format_Outputpolygonlayer_1.readFeatures(json_Outputpolygonlayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpolygonlayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpolygonlayer_1.addFeatures(features_Outputpolygonlayer_1);
var lyr_Outputpolygonlayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputpolygonlayer_1, 
                style: style_Outputpolygonlayer_1,
                popuplayertitle: 'Output polygon layer',
                interactive: true,
    title: 'Output polygon layer<br />\
    <img src="styles/legend/Outputpolygonlayer_1_0.png" /> Ambiental y Gestión de del territorio<br />\
    <img src="styles/legend/Outputpolygonlayer_1_1.png" /> Social y cultural<br />\
    <img src="styles/legend/Outputpolygonlayer_1_2.png" /> Transporte<br />' });
var format_Outputpointlayer_2 = new ol.format.GeoJSON();
var features_Outputpointlayer_2 = format_Outputpointlayer_2.readFeatures(json_Outputpointlayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpointlayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpointlayer_2.addFeatures(features_Outputpointlayer_2);
var lyr_Outputpointlayer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputpointlayer_2, 
                style: style_Outputpointlayer_2,
                popuplayertitle: 'Output point layer',
                interactive: true,
    title: 'Output point layer<br />\
    <img src="styles/legend/Outputpointlayer_2_0.png" /> Ambiental y Gestión de del territorio<br />\
    <img src="styles/legend/Outputpointlayer_2_1.png" /> Social y cultural<br />\
    <img src="styles/legend/Outputpointlayer_2_2.png" /> Transporte<br />' });
var format_Outputlinelayer_3 = new ol.format.GeoJSON();
var features_Outputlinelayer_3 = format_Outputlinelayer_3.readFeatures(json_Outputlinelayer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputlinelayer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputlinelayer_3.addFeatures(features_Outputlinelayer_3);
var lyr_Outputlinelayer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputlinelayer_3, 
                style: style_Outputlinelayer_3,
                popuplayertitle: 'Output line layer',
                interactive: true,
    title: 'Output line layer<br />\
    <img src="styles/legend/Outputlinelayer_3_0.png" /> Ambiental y Gestión de del territorio<br />\
    <img src="styles/legend/Outputlinelayer_3_1.png" /> Transporte<br />\
    <img src="styles/legend/Outputlinelayer_3_2.png" /> Urbanismo y desarrollo metropolitano<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Outputpolygonlayer_1.setVisible(true);lyr_Outputpointlayer_2.setVisible(true);lyr_Outputlinelayer_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Outputpolygonlayer_1,lyr_Outputpointlayer_2,lyr_Outputlinelayer_3];
lyr_Outputpolygonlayer_1.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Categoria': 'Categoria', });
lyr_Outputpointlayer_2.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Categoria': 'Categoria', });
lyr_Outputlinelayer_3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Categoria': 'Categoria', });
lyr_Outputpolygonlayer_1.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Outputpointlayer_2.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Outputlinelayer_3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Outputpolygonlayer_1.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'Categoria': 'no label', });
lyr_Outputpointlayer_2.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'Categoria': 'no label', });
lyr_Outputlinelayer_3.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'Categoria': 'no label', });
lyr_Outputlinelayer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
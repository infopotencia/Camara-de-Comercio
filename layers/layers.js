var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DPTO_CNMBR_ATLNTICO_1 = new ol.format.GeoJSON();
var features_DPTO_CNMBR_ATLNTICO_1 = format_DPTO_CNMBR_ATLNTICO_1.readFeatures(json_DPTO_CNMBR_ATLNTICO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPTO_CNMBR_ATLNTICO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPTO_CNMBR_ATLNTICO_1.addFeatures(features_DPTO_CNMBR_ATLNTICO_1);
var lyr_DPTO_CNMBR_ATLNTICO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPTO_CNMBR_ATLNTICO_1, 
                style: style_DPTO_CNMBR_ATLNTICO_1,
                popuplayertitle: 'DPTO_CNMBR_ATLÁNTICO',
                interactive: false,
    title: 'DPTO_CNMBR_ATLÁNTICO<br />\
    <img src="styles/legend/DPTO_CNMBR_ATLNTICO_1_0.png" /> 14 - 20<br />\
    <img src="styles/legend/DPTO_CNMBR_ATLNTICO_1_1.png" /> 20 - 34<br />\
    <img src="styles/legend/DPTO_CNMBR_ATLNTICO_1_2.png" /> 34 - 45<br />\
    <img src="styles/legend/DPTO_CNMBR_ATLNTICO_1_3.png" /> 45 - 55<br />\
    <img src="styles/legend/DPTO_CNMBR_ATLNTICO_1_4.png" /> 55 - 65<br />' });
var format_DPTO_CNMBR_BOLVAR_2 = new ol.format.GeoJSON();
var features_DPTO_CNMBR_BOLVAR_2 = format_DPTO_CNMBR_BOLVAR_2.readFeatures(json_DPTO_CNMBR_BOLVAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPTO_CNMBR_BOLVAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPTO_CNMBR_BOLVAR_2.addFeatures(features_DPTO_CNMBR_BOLVAR_2);
var lyr_DPTO_CNMBR_BOLVAR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPTO_CNMBR_BOLVAR_2, 
                style: style_DPTO_CNMBR_BOLVAR_2,
                popuplayertitle: 'DPTO_CNMBR_BOLÍVAR',
                interactive: false,
    title: 'DPTO_CNMBR_BOLÍVAR<br />\
    <img src="styles/legend/DPTO_CNMBR_BOLVAR_2_0.png" /> 14,4 - 20<br />\
    <img src="styles/legend/DPTO_CNMBR_BOLVAR_2_1.png" /> 20 - 34,5<br />\
    <img src="styles/legend/DPTO_CNMBR_BOLVAR_2_2.png" /> 34,5 - 44,5<br />\
    <img src="styles/legend/DPTO_CNMBR_BOLVAR_2_3.png" /> 44,5 - 54,6<br />\
    <img src="styles/legend/DPTO_CNMBR_BOLVAR_2_4.png" /> 54,6 - 73,8<br />' });
var format_DPTO_CNMBR_MAGDALENA_3 = new ol.format.GeoJSON();
var features_DPTO_CNMBR_MAGDALENA_3 = format_DPTO_CNMBR_MAGDALENA_3.readFeatures(json_DPTO_CNMBR_MAGDALENA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPTO_CNMBR_MAGDALENA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPTO_CNMBR_MAGDALENA_3.addFeatures(features_DPTO_CNMBR_MAGDALENA_3);
var lyr_DPTO_CNMBR_MAGDALENA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPTO_CNMBR_MAGDALENA_3, 
                style: style_DPTO_CNMBR_MAGDALENA_3,
                popuplayertitle: 'DPTO_CNMBR_MAGDALENA',
                interactive: false,
    title: 'DPTO_CNMBR_MAGDALENA<br />\
    <img src="styles/legend/DPTO_CNMBR_MAGDALENA_3_0.png" /> 14 - 20<br />\
    <img src="styles/legend/DPTO_CNMBR_MAGDALENA_3_1.png" /> 20 - 34,5<br />\
    <img src="styles/legend/DPTO_CNMBR_MAGDALENA_3_2.png" /> 34,5 - 44,5<br />\
    <img src="styles/legend/DPTO_CNMBR_MAGDALENA_3_3.png" /> 44,5 - 54,6<br />\
    <img src="styles/legend/DPTO_CNMBR_MAGDALENA_3_4.png" /> 54,6 - 70,7<br />' });
var format_Outputlinelayer_4 = new ol.format.GeoJSON();
var features_Outputlinelayer_4 = format_Outputlinelayer_4.readFeatures(json_Outputlinelayer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputlinelayer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputlinelayer_4.addFeatures(features_Outputlinelayer_4);
var lyr_Outputlinelayer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputlinelayer_4, 
                style: style_Outputlinelayer_4,
                popuplayertitle: 'Output line layer',
                interactive: true,
    title: 'Output line layer<br />\
    <img src="styles/legend/Outputlinelayer_4_0.png" /> Ambiental y Gestión de del territorio<br />\
    <img src="styles/legend/Outputlinelayer_4_1.png" /> Transporte<br />\
    <img src="styles/legend/Outputlinelayer_4_2.png" /> Urbanismo y desarrollo metropolitano<br />' });
var format_Outputpointlayer_5 = new ol.format.GeoJSON();
var features_Outputpointlayer_5 = format_Outputpointlayer_5.readFeatures(json_Outputpointlayer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpointlayer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpointlayer_5.addFeatures(features_Outputpointlayer_5);
var lyr_Outputpointlayer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputpointlayer_5, 
                style: style_Outputpointlayer_5,
                popuplayertitle: 'Output point layer',
                interactive: true,
    title: 'Output point layer<br />\
    <img src="styles/legend/Outputpointlayer_5_0.png" /> Ambiental y Gestión de del territorio<br />\
    <img src="styles/legend/Outputpointlayer_5_1.png" /> Social y cultural<br />\
    <img src="styles/legend/Outputpointlayer_5_2.png" /> Transporte<br />' });
var format_Outputpolygonlayer_6 = new ol.format.GeoJSON();
var features_Outputpolygonlayer_6 = format_Outputpolygonlayer_6.readFeatures(json_Outputpolygonlayer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outputpolygonlayer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outputpolygonlayer_6.addFeatures(features_Outputpolygonlayer_6);
var lyr_Outputpolygonlayer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outputpolygonlayer_6, 
                style: style_Outputpolygonlayer_6,
                popuplayertitle: 'Output polygon layer',
                interactive: true,
    title: 'Output polygon layer<br />\
    <img src="styles/legend/Outputpolygonlayer_6_0.png" /> Ambiental y Gestión de del territorio<br />\
    <img src="styles/legend/Outputpolygonlayer_6_1.png" /> Social y cultural<br />\
    <img src="styles/legend/Outputpolygonlayer_6_2.png" /> Transporte<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_DPTO_CNMBR_ATLNTICO_1.setVisible(true);lyr_DPTO_CNMBR_BOLVAR_2.setVisible(true);lyr_DPTO_CNMBR_MAGDALENA_3.setVisible(true);lyr_Outputlinelayer_4.setVisible(true);lyr_Outputpointlayer_5.setVisible(true);lyr_Outputpolygonlayer_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DPTO_CNMBR_ATLNTICO_1,lyr_DPTO_CNMBR_BOLVAR_2,lyr_DPTO_CNMBR_MAGDALENA_3,lyr_Outputlinelayer_4,lyr_Outputpointlayer_5,lyr_Outputpolygonlayer_6];
lyr_DPTO_CNMBR_ATLNTICO_1.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CCNCT': 'MPIO_CCNCT', 'DPTO_CNMBR': 'DPTO_CNMBR', 'MPM': 'MPM', 'MPM_CAB': 'MPM_CAB', 'MPM_CPRD': 'MPM_CPRD', 'AFBMO_TOT': 'AFBMO_TOT', 'AFBMO_CAB': 'AFBMO_CAB', 'AFBMO_CPRD': 'AFBMO_CPRD', 'BLE_TOT': 'BLE_TOT', 'BLE_CAB': 'BLE_CAB', 'BLE_CPRD': 'BLE_CPRD', 'BSCPI_TOT': 'BSCPI_TOT', 'BSCPI_CAB': 'BSCPI_CAB', 'BSCPI_CPRD': 'BSCPI_CPRD', 'BASS_TOT': 'BASS_TOT', 'BASS_CAB': 'BASS_CAB', 'BASS_CPRD': 'BASS_CPRD', 'TDE_TOT': 'TDE_TOT', 'TDE_CAB': 'TDE_CAB', 'TDE_CPRD': 'TDE_CPRD', 'HC_TOT': 'HC_TOT', 'HC_CAB': 'HC_CAB', 'HC_CPRD': 'HC_CPRD', 'IEE_TOT': 'IEE_TOT', 'IEE_CAB': 'IEE_CAB', 'IEE_CPRD': 'IEE_CPRD', 'IE_TOT': 'IE_TOT', 'IE_CAB': 'IE_CAB', 'IE_CPRD': 'IE_CPRD', 'MIPE_TOT': 'MIPE_TOT', 'MIPE_CAB': 'MIPE_CAB', 'MIPE_CPRD': 'MIPE_CPRD', 'MIP_TOT': 'MIP_TOT', 'MIP_CAB': 'MIP_CAB', 'MIP_CPRD': 'MIP_CPRD', 'RE_TOT': 'RE_TOT', 'RE_CAB': 'RE_CAB', 'RE_CPRD': 'RE_CPRD', 'SAFAM_TOT': 'SAFAM_TOT', 'SAFAM_CAB': 'SAFAM_CAB', 'SAFAM_CPRD': 'SAFAM_CPRD', 'SAS_TOT': 'SAS_TOT', 'SAS_CAB': 'SAS_CAB', 'SAS_CPRD': 'SAS_CPRD', 'TRINF_TOT': 'TRINF_TOT', 'TRINF_CAB': 'TRINF_CAB', 'TRINF_CPRD': 'TRINF_CPRD', 'TRIML_TOT': 'TRIML_TOT', 'TRIML_CAB': 'TRIML_CAB', 'TRIML_CPRD': 'TRIML_CPRD', });
lyr_DPTO_CNMBR_BOLVAR_2.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CCNCT': 'MPIO_CCNCT', 'DPTO_CNMBR': 'DPTO_CNMBR', 'MPM': 'MPM', 'MPM_CAB': 'MPM_CAB', 'MPM_CPRD': 'MPM_CPRD', 'AFBMO_TOT': 'AFBMO_TOT', 'AFBMO_CAB': 'AFBMO_CAB', 'AFBMO_CPRD': 'AFBMO_CPRD', 'BLE_TOT': 'BLE_TOT', 'BLE_CAB': 'BLE_CAB', 'BLE_CPRD': 'BLE_CPRD', 'BSCPI_TOT': 'BSCPI_TOT', 'BSCPI_CAB': 'BSCPI_CAB', 'BSCPI_CPRD': 'BSCPI_CPRD', 'BASS_TOT': 'BASS_TOT', 'BASS_CAB': 'BASS_CAB', 'BASS_CPRD': 'BASS_CPRD', 'TDE_TOT': 'TDE_TOT', 'TDE_CAB': 'TDE_CAB', 'TDE_CPRD': 'TDE_CPRD', 'HC_TOT': 'HC_TOT', 'HC_CAB': 'HC_CAB', 'HC_CPRD': 'HC_CPRD', 'IEE_TOT': 'IEE_TOT', 'IEE_CAB': 'IEE_CAB', 'IEE_CPRD': 'IEE_CPRD', 'IE_TOT': 'IE_TOT', 'IE_CAB': 'IE_CAB', 'IE_CPRD': 'IE_CPRD', 'MIPE_TOT': 'MIPE_TOT', 'MIPE_CAB': 'MIPE_CAB', 'MIPE_CPRD': 'MIPE_CPRD', 'MIP_TOT': 'MIP_TOT', 'MIP_CAB': 'MIP_CAB', 'MIP_CPRD': 'MIP_CPRD', 'RE_TOT': 'RE_TOT', 'RE_CAB': 'RE_CAB', 'RE_CPRD': 'RE_CPRD', 'SAFAM_TOT': 'SAFAM_TOT', 'SAFAM_CAB': 'SAFAM_CAB', 'SAFAM_CPRD': 'SAFAM_CPRD', 'SAS_TOT': 'SAS_TOT', 'SAS_CAB': 'SAS_CAB', 'SAS_CPRD': 'SAS_CPRD', 'TRINF_TOT': 'TRINF_TOT', 'TRINF_CAB': 'TRINF_CAB', 'TRINF_CPRD': 'TRINF_CPRD', 'TRIML_TOT': 'TRIML_TOT', 'TRIML_CAB': 'TRIML_CAB', 'TRIML_CPRD': 'TRIML_CPRD', });
lyr_DPTO_CNMBR_MAGDALENA_3.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CCNCT': 'MPIO_CCNCT', 'DPTO_CNMBR': 'DPTO_CNMBR', 'MPM': 'MPM', 'MPM_CAB': 'MPM_CAB', 'MPM_CPRD': 'MPM_CPRD', 'AFBMO_TOT': 'AFBMO_TOT', 'AFBMO_CAB': 'AFBMO_CAB', 'AFBMO_CPRD': 'AFBMO_CPRD', 'BLE_TOT': 'BLE_TOT', 'BLE_CAB': 'BLE_CAB', 'BLE_CPRD': 'BLE_CPRD', 'BSCPI_TOT': 'BSCPI_TOT', 'BSCPI_CAB': 'BSCPI_CAB', 'BSCPI_CPRD': 'BSCPI_CPRD', 'BASS_TOT': 'BASS_TOT', 'BASS_CAB': 'BASS_CAB', 'BASS_CPRD': 'BASS_CPRD', 'TDE_TOT': 'TDE_TOT', 'TDE_CAB': 'TDE_CAB', 'TDE_CPRD': 'TDE_CPRD', 'HC_TOT': 'HC_TOT', 'HC_CAB': 'HC_CAB', 'HC_CPRD': 'HC_CPRD', 'IEE_TOT': 'IEE_TOT', 'IEE_CAB': 'IEE_CAB', 'IEE_CPRD': 'IEE_CPRD', 'IE_TOT': 'IE_TOT', 'IE_CAB': 'IE_CAB', 'IE_CPRD': 'IE_CPRD', 'MIPE_TOT': 'MIPE_TOT', 'MIPE_CAB': 'MIPE_CAB', 'MIPE_CPRD': 'MIPE_CPRD', 'MIP_TOT': 'MIP_TOT', 'MIP_CAB': 'MIP_CAB', 'MIP_CPRD': 'MIP_CPRD', 'RE_TOT': 'RE_TOT', 'RE_CAB': 'RE_CAB', 'RE_CPRD': 'RE_CPRD', 'SAFAM_TOT': 'SAFAM_TOT', 'SAFAM_CAB': 'SAFAM_CAB', 'SAFAM_CPRD': 'SAFAM_CPRD', 'SAS_TOT': 'SAS_TOT', 'SAS_CAB': 'SAS_CAB', 'SAS_CPRD': 'SAS_CPRD', 'TRINF_TOT': 'TRINF_TOT', 'TRINF_CAB': 'TRINF_CAB', 'TRINF_CPRD': 'TRINF_CPRD', 'TRIML_TOT': 'TRIML_TOT', 'TRIML_CAB': 'TRIML_CAB', 'TRIML_CPRD': 'TRIML_CPRD', });
lyr_Outputlinelayer_4.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Categoria': 'Categoria', });
lyr_Outputpointlayer_5.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Categoria': 'Categoria', });
lyr_Outputpolygonlayer_6.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Categoria': 'Categoria', });
lyr_DPTO_CNMBR_ATLNTICO_1.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'MPM': 'TextEdit', 'MPM_CAB': 'TextEdit', 'MPM_CPRD': 'TextEdit', 'AFBMO_TOT': 'TextEdit', 'AFBMO_CAB': 'TextEdit', 'AFBMO_CPRD': 'TextEdit', 'BLE_TOT': 'TextEdit', 'BLE_CAB': 'TextEdit', 'BLE_CPRD': 'TextEdit', 'BSCPI_TOT': 'TextEdit', 'BSCPI_CAB': 'TextEdit', 'BSCPI_CPRD': 'TextEdit', 'BASS_TOT': 'TextEdit', 'BASS_CAB': 'TextEdit', 'BASS_CPRD': 'TextEdit', 'TDE_TOT': 'TextEdit', 'TDE_CAB': 'TextEdit', 'TDE_CPRD': 'TextEdit', 'HC_TOT': 'TextEdit', 'HC_CAB': 'TextEdit', 'HC_CPRD': 'TextEdit', 'IEE_TOT': 'TextEdit', 'IEE_CAB': 'TextEdit', 'IEE_CPRD': 'TextEdit', 'IE_TOT': 'TextEdit', 'IE_CAB': 'TextEdit', 'IE_CPRD': 'TextEdit', 'MIPE_TOT': 'TextEdit', 'MIPE_CAB': 'TextEdit', 'MIPE_CPRD': 'TextEdit', 'MIP_TOT': 'TextEdit', 'MIP_CAB': 'TextEdit', 'MIP_CPRD': 'TextEdit', 'RE_TOT': 'TextEdit', 'RE_CAB': 'TextEdit', 'RE_CPRD': 'TextEdit', 'SAFAM_TOT': 'TextEdit', 'SAFAM_CAB': 'TextEdit', 'SAFAM_CPRD': 'TextEdit', 'SAS_TOT': 'TextEdit', 'SAS_CAB': 'TextEdit', 'SAS_CPRD': 'TextEdit', 'TRINF_TOT': 'TextEdit', 'TRINF_CAB': 'TextEdit', 'TRINF_CPRD': 'TextEdit', 'TRIML_TOT': 'TextEdit', 'TRIML_CAB': 'TextEdit', 'TRIML_CPRD': 'TextEdit', });
lyr_DPTO_CNMBR_BOLVAR_2.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'MPM': 'TextEdit', 'MPM_CAB': 'TextEdit', 'MPM_CPRD': 'TextEdit', 'AFBMO_TOT': 'TextEdit', 'AFBMO_CAB': 'TextEdit', 'AFBMO_CPRD': 'TextEdit', 'BLE_TOT': 'TextEdit', 'BLE_CAB': 'TextEdit', 'BLE_CPRD': 'TextEdit', 'BSCPI_TOT': 'TextEdit', 'BSCPI_CAB': 'TextEdit', 'BSCPI_CPRD': 'TextEdit', 'BASS_TOT': 'TextEdit', 'BASS_CAB': 'TextEdit', 'BASS_CPRD': 'TextEdit', 'TDE_TOT': 'TextEdit', 'TDE_CAB': 'TextEdit', 'TDE_CPRD': 'TextEdit', 'HC_TOT': 'TextEdit', 'HC_CAB': 'TextEdit', 'HC_CPRD': 'TextEdit', 'IEE_TOT': 'TextEdit', 'IEE_CAB': 'TextEdit', 'IEE_CPRD': 'TextEdit', 'IE_TOT': 'TextEdit', 'IE_CAB': 'TextEdit', 'IE_CPRD': 'TextEdit', 'MIPE_TOT': 'TextEdit', 'MIPE_CAB': 'TextEdit', 'MIPE_CPRD': 'TextEdit', 'MIP_TOT': 'TextEdit', 'MIP_CAB': 'TextEdit', 'MIP_CPRD': 'TextEdit', 'RE_TOT': 'TextEdit', 'RE_CAB': 'TextEdit', 'RE_CPRD': 'TextEdit', 'SAFAM_TOT': 'TextEdit', 'SAFAM_CAB': 'TextEdit', 'SAFAM_CPRD': 'TextEdit', 'SAS_TOT': 'TextEdit', 'SAS_CAB': 'TextEdit', 'SAS_CPRD': 'TextEdit', 'TRINF_TOT': 'TextEdit', 'TRINF_CAB': 'TextEdit', 'TRINF_CPRD': 'TextEdit', 'TRIML_TOT': 'TextEdit', 'TRIML_CAB': 'TextEdit', 'TRIML_CPRD': 'TextEdit', });
lyr_DPTO_CNMBR_MAGDALENA_3.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'MPM': 'TextEdit', 'MPM_CAB': 'TextEdit', 'MPM_CPRD': 'TextEdit', 'AFBMO_TOT': 'TextEdit', 'AFBMO_CAB': 'TextEdit', 'AFBMO_CPRD': 'TextEdit', 'BLE_TOT': 'TextEdit', 'BLE_CAB': 'TextEdit', 'BLE_CPRD': 'TextEdit', 'BSCPI_TOT': 'TextEdit', 'BSCPI_CAB': 'TextEdit', 'BSCPI_CPRD': 'TextEdit', 'BASS_TOT': 'TextEdit', 'BASS_CAB': 'TextEdit', 'BASS_CPRD': 'TextEdit', 'TDE_TOT': 'TextEdit', 'TDE_CAB': 'TextEdit', 'TDE_CPRD': 'TextEdit', 'HC_TOT': 'TextEdit', 'HC_CAB': 'TextEdit', 'HC_CPRD': 'TextEdit', 'IEE_TOT': 'TextEdit', 'IEE_CAB': 'TextEdit', 'IEE_CPRD': 'TextEdit', 'IE_TOT': 'TextEdit', 'IE_CAB': 'TextEdit', 'IE_CPRD': 'TextEdit', 'MIPE_TOT': 'TextEdit', 'MIPE_CAB': 'TextEdit', 'MIPE_CPRD': 'TextEdit', 'MIP_TOT': 'TextEdit', 'MIP_CAB': 'TextEdit', 'MIP_CPRD': 'TextEdit', 'RE_TOT': 'TextEdit', 'RE_CAB': 'TextEdit', 'RE_CPRD': 'TextEdit', 'SAFAM_TOT': 'TextEdit', 'SAFAM_CAB': 'TextEdit', 'SAFAM_CPRD': 'TextEdit', 'SAS_TOT': 'TextEdit', 'SAS_CAB': 'TextEdit', 'SAS_CPRD': 'TextEdit', 'TRINF_TOT': 'TextEdit', 'TRINF_CAB': 'TextEdit', 'TRINF_CPRD': 'TextEdit', 'TRIML_TOT': 'TextEdit', 'TRIML_CAB': 'TextEdit', 'TRIML_CPRD': 'TextEdit', });
lyr_Outputlinelayer_4.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Outputpointlayer_5.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Outputpolygonlayer_6.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_DPTO_CNMBR_ATLNTICO_1.set('fieldLabels', {'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CCNCT': 'no label', 'DPTO_CNMBR': 'no label', 'MPM': 'inline label - visible with data', 'MPM_CAB': 'no label', 'MPM_CPRD': 'no label', 'AFBMO_TOT': 'no label', 'AFBMO_CAB': 'no label', 'AFBMO_CPRD': 'no label', 'BLE_TOT': 'no label', 'BLE_CAB': 'no label', 'BLE_CPRD': 'no label', 'BSCPI_TOT': 'no label', 'BSCPI_CAB': 'no label', 'BSCPI_CPRD': 'no label', 'BASS_TOT': 'no label', 'BASS_CAB': 'no label', 'BASS_CPRD': 'no label', 'TDE_TOT': 'no label', 'TDE_CAB': 'no label', 'TDE_CPRD': 'no label', 'HC_TOT': 'no label', 'HC_CAB': 'no label', 'HC_CPRD': 'no label', 'IEE_TOT': 'no label', 'IEE_CAB': 'no label', 'IEE_CPRD': 'no label', 'IE_TOT': 'no label', 'IE_CAB': 'no label', 'IE_CPRD': 'no label', 'MIPE_TOT': 'no label', 'MIPE_CAB': 'no label', 'MIPE_CPRD': 'no label', 'MIP_TOT': 'no label', 'MIP_CAB': 'no label', 'MIP_CPRD': 'no label', 'RE_TOT': 'no label', 'RE_CAB': 'no label', 'RE_CPRD': 'no label', 'SAFAM_TOT': 'no label', 'SAFAM_CAB': 'no label', 'SAFAM_CPRD': 'no label', 'SAS_TOT': 'no label', 'SAS_CAB': 'no label', 'SAS_CPRD': 'no label', 'TRINF_TOT': 'no label', 'TRINF_CAB': 'no label', 'TRINF_CPRD': 'no label', 'TRIML_TOT': 'no label', 'TRIML_CAB': 'no label', 'TRIML_CPRD': 'no label', });
lyr_DPTO_CNMBR_BOLVAR_2.set('fieldLabels', {'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CCNCT': 'no label', 'DPTO_CNMBR': 'no label', 'MPM': 'header label - visible with data', 'MPM_CAB': 'no label', 'MPM_CPRD': 'no label', 'AFBMO_TOT': 'no label', 'AFBMO_CAB': 'no label', 'AFBMO_CPRD': 'no label', 'BLE_TOT': 'no label', 'BLE_CAB': 'no label', 'BLE_CPRD': 'no label', 'BSCPI_TOT': 'no label', 'BSCPI_CAB': 'no label', 'BSCPI_CPRD': 'no label', 'BASS_TOT': 'no label', 'BASS_CAB': 'no label', 'BASS_CPRD': 'no label', 'TDE_TOT': 'no label', 'TDE_CAB': 'no label', 'TDE_CPRD': 'no label', 'HC_TOT': 'no label', 'HC_CAB': 'no label', 'HC_CPRD': 'no label', 'IEE_TOT': 'no label', 'IEE_CAB': 'no label', 'IEE_CPRD': 'no label', 'IE_TOT': 'no label', 'IE_CAB': 'no label', 'IE_CPRD': 'no label', 'MIPE_TOT': 'no label', 'MIPE_CAB': 'no label', 'MIPE_CPRD': 'no label', 'MIP_TOT': 'no label', 'MIP_CAB': 'no label', 'MIP_CPRD': 'no label', 'RE_TOT': 'no label', 'RE_CAB': 'no label', 'RE_CPRD': 'no label', 'SAFAM_TOT': 'no label', 'SAFAM_CAB': 'no label', 'SAFAM_CPRD': 'no label', 'SAS_TOT': 'no label', 'SAS_CAB': 'no label', 'SAS_CPRD': 'no label', 'TRINF_TOT': 'no label', 'TRINF_CAB': 'no label', 'TRINF_CPRD': 'no label', 'TRIML_TOT': 'no label', 'TRIML_CAB': 'no label', 'TRIML_CPRD': 'no label', });
lyr_DPTO_CNMBR_MAGDALENA_3.set('fieldLabels', {'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CCNCT': 'no label', 'DPTO_CNMBR': 'no label', 'MPM': 'inline label - visible with data', 'MPM_CAB': 'no label', 'MPM_CPRD': 'no label', 'AFBMO_TOT': 'no label', 'AFBMO_CAB': 'no label', 'AFBMO_CPRD': 'no label', 'BLE_TOT': 'no label', 'BLE_CAB': 'no label', 'BLE_CPRD': 'no label', 'BSCPI_TOT': 'no label', 'BSCPI_CAB': 'no label', 'BSCPI_CPRD': 'no label', 'BASS_TOT': 'no label', 'BASS_CAB': 'no label', 'BASS_CPRD': 'no label', 'TDE_TOT': 'no label', 'TDE_CAB': 'no label', 'TDE_CPRD': 'no label', 'HC_TOT': 'no label', 'HC_CAB': 'no label', 'HC_CPRD': 'no label', 'IEE_TOT': 'no label', 'IEE_CAB': 'no label', 'IEE_CPRD': 'no label', 'IE_TOT': 'no label', 'IE_CAB': 'no label', 'IE_CPRD': 'no label', 'MIPE_TOT': 'no label', 'MIPE_CAB': 'no label', 'MIPE_CPRD': 'no label', 'MIP_TOT': 'no label', 'MIP_CAB': 'no label', 'MIP_CPRD': 'no label', 'RE_TOT': 'no label', 'RE_CAB': 'no label', 'RE_CPRD': 'no label', 'SAFAM_TOT': 'no label', 'SAFAM_CAB': 'no label', 'SAFAM_CPRD': 'no label', 'SAS_TOT': 'no label', 'SAS_CAB': 'no label', 'SAS_CPRD': 'no label', 'TRINF_TOT': 'no label', 'TRINF_CAB': 'no label', 'TRINF_CPRD': 'no label', 'TRIML_TOT': 'no label', 'TRIML_CAB': 'no label', 'TRIML_CPRD': 'no label', });
lyr_Outputlinelayer_4.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'Categoria': 'no label', });
lyr_Outputpointlayer_5.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'Categoria': 'no label', });
lyr_Outputpolygonlayer_6.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'Categoria': 'no label', });
lyr_Outputpolygonlayer_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
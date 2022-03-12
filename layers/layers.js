var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reitti_1_1 = new ol.format.GeoJSON();
var features_Reitti_1_1 = format_Reitti_1_1.readFeatures(json_Reitti_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reitti_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reitti_1_1.addFeatures(features_Reitti_1_1);
var lyr_Reitti_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reitti_1_1, 
                style: style_Reitti_1_1,
                interactive: true,
    title: 'Reitti_1<br />\
    <img src="styles/legend/Reitti_1_1_0.png" /> 1<br />\
    <img src="styles/legend/Reitti_1_1_1.png" /> 2<br />\
    <img src="styles/legend/Reitti_1_1_2.png" /> 3<br />\
    <img src="styles/legend/Reitti_1_1_3.png" /> 4<br />\
    <img src="styles/legend/Reitti_1_1_4.png" /> 5<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Reitti_1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Reitti_1_1];
lyr_Reitti_1_1.set('fieldAliases', {'fid': 'fid', 'osuus': 'osuus', 'nro': 'nro', 'km': 'km', });
lyr_Reitti_1_1.set('fieldImages', {'fid': 'TextEdit', 'osuus': 'TextEdit', 'nro': 'Range', 'km': 'TextEdit', });
lyr_Reitti_1_1.set('fieldLabels', {'fid': 'no label', 'osuus': 'no label', 'nro': 'no label', 'km': 'no label', });
lyr_Reitti_1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
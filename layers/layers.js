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
var format_Pyrmatkailureitti1_1 = new ol.format.GeoJSON();
var features_Pyrmatkailureitti1_1 = format_Pyrmatkailureitti1_1.readFeatures(json_Pyrmatkailureitti1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pyrmatkailureitti1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pyrmatkailureitti1_1.addFeatures(features_Pyrmatkailureitti1_1);
var lyr_Pyrmatkailureitti1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pyrmatkailureitti1_1, 
                style: style_Pyrmatkailureitti1_1,
                interactive: true,
    title: 'Pyörämatkailureitti 1<br />\
    <img src="styles/legend/Pyrmatkailureitti1_1_0.png" /> Helsinki - Kirkkonummi<br />\
    <img src="styles/legend/Pyrmatkailureitti1_1_1.png" /> Kirkkonummi - Tammisaari<br />\
    <img src="styles/legend/Pyrmatkailureitti1_1_2.png" /> Salo - Turku<br />\
    <img src="styles/legend/Pyrmatkailureitti1_1_3.png" /> Tammisaari - Salo<br />\
    <img src="styles/legend/Pyrmatkailureitti1_1_4.png" /> Vaihtoehtoinen reitti<br />'
        });
var format_Kartanokierros_2 = new ol.format.GeoJSON();
var features_Kartanokierros_2 = format_Kartanokierros_2.readFeatures(json_Kartanokierros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kartanokierros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kartanokierros_2.addFeatures(features_Kartanokierros_2);
var lyr_Kartanokierros_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kartanokierros_2, 
                style: style_Kartanokierros_2,
                interactive: false,
                title: '<img src="styles/legend/Kartanokierros_2.png" /> Kartanokierros'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pyrmatkailureitti1_1.setVisible(true);lyr_Kartanokierros_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pyrmatkailureitti1_1,lyr_Kartanokierros_2];
lyr_Pyrmatkailureitti1_1.set('fieldAliases', {'fid': 'fid', 'osuus': 'osuus', 'nro': 'nro', 'km': 'km', });
lyr_Kartanokierros_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'km': 'km', });
lyr_Pyrmatkailureitti1_1.set('fieldImages', {'fid': 'TextEdit', 'osuus': 'TextEdit', 'nro': 'Range', 'km': 'TextEdit', });
lyr_Kartanokierros_2.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'km': '', });
lyr_Pyrmatkailureitti1_1.set('fieldLabels', {'fid': 'no label', 'osuus': 'inline label', 'nro': 'no label', 'km': 'inline label', });
lyr_Kartanokierros_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'km': 'no label', });
lyr_Kartanokierros_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
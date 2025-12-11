var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sector_Boundary_1 = new ol.format.GeoJSON();
var features_Sector_Boundary_1 = format_Sector_Boundary_1.readFeatures(json_Sector_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_Boundary_1.addFeatures(features_Sector_Boundary_1);
var lyr_Sector_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector_Boundary_1, 
                style: style_Sector_Boundary_1,
                popuplayertitle: 'Sector_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Sector_Boundary_1.png" /> Sector_Boundary'
            });
var format_Imp_Locations_all_2 = new ol.format.GeoJSON();
var features_Imp_Locations_all_2 = format_Imp_Locations_all_2.readFeatures(json_Imp_Locations_all_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Imp_Locations_all_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Imp_Locations_all_2.addFeatures(features_Imp_Locations_all_2);
var lyr_Imp_Locations_all_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Imp_Locations_all_2, 
                style: style_Imp_Locations_all_2,
                popuplayertitle: 'Imp_Locations_all',
                interactive: true,
    title: 'Imp_Locations_all<br />\
    <img src="styles/legend/Imp_Locations_all_2_0.png" /> ATM<br />\
    <img src="styles/legend/Imp_Locations_all_2_1.png" /> Bank<br />\
    <img src="styles/legend/Imp_Locations_all_2_2.png" /> Govt<br />\
    <img src="styles/legend/Imp_Locations_all_2_3.png" /> Hospital<br />\
    <img src="styles/legend/Imp_Locations_all_2_4.png" /> Recreational<br />\
    <img src="styles/legend/Imp_Locations_all_2_5.png" /> School<br />\
    <img src="styles/legend/Imp_Locations_all_2_6.png" /> Temple<br />\
    <img src="styles/legend/Imp_Locations_all_2_7.png" /> <br />' });
var format_ROW_Poly_3 = new ol.format.GeoJSON();
var features_ROW_Poly_3 = format_ROW_Poly_3.readFeatures(json_ROW_Poly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROW_Poly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROW_Poly_3.addFeatures(features_ROW_Poly_3);
var lyr_ROW_Poly_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROW_Poly_3, 
                style: style_ROW_Poly_3,
                popuplayertitle: 'ROW_Poly',
                interactive: true,
                title: '<img src="styles/legend/ROW_Poly_3.png" /> ROW_Poly'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Sector_Boundary_1.setVisible(true);lyr_Imp_Locations_all_2.setVisible(true);lyr_ROW_Poly_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Sector_Boundary_1,lyr_Imp_Locations_all_2,lyr_ROW_Poly_3];
lyr_Sector_Boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'AREA': 'AREA', 'Name': 'Name', });
lyr_Imp_Locations_all_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'Type': 'Type', });
lyr_ROW_Poly_3.set('fieldAliases', {'Id': 'Id', 'Width': 'Width', 'Sector': 'Sector', });
lyr_Sector_Boundary_1.set('fieldImages', {'OBJECTID': 'Range', 'Id': 'Range', 'AREA': 'TextEdit', 'Name': 'TextEdit', });
lyr_Imp_Locations_all_2.set('fieldImages', {'OBJECTID': 'Range', 'name': 'TextEdit', 'Type': 'TextEdit', });
lyr_ROW_Poly_3.set('fieldImages', {'Id': 'Range', 'Width': 'TextEdit', 'Sector': 'TextEdit', });
lyr_Sector_Boundary_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'AREA': 'no label', 'Name': 'no label', });
lyr_Imp_Locations_all_2.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'Type': 'no label', });
lyr_ROW_Poly_3.set('fieldLabels', {'Id': 'no label', 'Width': 'no label', 'Sector': 'no label', });
lyr_ROW_Poly_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
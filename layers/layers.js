var wms_layers = [];

var format_Areas_0 = new ol.format.GeoJSON();
var features_Areas_0 = format_Areas_0.readFeatures(json_Areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_0.addFeatures(features_Areas_0);
var lyr_Areas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_0, 
                style: style_Areas_0,
                popuplayertitle: "Areas",
                interactive: true,
                title: '<img src="styles/legend/Areas_0.png" /> Areas'
            });

lyr_Areas_0.setVisible(true);
var layersList = [lyr_Areas_0];
lyr_Areas_0.set('fieldAliases', {'PROV_NAME_': 'PROV_NAME_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'men': 'men', 'women': 'women', 'م': 'م', 'men2': 'men2', 'women_1': 'women_1', 'area': 'area', });
lyr_Areas_0.set('fieldImages', {'PROV_NAME_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'men': 'TextEdit', 'women': 'TextEdit', 'م': 'TextEdit', 'men2': 'TextEdit', 'women_1': 'TextEdit', 'area': 'TextEdit', });
lyr_Areas_0.set('fieldLabels', {'PROV_NAME_': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', 'men': 'inline label - always visible', 'women': 'inline label - always visible', 'م': 'hidden field', 'men2': 'hidden field', 'women_1': 'hidden field', 'area': 'hidden field', });
lyr_Areas_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
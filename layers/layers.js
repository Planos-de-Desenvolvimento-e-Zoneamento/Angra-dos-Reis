ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-44.324812, -23.016446, -44.306733, -23.006426]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_Fundeadouros_2 = new ol.format.GeoJSON();
var features_Fundeadouros_2 = format_Fundeadouros_2.readFeatures(json_Fundeadouros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fundeadouros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundeadouros_2.addFeatures(features_Fundeadouros_2);
var lyr_Fundeadouros_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fundeadouros_2, 
                style: style_Fundeadouros_2,
                popuplayertitle: 'Fundeadouros',
                interactive: true,
                title: '<img src="styles/legend/Fundeadouros_2.png" /> Fundeadouros'
            });
var format_BaciasdeEvoluoLongoPrazo_3 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_3 = format_BaciasdeEvoluoLongoPrazo_3.readFeatures(json_BaciasdeEvoluoLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_3.addFeatures(features_BaciasdeEvoluoLongoPrazo_3);
var lyr_BaciasdeEvoluoLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_3, 
                style: style_BaciasdeEvoluoLongoPrazo_3,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_3.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_4 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_4 = format_BaciasdeEvoluoMdioPrazo_4.readFeatures(json_BaciasdeEvoluoMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_4.addFeatures(features_BaciasdeEvoluoMdioPrazo_4);
var lyr_BaciasdeEvoluoMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_4, 
                style: style_BaciasdeEvoluoMdioPrazo_4,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_4.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_5 = format_BaciasdeEvoluoCurtoPrazo_5.readFeatures(json_BaciasdeEvoluoCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_5.addFeatures(features_BaciasdeEvoluoCurtoPrazo_5);
var lyr_BaciasdeEvoluoCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_5, 
                style: style_BaciasdeEvoluoCurtoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_5.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_6 = format_BaciasdeEvoluoSituaoAtual_6.readFeatures(json_BaciasdeEvoluoSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_6.addFeatures(features_BaciasdeEvoluoSituaoAtual_6);
var lyr_BaciasdeEvoluoSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_6, 
                style: style_BaciasdeEvoluoSituaoAtual_6,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_6.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_7 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_7 = format_CanaisdeAcessoLongoPrazo_7.readFeatures(json_CanaisdeAcessoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_7.addFeatures(features_CanaisdeAcessoLongoPrazo_7);
var lyr_CanaisdeAcessoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_7, 
                style: style_CanaisdeAcessoLongoPrazo_7,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_7.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_8 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_8 = format_CanaisdeAcessoMdioPrazo_8.readFeatures(json_CanaisdeAcessoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_8.addFeatures(features_CanaisdeAcessoMdioPrazo_8);
var lyr_CanaisdeAcessoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_8, 
                style: style_CanaisdeAcessoMdioPrazo_8,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_8.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_9 = format_CanaisdeAcessoCurtoPrazo_9.readFeatures(json_CanaisdeAcessoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_9.addFeatures(features_CanaisdeAcessoCurtoPrazo_9);
var lyr_CanaisdeAcessoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_9, 
                style: style_CanaisdeAcessoCurtoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_9.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_10 = format_CanaisdeAcessoSituaoAtual_10.readFeatures(json_CanaisdeAcessoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_10.addFeatures(features_CanaisdeAcessoSituaoAtual_10);
var lyr_CanaisdeAcessoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_10, 
                style: style_CanaisdeAcessoSituaoAtual_10,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_10.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosRodoviriosInternos_11 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternos_11 = format_AcessosRodoviriosInternos_11.readFeatures(json_AcessosRodoviriosInternos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternos_11.addFeatures(features_AcessosRodoviriosInternos_11);
var lyr_AcessosRodoviriosInternos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternos_11, 
                style: style_AcessosRodoviriosInternos_11,
                popuplayertitle: 'Acessos Rodoviários Internos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternos_11.png" /> Acessos Rodoviários Internos '
            });
var format_AcessosRodoviriosExternos_12 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_12 = format_AcessosRodoviriosExternos_12.readFeatures(json_AcessosRodoviriosExternos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_12.addFeatures(features_AcessosRodoviriosExternos_12);
var lyr_AcessosRodoviriosExternos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_12, 
                style: style_AcessosRodoviriosExternos_12,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_12.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndireta_16 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndireta_16 = format_reasNoAfetassOperaesPorturiasemExploraoIndireta_16.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndireta_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndireta_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndireta_16.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndireta_16);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndireta_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndireta_16, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndireta_16,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndireta_16.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta'
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_17 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_17 = format_reasNoAfetassOperaesPorturiasLongoPrazo_17.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_17.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_17);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_17, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_17,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_17.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_18 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_18 = format_reasNoAfetassOperaesPorturiasMdioPrazo_18.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_18.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_18);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_18, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_18,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_18.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_19 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_19 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_19.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_19.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_19);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_19, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_19,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_19.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_20 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_20 = format_reasNoAfetassOperaesPorturiasSituaoAtual_20.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_20.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_20);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_20, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_20,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_20.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_reaseInstalaesAlfandegadas_21 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_21 = format_reaseInstalaesAlfandegadas_21.readFeatures(json_reaseInstalaesAlfandegadas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_21.addFeatures(features_reaseInstalaesAlfandegadas_21);
var lyr_reaseInstalaesAlfandegadas_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_21, 
                style: style_reaseInstalaesAlfandegadas_21,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_21.png" /> Áreas e Instalações Alfandegadas '
            });
var format_AcostagemLongoPrazo_22 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_22 = format_AcostagemLongoPrazo_22.readFeatures(json_AcostagemLongoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_22.addFeatures(features_AcostagemLongoPrazo_22);
var lyr_AcostagemLongoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_22, 
                style: style_AcostagemLongoPrazo_22,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_22.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_23 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_23 = format_AcostagemMdioPrazo_23.readFeatures(json_AcostagemMdioPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_23.addFeatures(features_AcostagemMdioPrazo_23);
var lyr_AcostagemMdioPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_23, 
                style: style_AcostagemMdioPrazo_23,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_23.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_24 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_24 = format_AcostagemCurtoPrazo_24.readFeatures(json_AcostagemCurtoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_24.addFeatures(features_AcostagemCurtoPrazo_24);
var lyr_AcostagemCurtoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_24, 
                style: style_AcostagemCurtoPrazo_24,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_24.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_25 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_25 = format_AcostagemSituaoAtual_25.readFeatures(json_AcostagemSituaoAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_25.addFeatures(features_AcostagemSituaoAtual_25);
var lyr_AcostagemSituaoAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_25, 
                style: style_AcostagemSituaoAtual_25,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_25.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_26 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_26 = format_ArmazenagemLongoPrazo_26.readFeatures(json_ArmazenagemLongoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_26.addFeatures(features_ArmazenagemLongoPrazo_26);
var lyr_ArmazenagemLongoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_26, 
                style: style_ArmazenagemLongoPrazo_26,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_26.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_27 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_27 = format_ArmazenagemMdioPrazo_27.readFeatures(json_ArmazenagemMdioPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_27.addFeatures(features_ArmazenagemMdioPrazo_27);
var lyr_ArmazenagemMdioPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_27, 
                style: style_ArmazenagemMdioPrazo_27,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_27.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_28 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_28 = format_ArmazenagemCurtoPrazo_28.readFeatures(json_ArmazenagemCurtoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_28.addFeatures(features_ArmazenagemCurtoPrazo_28);
var lyr_ArmazenagemCurtoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_28, 
                style: style_ArmazenagemCurtoPrazo_28,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_28.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_29 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_29 = format_ArmazenagemSituaoAtual_29.readFeatures(json_ArmazenagemSituaoAtual_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_29.addFeatures(features_ArmazenagemSituaoAtual_29);
var lyr_ArmazenagemSituaoAtual_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_29, 
                style: style_ArmazenagemSituaoAtual_29,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_29.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadas_34 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadas_34 = format_reasAfetassOperaesPorturiasArrendadas_34.readFeatures(json_reasAfetassOperaesPorturiasArrendadas_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadas_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadas_34.addFeatures(features_reasAfetassOperaesPorturiasArrendadas_34);
var lyr_reasAfetassOperaesPorturiasArrendadas_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadas_34, 
                style: style_reasAfetassOperaesPorturiasArrendadas_34,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadas_34.png" /> Áreas Afetas às Operações Portuárias Arrendadas'
            });
var format_CargaGeralOffshorePassageiros_35 = new ol.format.GeoJSON();
var features_CargaGeralOffshorePassageiros_35 = format_CargaGeralOffshorePassageiros_35.readFeatures(json_CargaGeralOffshorePassageiros_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralOffshorePassageiros_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralOffshorePassageiros_35.addFeatures(features_CargaGeralOffshorePassageiros_35);
var lyr_CargaGeralOffshorePassageiros_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralOffshorePassageiros_35, 
                style: style_CargaGeralOffshorePassageiros_35,
                popuplayertitle: 'Carga Geral/ Offshore/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralOffshorePassageiros_35.png" /> Carga Geral/ Offshore/Passageiros'
            });
var format_CargadeApoioOffshore_36 = new ol.format.GeoJSON();
var features_CargadeApoioOffshore_36 = format_CargadeApoioOffshore_36.readFeatures(json_CargadeApoioOffshore_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargadeApoioOffshore_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargadeApoioOffshore_36.addFeatures(features_CargadeApoioOffshore_36);
var lyr_CargadeApoioOffshore_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargadeApoioOffshore_36, 
                style: style_CargadeApoioOffshore_36,
                popuplayertitle: 'Carga de Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargadeApoioOffshore_36.png" /> Carga de Apoio Offshore'
            });
var format_CargasPassageiros_37 = new ol.format.GeoJSON();
var features_CargasPassageiros_37 = format_CargasPassageiros_37.readFeatures(json_CargasPassageiros_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargasPassageiros_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargasPassageiros_37.addFeatures(features_CargasPassageiros_37);
var lyr_CargasPassageiros_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargasPassageiros_37, 
                style: style_CargasPassageiros_37,
                popuplayertitle: 'Cargas/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargasPassageiros_37.png" /> Cargas/Passageiros'
            });
var format_CargaGeralOffshorePassageiros_38 = new ol.format.GeoJSON();
var features_CargaGeralOffshorePassageiros_38 = format_CargaGeralOffshorePassageiros_38.readFeatures(json_CargaGeralOffshorePassageiros_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeralOffshorePassageiros_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeralOffshorePassageiros_38.addFeatures(features_CargaGeralOffshorePassageiros_38);
var lyr_CargaGeralOffshorePassageiros_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeralOffshorePassageiros_38, 
                style: style_CargaGeralOffshorePassageiros_38,
                popuplayertitle: 'Carga Geral/ Offshore/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargaGeralOffshorePassageiros_38.png" /> Carga Geral/ Offshore/Passageiros'
            });
var format_CargadeApoioOffshore_39 = new ol.format.GeoJSON();
var features_CargadeApoioOffshore_39 = format_CargadeApoioOffshore_39.readFeatures(json_CargadeApoioOffshore_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargadeApoioOffshore_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargadeApoioOffshore_39.addFeatures(features_CargadeApoioOffshore_39);
var lyr_CargadeApoioOffshore_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargadeApoioOffshore_39, 
                style: style_CargadeApoioOffshore_39,
                popuplayertitle: 'Carga de Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargadeApoioOffshore_39.png" /> Carga de Apoio Offshore'
            });
var format_CargasPassageiros_40 = new ol.format.GeoJSON();
var features_CargasPassageiros_40 = format_CargasPassageiros_40.readFeatures(json_CargasPassageiros_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargasPassageiros_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargasPassageiros_40.addFeatures(features_CargasPassageiros_40);
var lyr_CargasPassageiros_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargasPassageiros_40, 
                style: style_CargasPassageiros_40,
                popuplayertitle: 'Cargas/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargasPassageiros_40.png" /> Cargas/Passageiros'
            });
var format_CargadeApoioOffshore_41 = new ol.format.GeoJSON();
var features_CargadeApoioOffshore_41 = format_CargadeApoioOffshore_41.readFeatures(json_CargadeApoioOffshore_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargadeApoioOffshore_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargadeApoioOffshore_41.addFeatures(features_CargadeApoioOffshore_41);
var lyr_CargadeApoioOffshore_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargadeApoioOffshore_41, 
                style: style_CargadeApoioOffshore_41,
                popuplayertitle: 'Carga de Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargadeApoioOffshore_41.png" /> Carga de Apoio Offshore'
            });
var format_CargasPassageiros_42 = new ol.format.GeoJSON();
var features_CargasPassageiros_42 = format_CargasPassageiros_42.readFeatures(json_CargasPassageiros_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargasPassageiros_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargasPassageiros_42.addFeatures(features_CargasPassageiros_42);
var lyr_CargasPassageiros_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargasPassageiros_42, 
                style: style_CargasPassageiros_42,
                popuplayertitle: 'Cargas/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargasPassageiros_42.png" /> Cargas/Passageiros'
            });
var format_CargadeApoioOffshore_43 = new ol.format.GeoJSON();
var features_CargadeApoioOffshore_43 = format_CargadeApoioOffshore_43.readFeatures(json_CargadeApoioOffshore_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargadeApoioOffshore_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargadeApoioOffshore_43.addFeatures(features_CargadeApoioOffshore_43);
var lyr_CargadeApoioOffshore_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargadeApoioOffshore_43, 
                style: style_CargadeApoioOffshore_43,
                popuplayertitle: 'Carga de Apoio Offshore',
                interactive: true,
                title: '<img src="styles/legend/CargadeApoioOffshore_43.png" /> Carga de Apoio Offshore'
            });
var format_CargasPassageiros_44 = new ol.format.GeoJSON();
var features_CargasPassageiros_44 = format_CargasPassageiros_44.readFeatures(json_CargasPassageiros_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargasPassageiros_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargasPassageiros_44.addFeatures(features_CargasPassageiros_44);
var lyr_CargasPassageiros_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargasPassageiros_44, 
                style: style_CargasPassageiros_44,
                popuplayertitle: 'Cargas/Passageiros',
                interactive: true,
                title: '<img src="styles/legend/CargasPassageiros_44.png" /> Cargas/Passageiros'
            });
var format_Multiuso_45 = new ol.format.GeoJSON();
var features_Multiuso_45 = format_Multiuso_45.readFeatures(json_Multiuso_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multiuso_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiuso_45.addFeatures(features_Multiuso_45);
var lyr_Multiuso_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiuso_45, 
                style: style_Multiuso_45,
                popuplayertitle: 'Multiuso',
                interactive: true,
                title: '<img src="styles/legend/Multiuso_45.png" /> Multiuso'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_46 = format_reasAfetassOperaesPorturiasLongoPrazo_46.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_46.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_46);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_46, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_46.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_47 = format_reasAfetassOperaesPorturiasMdioPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_47);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_47, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_47.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_48 = format_reasAfetassOperaesPorturiasCurtoPrazo_48.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_48.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_48);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_48, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_48.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_49 = format_reasAfetassOperaesPorturiasSituaoAtual_49.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_49.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_49);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_49, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_49.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeAngradosReis_50 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeAngradosReis_50 = format_PoligonaldareadoPortoOrganizadodeAngradosReis_50.readFeatures(json_PoligonaldareadoPortoOrganizadodeAngradosReis_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeAngradosReis_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeAngradosReis_50.addFeatures(features_PoligonaldareadoPortoOrganizadodeAngradosReis_50);
var lyr_PoligonaldareadoPortoOrganizadodeAngradosReis_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeAngradosReis_50, 
                style: style_PoligonaldareadoPortoOrganizadodeAngradosReis_50,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Angra dos Reis',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeAngradosReis_50.png" /> Poligonal da Área do Porto Organizado de Angra dos Reis'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeAngradosReis_50,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_46,lyr_reasAfetassOperaesPorturiasMdioPrazo_47,lyr_reasAfetassOperaesPorturiasCurtoPrazo_48,lyr_reasAfetassOperaesPorturiasSituaoAtual_49,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_CargadeApoioOffshore_43,lyr_CargasPassageiros_44,lyr_Multiuso_45,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_CargadeApoioOffshore_41,lyr_CargasPassageiros_42,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralOffshorePassageiros_38,lyr_CargadeApoioOffshore_39,lyr_CargasPassageiros_40,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_CargaGeralOffshorePassageiros_35,lyr_CargadeApoioOffshore_36,lyr_CargasPassageiros_37,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadas_34,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_26,lyr_ArmazenagemMdioPrazo_27,lyr_ArmazenagemCurtoPrazo_28,lyr_ArmazenagemSituaoAtual_29,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_22,lyr_AcostagemMdioPrazo_23,lyr_AcostagemCurtoPrazo_24,lyr_AcostagemSituaoAtual_25,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_21,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_17,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_18,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_19,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_20,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias'});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndireta_16,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_12,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternos_11,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_7,lyr_CanaisdeAcessoMdioPrazo_8,lyr_CanaisdeAcessoCurtoPrazo_9,lyr_CanaisdeAcessoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_3,lyr_BaciasdeEvoluoMdioPrazo_4,lyr_BaciasdeEvoluoCurtoPrazo_5,lyr_BaciasdeEvoluoSituaoAtual_6,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_Fundeadouros_2,],
                                fold: 'open',
                                title: 'Fundeadouros'});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_Fundeadouros_2.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_3.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_4.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_6.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_7.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_8.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_9.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_10.setVisible(false);lyr_AcessosRodoviriosInternos_11.setVisible(false);lyr_AcessosRodoviriosExternos_12.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndireta_16.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_17.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_18.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_19.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_20.setVisible(false);lyr_reaseInstalaesAlfandegadas_21.setVisible(false);lyr_AcostagemLongoPrazo_22.setVisible(false);lyr_AcostagemMdioPrazo_23.setVisible(false);lyr_AcostagemCurtoPrazo_24.setVisible(false);lyr_AcostagemSituaoAtual_25.setVisible(false);lyr_ArmazenagemLongoPrazo_26.setVisible(false);lyr_ArmazenagemMdioPrazo_27.setVisible(false);lyr_ArmazenagemCurtoPrazo_28.setVisible(false);lyr_ArmazenagemSituaoAtual_29.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadas_34.setVisible(false);lyr_CargaGeralOffshorePassageiros_35.setVisible(false);lyr_CargadeApoioOffshore_36.setVisible(false);lyr_CargasPassageiros_37.setVisible(false);lyr_CargaGeralOffshorePassageiros_38.setVisible(false);lyr_CargadeApoioOffshore_39.setVisible(false);lyr_CargasPassageiros_40.setVisible(false);lyr_CargadeApoioOffshore_41.setVisible(false);lyr_CargasPassageiros_42.setVisible(false);lyr_CargadeApoioOffshore_43.setVisible(false);lyr_CargasPassageiros_44.setVisible(false);lyr_Multiuso_45.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_46.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_48.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_49.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeAngradosReis_50.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_reaseInstalaesAlfandegadas,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Decreto': 'Instrumento Legal ', 'Área(m²)': 'Área (m²) ', });
lyr_Fundeadouros_2.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_3.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_4.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_5.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_6.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_7.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_8.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_9.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosRodoviriosInternos_11.set('fieldAliases', {'id': 'Identificação ', 'Nome': 'Nome', 'N° Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_12.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13.set('fieldAliases', {'Nome': 'Nome', 'Área(m²)': 'Área (m²) ', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14.set('fieldAliases', {'Nome': 'Nome', 'Área(m²)': 'Área (m²) ', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Área(m²)': 'Área (m²) ', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndireta_16.set('fieldAliases', {'Nome': 'Nome', 'Destinaç�': 'Destinação ', 'Área(m²)': 'Área (m²) ', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Início': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Destinaç�': 'Destinação ', 'Área(m²)': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_18.set('fieldAliases', {'Nome': 'Nome', 'Destinaç�': 'Destinação ', 'Área(m²)': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_19.set('fieldAliases', {'Nome': 'Nome', 'Destinaç�': 'Destinação ', 'Área(m²)': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_20.set('fieldAliases', {'Nome': 'Nome', 'Destinaç�': 'Destinação ', 'Área(m²)': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadas_21.set('fieldAliases', {'Nome': 'Nome', 'Ins. Legal': 'Instrumento Legal ', });
lyr_AcostagemLongoPrazo_22.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Características Construtivas ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_23.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_24.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_25.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_26.set('fieldAliases', {'Capacidade': 'Capacidade', 'T. Instal.': 'Tipo da Instalação ', 'Área(m²)': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_27.set('fieldAliases', {'Capacidade': 'Capacidade', 'T. Instal.': 'Tipo da Instalação ', 'Área(m²)': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_28.set('fieldAliases', {'Capacidade': 'Capacidade', 'T. Instal.': 'Tipo da Instalação ', 'Área(m²)': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_29.set('fieldAliases', {'Capacidade': 'Capacidade', 'T. Instal.': 'Tipo da Instalação ', 'Área(m²)': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadas_34.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'Perfil': 'Perfil de Carga ', 'D.Inicio': 'Data Início do Contrato ', 'D.Term.': 'Data do Término do Contrato ', 'Nº Cont.': 'Número do Contrato ', 'Área': 'Área (m²) ', 'P. Prorrog': 'Possibilidade de Prorrogação ', });
lyr_CargaGeralOffshorePassageiros_35.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'area': 'Área (m²) ', });
lyr_CargadeApoioOffshore_36.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'area': 'Área (m²) ', });
lyr_CargasPassageiros_37.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'area': 'Área (m²) ', });
lyr_CargaGeralOffshorePassageiros_38.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'area': 'Área (m²) ', });
lyr_CargadeApoioOffshore_39.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'area': 'Área (m²) ', });
lyr_CargasPassageiros_40.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'area': 'Área (m²) ', });
lyr_CargadeApoioOffshore_41.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CargasPassageiros_42.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CargadeApoioOffshore_43.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_CargasPassageiros_44.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_Multiuso_45.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_46.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_47.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_48.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'area': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_49.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Área': 'Área (m²) ', });
lyr_PoligonaldareadoPortoOrganizadodeAngradosReis_50.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Decreto': 'TextEdit', 'Área(m²)': 'TextEdit', });
lyr_Fundeadouros_2.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_3.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_4.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_5.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_6.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_7.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_8.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_9.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosRodoviriosInternos_11.set('fieldImages', {'id': 'Range', 'Nome': 'TextEdit', 'N° Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_12.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13.set('fieldImages', {'Nome': 'TextEdit', 'Área(m²)': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14.set('fieldImages', {'Nome': 'TextEdit', 'Área(m²)': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15.set('fieldImages', {'Nome': 'TextEdit', 'Área(m²)': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndireta_16.set('fieldImages', {'Nome': 'TextEdit', 'Destinaç�': 'TextEdit', 'Área(m²)': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'D. Início': 'TextEdit', 'D. Term.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Destinaç�': 'TextEdit', 'Área(m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_18.set('fieldImages', {'Nome': 'TextEdit', 'Destinaç�': 'TextEdit', 'Área(m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_19.set('fieldImages', {'Nome': 'TextEdit', 'Destinaç�': 'TextEdit', 'Área(m²)': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_20.set('fieldImages', {'Nome': 'TextEdit', 'Destinaç�': 'TextEdit', 'Área(m²)': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_21.set('fieldImages', {'Nome': 'TextEdit', 'Ins. Legal': 'TextEdit', });
lyr_AcostagemLongoPrazo_22.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_23.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_24.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_25.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_26.set('fieldImages', {'Capacidade': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área(m²)': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_27.set('fieldImages', {'Capacidade': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área(m²)': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_28.set('fieldImages', {'Capacidade': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área(m²)': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_29.set('fieldImages', {'Capacidade': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área(m²)': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadas_34.set('fieldImages', {'Arrend.': 'TextEdit', 'Perfil': 'TextEdit', 'D.Inicio': 'TextEdit', 'D.Term.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'Área': 'TextEdit', 'P. Prorrog': 'TextEdit', });
lyr_CargaGeralOffshorePassageiros_35.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'area': 'TextEdit', });
lyr_CargadeApoioOffshore_36.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'area': 'TextEdit', });
lyr_CargasPassageiros_37.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'area': 'TextEdit', });
lyr_CargaGeralOffshorePassageiros_38.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'area': 'TextEdit', });
lyr_CargadeApoioOffshore_39.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'area': 'TextEdit', });
lyr_CargasPassageiros_40.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'area': 'TextEdit', });
lyr_CargadeApoioOffshore_41.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargasPassageiros_42.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargadeApoioOffshore_43.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargasPassageiros_44.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Multiuso_45.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_46.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'área': '', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_47.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'área': '', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_48.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_49.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeAngradosReis_50.set('fieldImages', {'Ins. Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Decreto': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', });
lyr_Fundeadouros_2.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_3.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_4.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_5.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_6.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_7.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_8.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_9.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternos_11.set('fieldLabels', {'id': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'N° Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_12.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_13.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_14.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndireta_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_22.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_23.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_24.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_25.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_26.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_27.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_28.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_29.set('fieldLabels', {'Capacidade': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área(m²)': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadas_34.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'D.Inicio': 'inline label - visible with data', 'D.Term.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', });
lyr_CargaGeralOffshorePassageiros_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_CargadeApoioOffshore_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_CargasPassageiros_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_CargaGeralOffshorePassageiros_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_CargadeApoioOffshore_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_CargasPassageiros_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_CargadeApoioOffshore_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargasPassageiros_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargadeApoioOffshore_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargasPassageiros_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Multiuso_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAngradosReis_50.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAngradosReis_50.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
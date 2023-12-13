
//mmw._common.setType('hybrid');
//mmw._common.setType('none');

mmw.map.on('load', async function() {

	// Village
	mmw.map.addSource('India5', { 'type' : 'vector', 'url' : 'pmtiles://../mmn/data/IND/pmt/IND-ADM5.pmtiles', "attribution" : '<a href="https://geoboundaries.org">geoboundaries</a>'});
	/*
	var fillLayer = newFillLayer('India5', 'white', .5);
	fillLayer['source-layer'] = 'INDADM5';
	mmw.map.addLayer(fillLayer);

	mmw.map.setFilter('India5-fills', ['==', 'shapeName', 'Hisar (M Cl + OG)' ] );
	//mmw.map.setFilter('India5-fills', ['==', 'shapeName', 'Bir Hisar(145)' ] );
	*/
	var lineLayer = newLineLayer('India5', 'lightblue', 1);
	lineLayer['source-layer'] = 'INDADM5';
	mmw.map.addLayer(lineLayer);

	mmw.map.setFilter('India5-lines', ['==', 'shapeName', 'Hisar (M Cl + OG)' ] );
	
	
	// Block
	mmw.map.addSource('India4', {'type' : 'vector', 'url' : 'pmtiles://../mmn/data/IND/pmt/IND-ADM4.pmtiles', "attribution" : '<a href="https://geoboundaries.org">geoboundaries</a>' });
	/*
	var fillLayer = newFillLayer('India4', 'white', .1);
	fillLayer['source-layer'] = 'INDADM4';
	mmw.map.addLayer(fillLayer);
	*/
	var lineLayer = newLineLayer('India4', 'cyan', 1.5);
	lineLayer['source-layer'] = 'INDADM4';
	mmw.map.addLayer(lineLayer);

	mmw.map.setFilter('India4-lines', ['==', 'shapeName', 'Hisar-I' ] );

	// Sub-District
	mmw.map.addSource('India3', { 'type' : 'vector', 'url' : 'pmtiles://../mmn/data/IND/pmt/IND-ADM3.pmtiles',"attribution" : '<a href="https://geoboundaries.org">geoboundaries</a>'});
	/*
	var fillLayer = newFillLayer('India3', 'white', .1);
	fillLayer['source-layer'] = 'INDADM3';
	mmw.map.addLayer(fillLayer);
	*/
	var lineLayer = newLineLayer('India3', 'gray', 2);
	lineLayer['source-layer'] = 'INDADM3';
	mmw.map.addLayer(lineLayer);
	
	mmw.map.setFilter('India3-lines', ['==', 'shapeName', 'Hisar' ] );
	//mmw.map.setFilter('India3-lines', ['==', 'shapeName', 'Barwala' ] );

	// District
	mmw.map.addSource('India2', { 'type' : 'vector', 'url' : 'pmtiles://../mmn/data/IND/pmt/IND-ADM2.pmtiles',"attribution" : '<a href="https://geoboundaries.org">geoboundaries</a>'});
	/*
	var fillLayer = newFillLayer('India2', 'white', .1);
	fillLayer['source-layer'] = 'INDADM2';
	mmw.map.addLayer(fillLayer);
	*/
	var lineLayer = newLineLayer('India2', 'red', 2.5);
	lineLayer['source-layer'] = 'INDADM2';
	mmw.map.addLayer(lineLayer);
	
	mmw.map.setFilter('India2-lines', ['==', 'shapeName', 'Hisar' ] );

	// State
	mmw.map.addSource('India1', { 'type' : 'vector', 'url' : 'pmtiles://../mmn/data/IND/pmt/IND-ADM1.pmtiles',"attribution" : '<a href="https://geoboundaries.org">geoboundaries</a>'});
	/*
	var fillLayer = newFillLayer('India1', 'white', .1);
	fillLayer['source-layer'] = 'INDADM1';
	mmw.map.addLayer(fillLayer);
	*/	
	var lineLayer = newLineLayer('India1', 'orange', 3);
	lineLayer['source-layer'] = 'INDADM1';
	mmw.map.addLayer(lineLayer);
	
	mmw.map.setFilter('India1-lines', ['==', 'shapeName', 'Haryāna' ] );


	// Country
	mmw.map.addSource('India', { 'type' : 'geojson', 'data' : '../mmn/data/IND/geo/IND-ADM0.geojson',"attribution" : '<a href="https://geoboundaries.org">geoboundaries</a>'});
	/*
	var fillLayer = newFillLayer('India', 'white', .1);
	mmw.map.addLayer(fillLayer);
	*/	
	var lineLayer = newLineLayer('India', 'blue', 5);
	mmw.map.addLayer(lineLayer);
	

});


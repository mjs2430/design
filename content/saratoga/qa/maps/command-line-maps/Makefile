# Data manipulation

tmp/states-raw.json:
	shp2json -o $@ shapefile/ne_110m_admin_1_states_provinces.shp

tmp/states-albers.json: tmp/states-raw.json
	geoproject 'd3.geoAlbersUsa()' < $^ > $@

tmp/states-albers.ndjson: tmp/states-albers.json
	ndjson-split 'd.features' < $^ > $@

tmp/states-albers-name.ndjson: tmp/states-albers.ndjson
	ndjson-map 'd.name = d.properties.name, d' < $^ > $@

tmp/reading.json:
	dsv2json reading.csv > $@

tmp/reading.ndjson: tmp/reading.json
	ndjson-cat $^ | ndjson-split > $@

tmp/states-albers-join.ndjson: tmp/states-albers-name.ndjson tmp/reading.ndjson
	ndjson-join 'd.name' $^ > $@

tmp/states.ndjson: tmp/states-albers-join.ndjson
	ndjson-map 'd[0].properties = d[1], d[0]' < $^ > $@

# Convert to TopoJSON

tmp/states.topo.json: tmp/states.ndjson
	geo2topo -n $^ > $@

tmp/states-simple.topo.json: tmp/states.topo.json
	toposimplify -p 1 -f < $^ > $@

tmp/states-quant.topo.json: tmp/states-simple.topo.json
	topoquantize 1e5 < $^ > $@

# SVG Outputs

white.svg: tmp/states-quant.topo.json
	topo2geo states=- < $^ \
		| ndjson-map -r d3 'z = d3.scaleLinear().range(["#B1B9EA", "#31409F"]).domain([10, 50]), d.features.forEach(f => f.properties.fill = z(f.properties.white)), d' \
		| ndjson-split 	'd.features' \
		| geo2svg -n > $@

black.svg: tmp/states-quant.topo.json
	topo2geo states=- < $^ \
		| ndjson-map -r d3 'z = d3.scaleLinear().range(["#B1B9EA", "#31409F"]).domain([10, 50]), d.features.forEach(f => f.properties.fill = z(f.properties.black)), d' \
		| ndjson-split 	'd.features' \
		| geo2svg -n > $@

hispanic.svg: tmp/states-quant.topo.json
	topo2geo states=- < $^ \
		| ndjson-map -r d3 'z = d3.scaleLinear().range(["#B1B9EA", "#31409F"]).domain([10, 50]), d.features.forEach(f => f.properties.fill = z(f.properties.hispanic)), d' \
		| ndjson-split 	'd.features' \
		| geo2svg -n > $@

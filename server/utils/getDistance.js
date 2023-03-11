
 // Converts numeric degrees to radians
 const toRad = value => value * Math.PI / 180;

 const toRadians = val => {
    var PI = 3.1415926535;
    return val / 180.0 * PI;
}


module.exports =  (geo) => {

    let {lat1, lon1, lat2, lon2, unit} = geo;

    if ((lat1 == lat2) && (lon1 == lon2)) return 0;

    const R = 6371; // km

    const dLat = toRad(lat2-lat1);
	const dLon = toRad(lon2-lon1);
	
    lat1 = toRad(lat1);
	lat2 = toRad(lat2);
	
   	const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	const d = R * c;
	
	return d.toFixed(1);
	
}
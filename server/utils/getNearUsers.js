

const KGetDistance = require('../utils/getDistance');

const FilterUsersByGeo = (filterGeo, users, next ) => {

    const Users = [];

    if (filterGeo) {
        if (typeof filterGeo === 'string') filterGeo = JSON.parse(filterGeo);

        const KFilterGeoLat    = +filterGeo.lat;
        const KFilterGeoLog    = +filterGeo.log;
        
        if (!KFilterGeoLat || !KFilterGeoLog) {
            return {error: 'lat and log is required in a geo object'}
        }

        for (let i in Users) {
            if(Users[i].coordinate) {
                const userCoordinates = Users[i].coordinate.split(',');
                const isValidLength   = userCoordinates.length === 2;
                const userLat = isValidLength  ? +userCoordinates[0] : null;
                const userLog = isValidLength  ? +userCoordinates[1] : null;

                const KCulculatedRadius = KGetDistance({
                    lat1: userLat,
                    lon1: userLog,
                    lat2: KFilterGeoLat,
                    lon2: KFilterGeoLog,
                    unit: 'K'
                });

                Users[i].away_from_you_in_km = `${KCulculatedRadius} km`;
                Users[i].away_from_you = `${KCulculatedRadius}`;
              
            }//End of if condition

        }//End of for of loop

    }//End of filterGeo if

    return users.sort( (a, b) => {

        const KFAway_from_you = a.away_from_you;
        const KSAway_from_you = b.away_from_you;

        return KFAway_from_you - KSAway_from_you;

    });


}//End of FilterParkingByGeo function
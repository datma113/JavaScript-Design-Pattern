/**
 * Client -- In example code: the run() function
 * calls Proxy to request an operation
 *
 * Proxy -- In example code: GeoProxy
 * provides an interface similar to the real object
 * maintains a reference that lets the proxy access the real object
 * handles requests and forwards these to the real object
 *
 * RealSubject -- In example code: GeoCoder
 * defines the real object for which service is requested
 */

function GeoCoder() {
    this.getLatLngOfCity = function (nameCity) {
        //return a (String) latitue and longitute of city

        const CITY_NOT_EXIST = "not found city";
        const latLngOfCity = {
            Amsterdam: "52.3700° N, 4.8900° E",
            London: "51.5171° N, 0.1062° W",
            Paris: "48.8742° N, 2.3470° E",
            Berlin: "52.5233° N, 13.4127° E",
        };
        return latLngOfCity[nameCity] || CITY_NOT_EXIST;
    };
}

function GeoProxy() {
    let geoCoder = new GeoCoder();
    let currentGeoCache = {};

    return {
        getLatLngOfCity: function (nameCity) {
            if (!currentGeoCache[nameCity])
                currentGeoCache[nameCity] = geoCoder.getLatLngOfCity(nameCity);
            return currentGeoCache[nameCity];
        },
        getTimesOfRequestToGeoCoder: function () {
            let timesOfRequest = 0;
            for (let i in currentGeoCache) timesOfRequest++;
            return timesOfRequest;
        },
    };
}

const geoProxy = new GeoProxy();
geoProxy.getLatLngOfCity("Paris");
geoProxy.getLatLngOfCity("London");
geoProxy.getLatLngOfCity("London");
geoProxy.getLatLngOfCity("London");
geoProxy.getLatLngOfCity("London");
geoProxy.getLatLngOfCity("Amsterdam");
geoProxy.getLatLngOfCity("Amsterdam");
geoProxy.getLatLngOfCity("Amsterdam");
geoProxy.getLatLngOfCity("Amsterdam");
geoProxy.getLatLngOfCity("London");
geoProxy.getLatLngOfCity("London");

console.log("\nCache size: " + geoProxy.getTimesOfRequestToGeoCoder());

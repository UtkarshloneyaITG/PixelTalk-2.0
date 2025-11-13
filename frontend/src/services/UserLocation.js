function getLocation() {
    try {
        if (!navigator.geolocation) {
            console.error("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                console.log("Latitude:", lat, "Longitude:", lon);
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.error("The request to get user location timed out.");
                        break;
                    default:
                        console.error("An unknown error occurred while fetching location.");
                        break;
                }
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } 
        );
    } catch (error) {
        console.error("Something went wrong in finding location:", error);
    }
}

export default getLocation;
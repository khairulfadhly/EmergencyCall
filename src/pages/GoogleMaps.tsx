// import React, { useEffect, useRef } from 'react';

// const GoogleMaps = () => {
//   const mapRef = useRef(null);
//   const apiKey = 'AIzaSyAwjb5HSSs_3gQn5kVXQ00EKZyBKfmuv8c'; // Ganti dengan kunci API Google Maps Anda

//   useEffect(() => {
//     loadMap();
//   }, []);

//   const loadMap = () => {
//     if (!window.google || !window.google.maps) {
//       const googleMapsScript = document.createElement('script');
//       googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
//       googleMapsScript.async = true;
//       googleMapsScript.defer = true;

//       window.document.body.appendChild(googleMapsScript);

//       googleMapsScript.addEventListener('load', initMap);
//     } else {
//       initMap();
//     }
//   };

//   const initMap = () => {
//     const mapOptions = {
//       center: { lat: -6.233177641437766, lng: 106.47438120239075 },
//       zoom: 12,
//     };

//     if (mapRef.current) {
//       const map = new window.google.maps.Map(mapRef.current, mapOptions);
//       const service = new window.google.maps.places.PlacesService(map);

//       // Fungsi untuk melakukan pencarian tempat berdasarkan jenis dan lokasi
//       const searchPlaces = (type: string, location: google.maps.LatLng) => {
//         const request: google.maps.places.PlaceSearchRequest = {
//           location: location,
//           radius: 5000, // Menggunakan bilangan (number) sebagai radius dalam meter
//           type: type, // Menggunakan string tunggal sebagai jenis tempat
//         };

//         service.nearbySearch(request, (results, status) => {
//           if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//             for (let i = 0; i < results.length; i++) {
//               createMarker(results[i]);
//             }
//           }
//         });
//       };

//       // Fungsi untuk membuat marker pada peta
//       const createMarker = (place: google.maps.places.PlaceResult) => {
//         if (place.geometry) {
//           new window.google.maps.Marker({
//             map: map,
//             position: place.geometry.location,
//           });
//         }
//       };

//       // Contoh pencarian rumah sakit, kantor polisi, dan pemadam kebakaran terdekat
//       const userLocation = new window.google.maps.LatLng(-6.233177641437766, 106.47438120239075);
//       searchPlaces('hospital', userLocation);
//       searchPlaces('police', userLocation);
//       searchPlaces('fire_station', userLocation);
//     }
//   };

//   return <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
// };

// export default GoogleMaps;
// Yang ori jangan dulu di gangu\

// import React, { useEffect, useRef } from 'react';
// import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
// import { locateOutline } from 'ionicons/icons';

// const GoogleMaps = () => {
//   const mapRef = useRef(null);
//   const apiKey = 'YOUR_API_KEY'; // Ganti dengan kunci API Google Maps Anda
//   let map: google.maps.Map;
//   let userMarker: google.maps.Marker;

//   useEffect(() => {
//     loadMap();
//   }, []);

//   const loadMap = () => {
//     if (!window.google || !window.google.maps) {
//       const googleMapsScript = document.createElement('script');
//       googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
//       googleMapsScript.async = true;
//       googleMapsScript.defer = true;

//       window.document.body.appendChild(googleMapsScript);

//       googleMapsScript.addEventListener('load', initMap);
//     } else {
//       initMap();
//     }
//   };

//   const initMap = () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         const userLocation = new window.google.maps.LatLng(latitude, longitude);

//         const mapOptions: google.maps.MapOptions = {
//           center: userLocation,
//           zoom: 12,
//         };

//         if (mapRef.current) {
//           map = new window.google.maps.Map(mapRef.current, mapOptions);
//           const service = new window.google.maps.places.PlacesService(map);

//           const searchPlaces = (type: string, location: google.maps.LatLng) => {
//             const request: google.maps.places.PlaceSearchRequest = {
//               location: location,
//               radius: 5000,
//               type: type,
//             };

//             service.nearbySearch(request, (results, status) => {
//               if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//                 for (let i = 0; i < results.length; i++) {
//                   createMarker(results[i]);
//                 }
//               }
//             });
//           };

//           const createMarker = (place: google.maps.places.PlaceResult) => {
//             if (place.geometry) {
//               new window.google.maps.Marker({
//                 map: map,
//                 position: place.geometry.location,
//               });
//             }
//           };

//           searchPlaces('hospital', userLocation);
//           searchPlaces('police', userLocation);
//           searchPlaces('fire_station', userLocation);
//         }

//         // Tambahkan marker berwarna kuning pada lokasi pengguna
//         userMarker = new window.google.maps.Marker({
//           position: userLocation,
//           map: map,
//           icon: {
//             url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
//           },
//         });
//       },
//       (error) => {
//         console.error('Error getting location', error);
//       }
//     );
//   };

//   const centerUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         const userLocation = new window.google.maps.LatLng(latitude, longitude);
//         map.setCenter(userLocation);
//       });
//     }
//   };

//   return (
//     <div style={{ height: '100%', width: '100%', position: 'relative' }}>
//       <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>
//       <IonFab vertical="bottom" horizontal="start" slot="fixed">
//         <IonFabButton onClick={centerUserLocation}>
//           <IonIcon icon={locateOutline} />
//         </IonFabButton>
//       </IonFab>
//     </div>
//   );
// };

// export default GoogleMaps;
// new aupdate work!!!!!


//baru


// import React, { useEffect, useState } from 'react';
// import {
//   IonContent,
//   IonFab,
//   IonFabButton,
//   IonIcon,
//   IonHeader,
//   IonPage,
//   IonTitle,
//   IonToolbar,
// } from '@ionic/react';
// import { Geolocation } from '@capacitor/geolocation';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { refresh } from 'ionicons/icons';

// const containerStyle = {
//   width: '100vw',
//   height: '100vh',
// };

// const center = {
//   lat: -6.1754,
//   lng: 106.8272,
// };

// const zoomLevel = 15;

// const GoogleMaps: React.FC = () => {
//   const [currentLocation, setCurrentLocation] = useState<null | { lat: number; lng: number }>(null);
//   const [nearestPolice, setNearestPolice] = useState<null | { lat: number; lng: number }[]>(null);
//   const [nearestHospital, setNearestHospital] = useState<null | { lat: number; lng: number }[]>(null);

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   const getCurrentLocation = async () => {
//     try {
//       const position = await Geolocation.getCurrentPosition();
//       const { latitude, longitude } = position.coords;
//       setCurrentLocation({ lat: latitude, lng: longitude });
//       // Simulate fetching nearest Police
//       const nearestPolice = [
//         { lat: -6.276150864794977, lng: 106.5267592200135 },
//         { lat: -6.2631916638017, lng: 106.46692910760443 },
//         { lat: -6.2285815519669265, lng: 106.51389570612017 },
//       ];
//       setNearestPolice(nearestPolice);

//       // Simulate fetching nearest Hospital
//       const nearestHospital = [
//         { lat: -6.249582852203591, lng: 106.52148796613723 },
//         { lat: -6.221651091938383, lng: 106.56224232949043 },
//         { lat: -6.220682437122377, lng: 106.53769647116856 },
//       ];
//       setNearestHospital(nearestHospital);
//     } catch (error) {
//       console.log('Error getting the current location:', error);
//     }
//   };

//   const handleRefreshLocation = () => {
//     getCurrentLocation();
//   };

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Ionic 6 + React + Google Maps</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <LoadScript googleMapsApiKey="AIzaSyB87O0r9if0szz5yzcFBz80lKh8aSbYH3E">
//           <GoogleMap mapContainerStyle={containerStyle} center={currentLocation || center} zoom={zoomLevel}>
//             {currentLocation && <Marker position={currentLocation} />}
//             {nearestPolice &&
//               nearestPolice.map((marker, index) => (
//                 <Marker
//                   key={index}
//                   position={marker}
//                   icon={{
//                     url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//                     scaledSize: new window.google.maps.Size(40, 40),
//                   }}
//                 />
//               ))}
//             {nearestHospital &&
//               nearestHospital.map((marker, index) => (
//                 <Marker
//                   key={index}
//                   position={marker}
//                   icon={{
//                     url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
//                     scaledSize: new window.google.maps.Size(40, 40),
//                   }}
//                 />
//               ))}
//           </GoogleMap>
//           <IonFab vertical="bottom" horizontal="start" slot="fixed">
//             <IonFabButton onClick={handleRefreshLocation}>
//               <IonIcon icon={refresh} />
//             </IonFabButton>
//           </IonFab>
//         </LoadScript>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default GoogleMaps;
//INI YANG DIPAKE DI APK!!


import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { refresh } from 'ionicons/icons';
import { CSSProperties } from 'react';

const mapContainerStyle: CSSProperties = {
  width: '100%',
  height: '70vh',
};

const cardContainerStyle: CSSProperties = {
  width: '100%',
  height: '30vh',
};

const fabStyle: CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
};

const center = {
  lat: -6.1754,
  lng: 106.8272,
};

const zoomLevel = 15;

const GoogleMaps: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<null | { lat: number; lng: number }>(null);
  const [nearestPolice, setNearestPolice] = useState<null | { lat: number; lng: number }[]>(null);
  const [nearestHospital, setNearestHospital] = useState<null | { lat: number; lng: number }[]>(null);
  const [nearestFirefighter, setNearestFirefighter] = useState<null | { lat: number; lng: number }[]>(null);
  const [currentAddress, setCurrentAddress] = useState<string>('');

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });

      // Convert coordinates to address
      const geocoder = new window.google.maps.Geocoder();
      const latlng = { lat: latitude, lng: longitude };
      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === 'OK' && results?.[0]) {
          setCurrentAddress(results[0].formatted_address);
        }
      });

      // Simulate fetching nearest Police
      const nearestPolice = [
        { lat: -6.276150864794977, lng: 106.5267592200135 },
        { lat: -6.2631916638017,  lng: 106.46692910760443 },
        { lat: -6.2285815519669265, lng: 106.51389570612017},
        { lat: -6.262709382304025, lng: 106.42300478377369},
        { lat: -6.3289333752089725, lng: 106.4860369667408},
        { lat: -6.263833030539249, lng: 106.55799283771282},
        { lat: -6.242893894441422, lng: 106.62204126155699},
        { lat: -6.300175897562322, lng: 106.58722630567078},
        { lat: -6.290851445088486, lng: 106.63486546472849},
        { lat: -6.171787148235161, lng: 106.53045612030111},
        { lat: -6.1905544935614, lng: 106.46190330016198},
        { lat: -6.132449374164463, lng: 106.37926181889213},
        { lat: -6.061919948233242, lng: 106.42381741382557},
        { lat: -6.057763752442461, lng: 106.51406422025119},
        { lat: -6.128947678074217, lng: 106.52680640472792},
        { lat: -6.11987460745943, lng: 106.57635467032758},
        { lat: -6.069402472814853, lng: 106.59273069578718},
        { lat: -6.069818133545928, lng: 106.64657921894853},
        { lat: -6.096352532356999, lng: 106.68835283906058},
        { lat: -6.272189646778843, lng: 106.48251658562893},
        

        
      ];
      setNearestPolice(nearestPolice);

      // Simulate fetching nearest Hospital
      const nearestHospital = [
        { lat: -6.249582852203591, lng: 106.52148796613723 },
        { lat: -6.221651091938383, lng: 106.56224232949043 },
        { lat: -6.220682437122377, lng: 106.53769647116856 },
        { lat: -6.218406450583522, lng: 106.49708101678343 },
        { lat: -6.075869004516495, lng: 106.64547402856573 },
        { lat: -6.220682437122377, lng: 106.53769647116856 },
        { lat: -6.22353699100684,  lng: 106.43281196417678 },
        { lat: -6.226535364456398, lng: 106.51058837423484 },
        { lat: -6.251948818060418,  lng: 106.56209405591436 },
        { lat: -6.25218728522305,  lng: 106.56222171180583 },
        { lat: -6.256247923361409,  lng: 106.48618567356074 },
        { lat: -6.254505374029282,  lng: 106.60815856356776 },
        { lat: -6.081638545684247,  lng: 106.69706674703862 },
        { lat: -6.154497032021234,  lng: 106.58045198122782 },
        { lat: -6.118358595452465,  lng: 106.57857933664206 },
        { lat: -6.070688004795452,  lng: 106.59203615861313 },
        { lat: -6.228030798669866,  lng: 106.52557309923856 },
        { lat: -6.249428025171351,  lng: 106.61013632784868 },
        { lat: -6.2579046786239605, lng: 106.60616803866183 },
        { lat: -6.225246357069145, lng: 106.59803695183476 },
        { lat: -6.240872237801684, lng: 106.61032964361429 },
        { lat: -6.1918055211578364, lng: 106.4615499915672 },
        { lat: -6.1698053918306766, lng: 106.63562096501872 },
        { lat: -6.2266641182680065, lng: 106.61695058590499 },
        { lat: -6.197216330703051, lng: 106.43964742547325 },
      ];

      setNearestHospital(nearestHospital);

      const nearestFirefighter =[
        {lat: -6.2627911178013305, lng: 106.42177606965876},
        {lat: -6.2336243169240415, lng: 106.56138562853727},
        {lat: -6.268546288250369,  lng: 106.48018381323948},
        {lat: -6.178229446909742,  lng: 106.44770263979022},
        {lat: -6.2919324812375494, lng: 106.5791444706853},
        {lat: -6.062834927239576,  lng: 106.59510425242827},
        {lat: -6.054904577235301,  lng: 106.5115825587754},
        {lat: -6.1186437158726354, lng: 106.57468707179108},
        {lat: -6.288031312520582,  lng: 106.65212191566364},
        


      ];
      setNearestFirefighter(nearestFirefighter);



    } catch (error) {
      console.log('Error getting the current location:', error);
    }
  };

  const handleRefreshLocation = () => {
    getCurrentLocation();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className="ion-text-center">Layanan Darurat Kabupaten Tangerang</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <LoadScript googleMapsApiKey="AIzaSyCVUI-4maMo3yY91NH4MsT-cVGaL0VrOb4">
          <div style={{ position: 'relative' }}>
            <div style={mapContainerStyle}>
              <GoogleMap mapContainerStyle={mapContainerStyle} center={currentLocation || center} zoom={zoomLevel}>
                {currentLocation && <Marker position={currentLocation} />}
                {nearestPolice &&
                  nearestPolice.map((marker, index) => (
                    <Marker
                      key={index}
                      position={marker}
                      icon={{
                        url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                        scaledSize: new window.google.maps.Size(40, 40),
                      }}
                    />
                  ))}
                {nearestHospital &&
                  nearestHospital.map((marker, index) => (
                    <Marker
                      key={index}
                      position={marker}
                      icon={{
                        url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                        scaledSize: new window.google.maps.Size(40, 40),
                      }}
                    />
                  ))}

                  {nearestFirefighter &&
                  nearestFirefighter.map((marker, index) => (
                    <Marker
                      key={index}
                      position={marker}
                      icon={{
                        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        scaledSize: new window.google.maps.Size(40, 40),
                      }}
                    />
                  ))}


              </GoogleMap>
              <IonFab vertical="bottom" horizontal="start" slot="fixed" style={fabStyle}>
                <IonFabButton onClick={handleRefreshLocation}>
                  <IonIcon icon={refresh} />
                </IonFabButton>
              </IonFab>
            </div>
            <div style={cardContainerStyle}>
              <IonCard>
                <IonCardContent>
                  <h2>Lokasi anda saat ini :</h2>
                  <p>Address: {currentAddress}</p>
                  <p>Latitude: {currentLocation?.lat}</p>
                  <p>Longitude: {currentLocation?.lng}</p>
                </IonCardContent>
              </IonCard>
            </div>
          </div>
        </LoadScript>
      </IonContent>
    </IonPage>
  );
};

export default GoogleMaps;















































//    AIzaSyB87O0r9if0szz5yzcFBz80lKh8aSbYH3E
//    AIzaSyAwjb5HSSs_3gQn5kVXQ00EKZyBKfmuv8c



 // GoogleMap.tsx

//  import React, { useEffect, useRef, useState } from 'react';
//  import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
//  import { locateOutline } from 'ionicons/icons';
//  import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
 
//  const GoogleMaps = () => {
//    const mapRef = useRef<any>(null);
//    const [userLocation, setUserLocation] = useState<google.maps.LatLng | null>(null);
//    const apiKey = 'AIzaSyB87O0r9if0szz5yzcFBz80lKh8aSbYH3E'; // Ganti dengan kunci API Google Maps Anda
 
//    useEffect(() => {
//      loadMap();
//    }, []);
 
//    const loadMap = () => {
//      navigator.geolocation.getCurrentPosition(
//        (position) => {
//          const { latitude, longitude } = position.coords;
//          const location = new window.google.maps.LatLng(latitude, longitude);
//          setUserLocation(location);
//        },
//        (error) => {
//          console.error('Error getting location', error);
//        }
//      );
//    };
 
//    const centerUserLocation = () => {
//      if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition((position) => {
//          const { latitude, longitude } = position.coords;
//          const location = new window.google.maps.LatLng(latitude, longitude);
//          setUserLocation(location);
//        });
//      }
//    };
 
//    return (
//      <LoadScript googleMapsApiKey={apiKey}>
//        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
//          {userLocation && (
//            <GoogleMap
//              mapContainerStyle={{ height: '100%', width: '100%' }}
//              center={userLocation}
//              zoom={12}
//              onLoad={(map) => {
//                mapRef.current = map;
//              }}
//            >
//              <Marker position={userLocation} />
//            </GoogleMap>
//          )}
//          <IonFab vertical="bottom" horizontal="start" slot="fixed">
//            <IonFabButton onClick={centerUserLocation}>
//              <IonIcon icon={locateOutline} />
//            </IonFabButton>
//          </IonFab>
//        </div>
//      </LoadScript>
//    );
//  };
 
//  export default GoogleMaps;



 








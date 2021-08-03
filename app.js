const center = { lat:  50.27852326537475, lng: 3.338053755654522};

function ResetControl(controlDiv, map) {
    // CSS for control border
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "WhiteSmoke";
    controlUI.style.border = "2px solid whitesmoke";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.7)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "15px";
    controlUI.style.marginBottom = "15px";
    controlUI.style.marginRight = "10px";
    controlUI.style.textAlign = "center";
    controlUI.title = "Reset the map";
    controlDiv.appendChild(controlUI);
    // CSS for control interior
    const controlText = document.createElement("div");
    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Lexend,sans-serif";
    controlText.style.fontSize = "17px";
    controlText.style.fontWeight = "500";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = "Reset";
    controlUI.appendChild(controlText);
    // Setup the click event listeners
    controlUI.addEventListener("click", () => {
      map.setCenter(center);
      map.setZoom(2.2);
    });
  }

  function NorthAmericaControl(controlDiv, map) {
    // CSS for control border
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "rgb(203,230,194)";
    controlUI.style.border = "2px solid #CBE6C2";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.5)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "15px";
    controlUI.style.marginBottom = "15px";
    controlUI.style.marginRight = "10px";
    controlUI.style.textAlign = "center";
    controlUI.title = "Center the map on North America";
    controlDiv.appendChild(controlUI);
    // CSS for control interior
    const controlText = document.createElement("div");
    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Lexend,sans-serif";
    controlText.style.fontSize = "17px";
    controlText.style.fontWeight = "500";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = "North America";
    controlUI.appendChild(controlText);
    // Setup the click event listeners
    controlUI.addEventListener("click", () => {
      map.setCenter({lat: 54.5260, lng: -105.2551});
      map.setZoom(3);
    });
  }

  function AsiaControl(controlDiv, map) {
    // CSS for control border
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "rgb(203,230,194)";
    controlUI.style.border = "2px solid #CBE6C2";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.5)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "15px";
    controlUI.style.marginBottom = "15px";
    controlUI.style.marginRight = "10px";
    controlUI.style.textAlign = "center";
    controlUI.title = "Center the map on Asia";
    controlDiv.appendChild(controlUI);
    // CSS for control interior
    const controlText = document.createElement("div");
    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Lexend,sans-serif";
    controlText.style.fontSize = "17px";
    controlText.style.fontWeight = "500";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = "Asia";
    controlUI.appendChild(controlText);
    // Setup the click event listeners
    controlUI.addEventListener("click", () => {
      map.setCenter({lat: 34.0479, lng: 100.6197});
      map.setZoom(4);
    });
  }

  function EuropeControl(controlDiv, map) {
    // CSS for control border
    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "rgb(203,230,194)";
    controlUI.style.border = "2px solid #CBE6C2";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.5)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginTop = "15px";
    controlUI.style.marginBottom = "15px";
    controlUI.style.marginRight = "10px";
    controlUI.style.textAlign = "center";
    controlUI.title = "Center the map on Europe";
    controlDiv.appendChild(controlUI);
    // CSS for control interior
    const controlText = document.createElement("div");
    controlText.style.color = "rgb(25,25,25)";
    controlText.style.fontFamily = "Lexend,sans-serif";
    controlText.style.fontSize = "17px";
    controlText.style.fontWeight = "500";
    controlText.style.lineHeight = "38px";
    controlText.style.paddingLeft = "5px";
    controlText.style.paddingRight = "5px";
    controlText.innerHTML = "Europe";
    controlUI.appendChild(controlText);
    // Setup the click event listeners
    controlUI.addEventListener("click", () => {
      map.setCenter({lat: 54.5260, lng: 15.2551});
      map.setZoom(4);
    });
  }


function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 2.2,
        mapId: '5183cf6fd1538183',
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
    });

    const places = [
        ["Paris, France", 48.8566, 2.3522, "./images/paris.jpg", "./icons/paris.png", 60, "Seine"],
        ["Rome, Italy", 41.9028, 12.4964, "./images/rome.jpg", "./icons/rome.png", 55, "Municipio I"],
        ["London, England", 51.5074, 0.1278, "./images/london.jpg", "./icons/london.png", 60, "Soho"],
        ["Shanghai, China", 31.2304, 121.4737, "./images/shanghai.jpg", "./icons/shanghai.png", 60, "The Bund"],
        ["Beijing, China", 39.9042, 116.4074, "./images/beijing.jpg", "./icons/beijing.png", 60, "Chaoyang District"],
        ["Vancouver, Canada", 49.2827, -123.1207, "./images/vancouver.jpg", "./icons/vancouver.png", 55, "Downtown"],
        ["Toronto, Canada", 43.6532, -79.3832, "./images/toronto.jpg", "./icons/toronto.png", 60, "Yorkville"],
        ["Montreal, Canada", 45.5017, -73.5673, "./images/montreal.jpg", "./icons/montreal.png", 55, "Vieux-Port"],
        ["Las Vegas, USA", 36.1699, -115.1398, "./images/lasvegas.jpg", "./icons/lasvegas.png", 53, "The Strip"],
        ["Seattle, USA", 47.6062, -122.3321, "./images/seattle.jpg", "./icons/seattle.png", 55, "Alki Beach"],
        ["Alaska, USA", 64.2008, -149.4937, "./images/alaska.jpg", "./icons/alaska.png", 50, "Glacier Bay"],
        ["Washington DC, USA", 38.9072, -77.0369, "./images/washingtondc.jpg", "./icons/washingtondc.png", 52, "Downtown"],
        ["New York, USA", 40.7128, -74.0060, "./images/newyork.jpg", "./icons/newyork.png", 60, "Midtown"]
    ]

    var opened = false;

    for (let i = 0; i < places.length; i++) {

        const place = places[i];
        const infowindow = new google.maps.InfoWindow({
            content: `<div style='width:350px; '>
                    <img src='${place[3]}' style='max-width:95%; max-height:95%;'>
                    </div>
                    <div style='padding:10px;'>
                    ${place[0]}
                    <br><span style='font-weight: 300;'>${place[6]}</span>
                    </div>`,
        });

        const marker = new google.maps.Marker({
            position: {lat: place[1], lng: place[2]},
            map,
            title: place[0],
            animation: google.maps.Animation.DROP,
            icon: {
                url: place[4],
                scaledSize: new google.maps.Size(place[5], place[5])
            }
        });

        marker.addListener("click", () => {
            if (opened) {
                opened.close();
            }
            opened = infowindow;
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });

        });

        map.addListener("click", () => {
            infowindow.close();
        });

    }

    const resetControlDiv = document.createElement("div");
    ResetControl(resetControlDiv, map);
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(resetControlDiv);
    const NorthAmericaControlDiv = document.createElement("div");
    NorthAmericaControl(NorthAmericaControlDiv, map);
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(NorthAmericaControlDiv);
    const AsiaControlDiv = document.createElement("div");
    AsiaControl(AsiaControlDiv, map);
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(AsiaControlDiv);
    const EuropeControlDiv = document.createElement("div");
    EuropeControl(EuropeControlDiv, map);
    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(EuropeControlDiv);

}

const imageDir = "istanbul/";
const langSuffix = "-tr";

if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken =
"pk.eyJ1IjoiZG9jLWRpdmFnbyIsImEiOiJja2NnbXU0ancwdGx1MnhtMm1pdzV5cWd4In0.NXt0RiFp4HjZ_iy55WADkg";
/**
 * Add the map to the page
 */
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [28.97807, 41.00860],
  zoom: 15,
  scrollZoom: false,
});

//compass
const nav = new mapboxgl.NavigationControl({
  showCompass: true,
});
map.on("load", function (e) {
  map.addControl(nav, "bottom-right");
});
var stores = {
  type: "FeatureCollection",
  features: [
    // Hagia Sofia
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28.98003, 41.00860],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Ayasofya",
        city: "Istanbul",
        country: "Turkey",
        crossStreet: "",
        postalCode: "",
        state: "",
        description: "",
        /* EDIT20230531A*/
        spritemap: imageDir + "istanbul-hagia-sofia" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Topkapi Palace
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28.98338, 41.01152],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Topkapı Sarayı",
        city: "Istanbul",
        country: "Turkey",
        crossStreet: "",
        postalCode: "",
        state: "",
        description:
          "",
        /* EDIT20230531A*/
        spritemap: imageDir + "istanbul-topkapi-palace" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // The Million Stone
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28.97807, 41.00804],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Milyon Taşı",
        city: "Istanbul",
        country: "Turkey",
        crossStreet: "",
        postalCode: "",
        state: "",
        description:
          "",
        /* EDIT20230531A*/
        spritemap: imageDir + "istanbul-million-stone" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // The Grand Bazaar
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28.9685, 41.01065],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Kapalı Çarşı",
        city: "Istanbul",
        country: "Turkey",
        crossStreet: "",
        postalCode: "",
        state: "",
        description:
          "",
        /* EDIT20230531A*/
        spritemap: imageDir + "istanbul-grand-bazaar" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Theodosius Cistern
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28.97238, 41.00743],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Şerefiye Sarnıcı",
        city: "Istanbul",
        country: "Turkey",
        crossStreet: "",
        postalCode: "",
        state: "",
        description:
          "",
        /* EDIT20230531A*/
        spritemap: imageDir + "istanbul-theodosius-cistern" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // The Basilica Cistern
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28.97793, 41.00839],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Yerebatan Sarnıcı",
        city: "Istanbul",
        country: "Turkey",
        crossStreet: "",
        postalCode: "",
        state: "",
        description:
          "",
        /* EDIT20230531A*/
        spritemap: imageDir + "istanbul-basilica-cistern" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Hippodrome
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [28.97542, 41.00592],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Sultanahmet Meydanı",
        city: "Istanbul",
        country: "Turkey",
        crossStreet: "",
        postalCode: "",
        state: "",
        description:
          "",
        /* EDIT20230531A*/
        spritemap: imageDir + "istanbul-hippodrome" + langSuffix,
        /* EDIT20230531A*/
      },
    },
       
  ],
};
/**
 * Assign a unique id to each store. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
stores.features.forEach(function (store, i) {
  store.properties.id = i;
});

/**
 * Wait until the map loads to make changes to the map.
 */
map.on("load", function (e) {
  /**
   * This is where your '.addLayer()' used to be, instead
   * add only the source without styling a layer
   */
  map.addSource("places", {
    type: "geojson",
    data: stores,
  });

  /**
   * Add all the things to the page:
   * - The location listings on the side of the page
   * - The markers onto the map
   * 
   */
  buildLocationList(stores);
  addMarkers();
});

/**
 * Add a marker to the map for every store listing.
 **/
function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  stores.features.forEach(function (marker) {
    /* Create a div element for the marker. */
    var el = document.createElement("div");
    /* Assign a unique `id` to the marker. */
    el.id = "marker-" + marker.properties.id;
    /* Assign the `marker` class to each marker for styling. */
    el.className = "marker";

    /**
     * Create a marker using the div element
     * defined above and add it to the map.
     **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    /**
     * Listen to the element and when it is clicked, do three things:
     * 1. Fly to the point
     * 2. Close all other popups and display popup for clicked store
     * 3. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    el.addEventListener("click", function (e) {
      /* Fly to the point */
      flyToStore(marker);
      /* Close all other popups and display popup for clicked store */
      makeHighlight(marker);
      showInfoCard(marker.properties.address,marker.properties.description,marker.properties.spritemap);
      /* Highlight listing in sidebar */
      e.stopPropagation();
      
    });
  });
}

/**
 * Add a listing for each store to the sidebar.
 **/
function buildLocationList(data) {
  data.features.forEach(function (store, i) {
    /**
     * Create a shortcut for `store.properties`,
     * which will be used several times below.
     **/
    var prop = store.properties;

    /* Add a new listing section to the sidebar. */
    var listings = document.getElementById("listings");
    var listing = listings.appendChild(document.createElement("div"));
    /* Assign a unique `id` to the listing. */
    listing.id = "listing-" + prop.id;
    /* Assign the `item` class to each listing for styling. */
    listing.className = "item";

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "title";
    link.id = "link-" + prop.id;
    link.innerHTML = prop.address;

    /**
     * Listen to the element and when it is clicked, do four things:
     * 1. Update the `currentFeature` to the store associated with the clicked link
     * 2. Fly to the point
     * 3. Close all other popups and display popup for clicked store
     * 4. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    link.addEventListener("click", function (e) {
      for (var i = 0; i < data.features.length; i++) {
        if (this.id === "link-" + data.features[i].properties.id) {
          var clickedListing = data.features[i];
          flyToStore(clickedListing);
          makeHighlight(clickedListing);
        }
      }
      var activeItem = document.getElementsByClassName("active");
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      this.parentNode.classList.add("active");
    });
  });
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 17,
  });
}


function makeHighlight(currentFeature) {
  var marker = document.getElementById(
    "marker-" + currentFeature.properties.id
  );
  marker.style.filter = "hue-rotate(145deg)";
}

function checkinbounds(currentFeature) {
  const bound1 = new mapboxgl.LngLat(
    currentFeature.geometry.coordinates[0] + 0.001,
    currentFeature.geometry.coordinates[1] + 0.001
  );
  const bound2 = new mapboxgl.LngLat(
    currentFeature.geometry.coordinates[0] - 0.001,
    currentFeature.geometry.coordinates[1] - 0.001
  );

  const bounds = new mapboxgl.LngLatBounds(bound1, bound2);

  // called every time a new user position is determined
  function checkUserPostion(position) {
    const { latitude, longitude } = position.coords;

    const isUserInBbx = bounds.contains([longitude, latitude]);

    if (isUserInBbx) {
      return true;
    } else {
      return false;
    }
  }

  navigator.geolocation.watchPosition(checkUserPostion);
}

const imageDir = "foligno/";
const langSuffix = "-en";


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
  center: [12.70335, 42.95606],
  zoom: 16,
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
    // Auditorium S Domenico
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.69996, 42.95419],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Auditorium S Domenico",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "The church of San Domenico, located in the homonymous square, with the adjacent convent is one of the most relevant architectural monuments of the city. It has been losing its functional identity for ages, but it still has its architectural one, after an important renovation which turned it into an auditorium. The façade has a beautiful ogival portal; the inside, with a gabled roof which is typical of the churches of mendicant orders, preserves the gothic structure. The complex and fragmentary group of frescoes decorating the walls of the nave of San Domenico – more than 50 subjects in addition to some fragments not easy to interpret – constitutes one of the most relevant painting testimonies of the central Italy of 14th and 15 centuries.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-san-domenico" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Chiesa di S. Nicolò
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.69931, 42.95544],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Chiesa di S. Nicolò",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "It's an ancient church, built in 1094 by San Bonfilio bishop of Foligno and given to the Benedectine Congregation of Santa Croce di Sassovivo, according to Ludovico Jacobilli. In 1434 the church and the convent were given to hermit friars of Sant'Agostino. The inside of the church, renovated in the middle of 18th century, has paintings and tables. The church preserves the Polyptych of Niccolò Alunno, one of the greatest masterpieces of the city, taken away by Napoleone and returned in 1817 without the predella, currently preserved in the Louvre Museum.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-sannicolo" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Chiesa S. Maria Infra Portas
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70012, 42.95344],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Chiesa S. Maria Infra Portas",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "The church, among the oldest ones in Foligno, lies on the western side of Piazza San Domenico, where once there was an 8th century chapel dedicated to Assunta, San Pietro and San Paolo. The name of the church changed several times during the Middle Ages (13th century) as a consequence of the extension of the walls of the city: the papers of the Abbazia di Santa Croce di Sassovivo report “Santa Maria extra porta” or “foris portam”. After the building of the new boundaries at the end of 13th century, the building was between the two city walls and took the name of “Infra portas”. The walls of this church contain a real art gallery of the best artists from Foligno: just to name a few, Niccolò di Liberatore called l'Alunno, Pierantonio Mezzastris, Giovanni di Corraduccio, Ugolino di Gisberto, Lattanzio di Niccolò, Cristoforo di Jacopo, pupil of Bartolomeo di Tommaso worked there. Externally, to the right of the porch, there is an aedicula dating back to 1480 with a sinopia of the fresco of Sant'Anna crowned by angels, attributable to Mezzastris; at the end of the right side there is the Romanesque bell tower.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-maria-infraportas" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // L'Ercole di Theimer e l'ex Teatro Piermarini
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70526, 42.95511],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "L'Ercole di Theimer e l'ex Teatro Piermarini",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "One of the best-loved and best-known personalities in the history of Foligno is Giuseppe Piermarini, who was born here in 1734 and died in 1808, also in Foligno. Piermarini was the architect who designed La Scala in Milan, and his works were also commissioned by the Habsburgs. The city of Foligno, a few years after his death, dedicated to him the theatre of the same name that stood on this spot, but after many performances, on 16 May 1944, it was destroyed by a bombing, and today we can admire its façade and foyer. In the square, a spectacular work by Ivan Theimer is on display, the Hercules, dedicated precisely to Giuseppe Piermarini. Are you familiar with the myth of Hercules? It is about the Greek hero famous for his superhuman strength. Instead of being depicted holding up the legendary columns, the image of the ultimate boundary of the known world and thus of human wisdom, in this case Hercules holds up an Egyptian obelisk. With this work, Theimer wished to represent how the West has overstepped the boundary of considering itself the true cradle of knowledge, whereas knowledge is a broader concept, resulting from the union of several cultures.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-ercole-teatro" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Le conce
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70174, 42.95766],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Le conce",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "“Le Conce” is the name of a picturesque neighborhood in Foligno. Located alongside the Canale dei Molini, it is considered one of the most particular and romantic spots in the city. The name of the neighborhood comes from the jobs people did in the past in that part of the city. Oil, paper, wheat and hemp production took place right at Le Conce, and here there were also the artisan workshops of that time. Now head to Rione Pugilli. The story goes that the two Rioni are bitter rivals… scan the QR code to enter the world of the “Black Eagle”. Then go towards the Topino river and take a picture on the ancient walls of Foligno, which have always protected the “Folignati” (the inhabitants of Foligno).",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-conce" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Murales Cileni
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70594, 42.95268],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Murales Cileni",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "Murals painted by Josè Balmes, director of the School of Fine arts of Santiago del Chile, which represents one of the most important living Chilean painters. Murals date back to 1974 concurrently with the arrival in Foligno of the Brigada Louis Corvalan exiled by Pinochet following the coup d'état. In order to repay the warm hospitality by Foligno, the artist painted 80 metres of wall. The murals are full of symbols of freedom and democracy.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-murales-cileni" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Orti Jacobili
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70566, 42.96010],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Orti Jacobili",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "Orti Jacobilli are an old vegetable garden dating back to 17th century, near the medieval walls and followed by the Topino river. An old door from 17th century introduces you to the garden on which stands the Torre dei Cinque Cantoni: a very suggestive place with a precious green area enclosed within the city walls. The southern side of the garden consists of a late medieval wall that fits into the ruins of a late antique bridge (4th-5th centuries). It has an historical importance because it was part of the gardens of the Topino river, traditionally suited to the production of food for citizens, when the city was besieged by enemy armies. In the garden and in the tower, recently restored, an astronomical observatory is housed.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-orti-jacobilli" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Palazzo Trinci
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70285, 42.95633],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Palazzo Trinci",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "One of the first things to see in Foligno is the house of the Trinci family who reigned over the city from 1305 to 1439. It was built between 1389 and 1407 on some pre-existing medieval buildings. During the glorious era of the family, several scholars and prominent personalities of that time were used to walk into Palazzo Trinci. The exterior is neoclassical, while inside there are those typical examples of late gothic that were part of the Palazzo already at the time of its construction. In the inner courtyard there is a beautiful gothic staircase which leads to the loggia frescoed with the legend of the foundation of Rome. From here, you can enter the halls of the noble floor. The chapel is adorned with stories of the Virgin Mary. Through an arched door you can go into the Sala delle Arti e dei Pianeti (“Arts and Planets Room”), where all the liberal arts are represented: Rhetoric, Mathematics, Astronomy, Geometry, Music, Dialectic, Grammar together with Philosophy, the seven planets and the seven ages of man symbolized by a time of the day.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-palazzo-trinci" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Parco dei Canapè
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70076, 42.95190],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Parco dei Canapè",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "The birth of Canapè dates back to 1776. In that year the city administration ascertained the state of decay of the city wall and calculated that the costs for restoration were 1000 scudi, an amount that the citizens couldnt cover. The wealthy families of Foligno decided to pay for it, on condition that each one of them would have received a sit. Eighty canapès were built, seats in the shape of sofas, with back and armrests, all in bricks. The elliptical ring was used as hippodrome, so that citizens could comfortably watch the horse races.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-parco-canape" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Piazza della Repubblica
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70331, 42.95616],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Piazza della Repubblica",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "The first place to go to, in order to immediately immerse yourself into the medieval atmosphere of Foligno, is Piazza della Repubblica. Here there is a monument which reminds us that in this place San Francesco got rid of his goods and put on sale his horse and his possessions to restore the Church of San Damiano, in Assisi. In the square there re the most important buildings of Foligno: the Cathedral, Palazzo Comunale, Palazzo dei Podestà and Palazzo Trinci. Many remember Palazzo Comunale because of the tower collapse caught on live tv during the earthquake of 1997. The building is from 13th century, but it was rebuilt between 1546 and 1642. Palazzo del Podestà hosted popular gatherings by the time of Comuni, together with Palazzo Orsini, which houses a beautiful Museum of Printing, an unmissable historical place. Here, Johannes Numeister, pupil of Gutenberg, printed the first edition of Divine Comedy by Dante Alighieri in 1472. Under a glass next to Palazzo del Podestà you can see the “pozzo dei miracoli”, a holy well built in the Middle Ages.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-piazza-repubblica" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Piazza Don Minzoni
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70208, 42.95613],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Piazza Don Minzoni",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "The Fountain in memory of the fallen, by Ivan Theimer, is located in Piazza Don Minzoni, Foligno. It is a contemporary artwork nicknamed “the fountain of turtles” by Foligno inhabitants, due to the bronze turtles all around the fountain. The artwork (whose official name is “Ricordo del dolore umano”, that is “Remembrance of human pain”), represents an hourglass with turtles, symbol of eternity of time and a bronze frieze that remembers some moments of the history of the city: the sacrifice of Colomba Antonietti, the partisan Franco Ciri murdered by fascists, the Tucci family murdered in Sant'Anna di Stazzema by Nazi, the aerial bombardment of 22 November 1943 and the earthquake of 1997. The three turtles are the symbol of eternity of time and, together with the bronze putti, they frequently recur in the sculptor’s works. The chosen materials are used to represent the passing of time as well: both bronze and stone tend to change color over the years. Try to put your hand inside the mouth of the biggest turtle! It is a good omen and it hides a surprise: a little putto!  ",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-piazza-don-minzoni" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    // Porta S Felicianetto
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.70844, 42.95529],
      },
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Porta S Felicianetto",
        city: "Foligno",
        country: "Italy",
        crossStreet: "",
        postalCode: "06034",
        state: "",
        description:
          "Porta San Felicianetto is the only remaining medieval door of the city. On each side the ruins of the old city wall are still visible. The door takes its name from the patron saint of the city, San Feliciano, who suffered martyrdom in 249 at the ripe old age of 89, after 59 years of episcopate. According to a legend, Feliciano was chained to a biga and dragged by galloping horses through Porta San Felicianetto. Then he was buried in Foligno, where the cathedral named after him was built. The door opens on the street which leads to another church just outside the walls, in the village of Sant'Eraclio. Equally dedicated to the saint, but smaller, that's why it's commonly called San Felicianetto.",
        /* EDIT20230531A*/
        spritemap: imageDir + "foligno-porta-sanfelicianetto" + langSuffix,
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

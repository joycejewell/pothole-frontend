/* eslint import/no-webpack-loader-syntax: off */
import axios from "axios";
import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl";

import fetchFakeData from "./api/fetchFakeData";
import Popup from "./components/Popup";
import "./Map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  const [location, setLocation] = useState([]);
  console.log(location);

  // initialize map when component mounts
  useEffect(() => {
    axios.get("http://localhost:3000/location").then((res) => {
      console.log(res);
      //   setLocation(...location, res.data);
      // })
      // .then((res) => {
      // if (location.length > 0) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        // See style options here: https://docs.mapbox.com/api/maps/#styles
        style: "mapbox://styles/mapbox/streets-v11",
        // center: [-104.9877, 39.55849],
        center: [res.data[0].longitude, res.data[0].latitude],
        zoom: 9,
      });
      // res.data.forEach((place) => {
      //   let popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
      //   let marker = new mapboxgl.Marker().setLngLat([place.longitude, place.latitude]).setPopup(popup).addTo(map);
      //   console.log(marker);
      // });
      res.data.forEach((place) => {
        const el = document.createElement("div");
        el.className = "marker";
        let popupText = place.description.split(" - ");
        let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<h3><a href="' + popupText[1] + '">' + popupText[0] + "</a></h3>"
        );
        let marker = new mapboxgl.Marker(el).setLngLat([place.longitude, place.latitude]).setPopup(popup).addTo(map);
        console.log(marker);
      });

      //floifian front enders

      // const newLocation = res.data.map(l => {
      //   console.log("l", l)
      //   const newPopupRef = React.createRef()
      //   const popupNode = document.createElement("div", { ref: newPopupRef });
      //   // ReactDOM.render(<Popup feature={feature} />, popupNode);
      //   return ({
      //   ...l,
      //   element: React.createElement("div")
      // })})
      // console.log("newLocation", newLocation)
      // res.data.forEach((place) => {
      //   let marker = new mapboxgl.Marker().setLngLat([place.longitude, place.latitude]).addTo(map);
      // //   let popup = new mapboxgl.Popup().setText(place.description).addTo(map);
      // });

      // map.on("load", () => {
      //   // add the data source for new a feature collection with no features
      //   map.addSource("random-points-data", {
      //     type: "geojson",
      //     data: {
      //       type: "FeatureCollection",
      //       features: [],
      //     },
      //   });
      //   // now add the layer, and reference the data source above by name
      //   map.addLayer({
      //     id: "random-points-layer",
      //     source: "random-points-data",
      //     type: "symbol",
      //     layout: {
      //       // full list of icons here: https://labs.mapbox.com/maki-icons
      //       "icon-image": "bakery-15", // this will put little croissants on our map
      //       "icon-padding": 0,
      //       "icon-allow-overlap": true,
      //     },
      //   });
      // });

      // map.on("moveend", async () => {
      //   // get new center coordinates
      //   const { lng, lat } = map.getCenter();
      //   // fetch new data
      //   const results = await fetchFakeData({ longitude: lng, latitude: lat });
      //   console.log("results", results)
      //   // update "random-points-data" source with new data
      //   // all layers that consume the "random-points-data" data source will be updated automatically
      //   // map.getSource("random-points-data").setData(results);
      //   map.getSource("random-points-data").setData({ features: res.data});
      // });

      // // change cursor to pointer when user hovers over a clickable feature
      // map.on("mouseenter", "random-points-layer", (e) => {
      //   if (e.features.length) {
      //     map.getCanvas().style.cursor = "pointer";
      //   }
      // });

      // // reset cursor to default when user is no longer hovering over a clickable feature
      // map.on("mouseleave", "random-points-layer", () => {
      //   map.getCanvas().style.cursor = "";
      // });

      // // add popup when user clicks a point
      // map.on("click", "random-points-layer", (e) => {
      //   if (e.features.length) {
      //     const feature = e.features[0];
      //     // create popup node
      //     const popupNode = document.createElement("div");
      //     ReactDOM.render(<Popup feature={feature} />, popupNode);
      //     // set popup on map
      //     popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
      //   }
      // });

      // clean up on unmount
      return () => map.remove();
      // }
    });
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;

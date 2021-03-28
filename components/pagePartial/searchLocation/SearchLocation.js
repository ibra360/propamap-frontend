import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/assets/index.css";

const SearchLocation = (props) => {
  // Events
  const [loc, setLoc] = useState("");

  useEffect(() => {
    setLoc(props.initialValue);
  }, []);

  console.log("PPPPPPPPPP", props);
  console.log("LOC", loc);
  const _onSelectLocation = async (location) => {
    await geocodeByPlaceId(location.place_id)
      .then(async (results) => {
        console.log("ON SELECT======>", results);
        setLoc(results[0].formatted_address);
        return await getLatLng(results[0]);
      })
      .then(async ({ lat, lng }) => {
        if (props.onSuccess) props.onSuccess({ lat, lng, location });
      });
  };

  return (
    <div className="cmp-search-location">
      <GooglePlacesAutocomplete
        initialValue={loc || props.initialValue}
        onSelect={_onSelectLocation}
      />
    </div>
  );
};

export { SearchLocation };

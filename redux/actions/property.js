import serviceHandler from "../../utils/services/serviceHandler";
import ActionTypes from "../constants/actionTypes";
import axios from "axios";

export const GetTrendingPropertiesAction = async () => {
  const res = await serviceHandler.get(`property/trend`);
  return res;
};

export const GetRecommendedPropertiesAction = async () => {
  const res = await serviceHandler.get(`property/recommended`);
  console.log("recomended -->", res);
  return res;
};

export const GetPropertyByIdAction = async (id) => {
  const res = await serviceHandler.get(`property/${id}`);
  return res;
};
export const GetDraftPropertyByIdAction = async (id) => {
  const res = await serviceHandler.get(`property/draft/${id}`);
  return res;
};

export const AddPropertyAction = async (property) => {
  const res = await serviceHandler.post(`property`, {
    body: JSON.stringify(property),
  });
  return res;
};
export const DraftPropertyAction = async (property) => {
  const res = await serviceHandler.post(`property/draft`, {
    body: JSON.stringify(property),
  });
  return res;
};

export const UpdatePropertyAction = async (property, id) => {
  const res = await serviceHandler.put(`property/${id}`, {
    body: JSON.stringify(property),
  });
  return res;
};
export const UpdateDraftAction = async (property, id) => {
  const res = await serviceHandler.put(`property/draft/${id}`, {
    body: JSON.stringify(property),
  });
  return res;
};

export const GetNearByPropertiesAction = async (lat, lon) => {
  const res = await serviceHandler.get(`property/map?lat=${lat}&lon=${lon}`);
  return res;
};

export const searchPropertyByTerm = async (term) => {
  try {
    const res = await serviceHandler.get(`property/searchList?term=${term}`);
    console.log("res of term search-->", res);
    return res;
  } catch (e) {
    throw e;
  }
};

export const searchSuggestion = async (term) => {
  try {
    const res = await serviceHandler.get(
      `property/searchSuggestion?term=${term}`
    );
    console.log("REDUX", res);
    return res;
  } catch (e) {
    throw e;
  }
};
export const getLatestProperties = async (term) => {
  try {
    const res = await serviceHandler.get(`property/latest`);
    console.log("Latest REDUX", res);
    return res;
  } catch (e) {
    throw e;
  }
};

export const SearchPropertiesAction = async ({
  lat,
  lon,
  propertyFor,
  propertyType,
  avaialable_immediately,
  student_only,
  bed_rooms,
  bath_rooms,
  furniture,
  air_condition,
  car_parking,
  internet,
  electricity,
  water,
  living_rooms,
  page,
  limit,
  max,
  min,
}) => {
  // console.log("LALALALLALALL",
  //   `property/search?lat=${lat}&lon=${lon}${
  //     propertyFor ? `&propertyFor=${propertyFor}` : ""
  //   }${
  //     avaialable_immediately
  //       ? `&avaialable_immediately=${avaialable_immediately}`
  //       : ""
  //   }
  // ${student_only ? `&student_only=${student_only}` : ""}
  // ${bed_rooms ? `&features.bed_rooms=${bed_rooms}` : ""}
  // ${bath_rooms ? `&features.bath_rooms=${bath_rooms}` : ""}
  // ${furniture ? `&features.furniture=${furniture}` : ""}
  // ${air_condition ? `&features.air_condition=${air_condition}` : ""}
  // ${car_parking ? `&features.car_parking=${car_parking}` : ""}
  // ${internet ? `&features.internet=${internet}` : ""}
  // ${electricity ? `&includes.electricity=${electricity}` : ""}
  // ${water ? `&includes.water=${water}` : ""}
  // ${living_rooms ? `&features.living_rooms=${living_rooms}` : ""}
  // ${propertyType ? `&propertyType=${propertyType}` : ""}${
  //     page ? `&page=${page}` : ""
  //   }${limit ? `&limit=${limit}` : ""}`.split("")
  // );
  try {
    // console.log("propsssssss111", max, min);

    let url = `property/search?lat=${lat}&lon=${lon}`;

    if (propertyFor && propertyFor.length > 0) {
      // console.log('cha rahy ho?',propertyFor)
      let sp = url.split("&");
      sp.push(`property_for=${propertyFor}`);
      url = sp.join("&");
    }
    console.log("propsssssss111", max, min);

    if (propertyType && propertyType.length > 0) {
      // console.log('cha rahy ho type?',propertyType)
      let sp = url.split("&");
      sp.push(`property_type=${propertyType}`);
      url = sp.join("&");
    }
    if (page) {
      // console.log('cha rahy ho type?',page=2)
      let sp = url.split("&");
      sp.push(`&page=${page}`);
      url = sp.join("&");
    }
    if (avaialable_immediately) {
      if (limit) {
        // console.log('cha rahy ho type?',limit)
        let sp = url.split("&");
        sp.push(`limit=${limit}`);
        url = sp.join("&");
      }
      // console.log('cha rahy ho type?',avaialable_immediately)
      let sp = url.split("&");
      sp.push(`avaialable_immediately=${avaialable_immediately}`);
      url = sp.join("&");
    }
    if (bed_rooms > 0) {
      console.log("bed?", bed_rooms);
      let sp = url.split("&");
      sp.push(`features.bed_rooms=${bed_rooms}`);
      url = sp.join("&");
    }
    if (bath_rooms > 0) {
      console.log("bath?", bath_rooms);
      let sp = url.split("&");
      sp.push(`bath_rooms=${bath_rooms}`);
      url = sp.join("&");
    }
    if (air_condition === true) {
      console.log("AIRRR CONDITION", air_condition);
      let sp = url.split("&");
      sp.push(`features.air_condition=${air_condition}`);
      url = sp.join("&");
    }
    if (internet === true) {
      console.log("internet", internet);
      let sp = url.split("&");
      sp.push(`features.internet=${internet}`);
      url = sp.join("&");
    }
    if (car_parking === true) {
      console.log("AIRRR CONDITION", car_parking);
      let sp = url.split("&");
      sp.push(`features.car_parking=${car_parking}`);
      url = sp.join("&");
    }
    if (furniture === true) {
      console.log("AIRRR CONDITION", furniture);
      let sp = url.split("&");
      sp.push(`features.furnished=${furniture}`);
      url = sp.join("&");
    }
    // if (kitchen === true) {
    //   console.log("AIRRR CONDITION", kitchen);
    //   let sp = url.split("&");
    //   sp.push(`features.kitchen=${kitchen}`);
    //   url = sp.join("&");
    // }

    if (max > 0) {
      console.log("PRice MAX", max);
      let sp = url.split("&");
      sp.push(`max=${max}`);
      url = sp.join("&");
    }
    if (min > 0) {
      console.log("PRice minnnn", min);
      let sp = url.split("&");
      sp.push(`min=${min}`);
      url = sp.join("&");
    }
    console.log("LOL");
    const res = await serviceHandler.get(
      url
      // `http://localhost:5000/property/search?lat=${lat}&lon=${lon}${
      //   propertyFor ? `&property_for=${propertyFor}` : `&property_for=rent`
      // }
      // ${
      //   avaialable_immediately
      //     ? `&avaialable_immediately=${avaialable_immediately}`
      //     : ""
      // }${student_only && `&student_only=${student_only}`}${
      //   bed_rooms && `&features.bed_rooms=${bed_rooms}`
      // }${bath_rooms && `&features.bath_rooms=${bath_rooms}`}${
      //   furniture && `&features.furniture=${furniture}`
      // }${air_condition && `&features.air_condition=${air_condition}`}${
      //   car_parking && `&features.car_parking=${car_parking}`
      // }${internet && `&features.internet=${internet}`}${
      //   electricity && `&includes.electricity=${electricity}`
      // }${water && `&includes.water=${water}`}${
      //   living_rooms && `&features.living_rooms=${living_rooms}`
      // }
      // ${page && `&page=${page}`}${limit && `&limit=${limit}`}`
    );
    console.log("propsssssss", max, min);
    console.log("hellllll res", res);
    return res;
  } catch (error) {
    console.log("eeeeeee", error);
  }
};

export const getFavouriteProperty = async () => {
  try {
    const res = await serviceHandler.get(`user/favorite`);
    console.log("res of fav -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const getMyAdvertisement = async (id) => {
  try {
    const res = await serviceHandler.get(`user/property/${id}`);
    console.log("res of my advertisement -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const getMyDraft = async (id) => {
  try {
    const res = await serviceHandler.get(`user/property/draft/${id}`);
    console.log("res of my draft from redux -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const deleteMyAdvertisements = async (id) => {
  try {
    const res = await serviceHandler.delete(`property/${id}`);
    console.log("res of delete my advertisement -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};
export const deleteMyDrafts = async (id) => {
  try {
    const res = await serviceHandler.delete(`property/draft/${id}`);
    console.log("res of delete my draft -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const addFavouriteProperty = async (obj) => {
  try {
    const res = await serviceHandler.put(`user/favorite`, {
      body: JSON.stringify(obj),
    });
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const removeFavouriteProperty = async (obj) => {
  try {
    const res = await serviceHandler.put(`user/remove_favorite`, {
      body: JSON.stringify(obj),
    });
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};

export const addFavourite = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ADD_FAVOURITE, payload: id });
  };
};

export const removeFavourite = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.REMOVE_FAVOURITE, payload: id });
  };
};

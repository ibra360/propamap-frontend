export const propertyFor = [
  { value: "rent", text: "Rent" },
  { value: "sell", text: "Sell" },
];

export const subjects = [
  { value: "feedback", text: "Feedback" },
  { value: "report a bug", text: "Report a bug" },
  {
    value: "membership and payment issue",
    text: "Membership and payment issue",
  },
  { value: "other", text: "Other" },
];
// YE SHOW NHY HORAHY KAHIN
export const rentPropertyType = [
  //{ value: 'any', text: 'Any' },
  { value: "room", text: "Room" },
  // { value: "Single Room", text: "Single Room" },

  // { value: "Middle Room", text: "Middle Room" },
  // { value: 'Single Room', text: 'Room1' },
  { value: "apartment", text: "Apartment" },
  { value: "condominium", text: "Condominium" },
  { value: "house", text: "House" },
  { value: "office", text: "Office" },
  { value: "villa", text: "Villa" },
  { value: "land", text: "Land" },
  { value: "floor", text: "Floor" },
  { value: "building", text: "Building" },
  { value: "cottage", text: "Cottage" },
  { value: "store", text: "Store" },
  { value: "farm", text: "Farm" },
  { value: "warehouse", text: "Warehouse" },
  // { value: 'garage', text: 'Garage' }
];

export const sellPropertyType = [
  // { value: 'any', text: 'Any' },
  { value: "Single Room", text: "Single Room" },
  { value: "Middle Room", text: "Middle Room" },

  { value: "apartment", text: "Apartment" },
  { value: "condominium", text: "Condominium" },
  { value: "house", text: "House" },
  //{ value: 'office', text: 'Office' },
  { value: "villa", text: "Villa" },
  { value: "land", text: "Land" },
  { value: "building", text: "Building" },
  { value: "cottage", text: "Cottage" },
  { value: "store", text: "Store" },
  { value: "farm", text: "Farm" },
  { value: "warehouse", text: "Warehouse" },
];

export const rentalTime = [
  { value: "monthly", text: "Monthly" },
  { value: "annually", text: "Annually" },
];

export const genderAllowed = [
  { value: "male", text: "Male only" },
  { value: "female", text: "Female only" },
  { value: "all", text: "All" },
];

export const requiredFieldForSell = [
  "adTitle",
  "address",
  "location",
  "propertyFor",
  "propertyType",
  "propertyPrice",
  "propertyDetails",
  "acceptTermAndPolicy",
];

export const requiredFieldForRent = [
  ...requiredFieldForSell,
  "rentalTime",
  "genderAllowed",
];

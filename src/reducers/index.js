const initialState = {
    provinceId: null,
    regencyId: null,
    districtId: null,
    villageId: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROVINCE_ID':
        return { ...state, provinceId: action.payload };
      case 'SET_REGENCY_ID':
        return { ...state, regencyId: action.payload };
      case 'SET_DISTRICT_ID':
        return { ...state, districtId: action.payload };
      case 'SET_VILLAGE_ID':
        return { ...state, villageId: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
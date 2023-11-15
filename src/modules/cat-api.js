export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/breeds';

  const url = BASE_URL + END_POINT;

  // console.log(url);
  const options = {
    headers: {
      'x-api-key':
        'live_zzVbDSDKwG5bF2xsLCvDaBwUnSwOXxREbOBy6bRHfxv5Bl4KG0GBvjyz0uiZDhy1',
    },
  };
  return fetch(url, options).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/images/search';
  const PARAMS = `?breed_ids=${breedId}`;
  const url = BASE_URL + END_POINT + PARAMS;
  // console.log(url);
  const options = {
    headers: {
      'x-api-key':
        'live_zzVbDSDKwG5bF2xsLCvDaBwUnSwOXxREbOBy6bRHfxv5Bl4KG0GBvjyz0uiZDhy1',
    },
  };
  return fetch(url, options).then(res => {
    // console.log(response);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
const BASE_AFFILIATE_LINK = 'https://www.tkqlhce.com/click-9083409-13166761';

export const getAffiliateLink = (destination: string, source: string): string => {
  // Create a tracking URL with source and destination parameters
  const trackingParams = `?utm_source=${source}&utm_medium=affiliate&utm_campaign=roadtrip&destination=${destination}`;
  return `${BASE_AFFILIATE_LINK}${trackingParams}`;
};

export const getDestinationLink = (destination: string, source: string): string => {
  return getAffiliateLink(destination, source);
};
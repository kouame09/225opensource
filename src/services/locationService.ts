/**
 * Location Service
 * Handles geolocation detection to restrict access to Côte d'Ivoire users only
 */

interface LocationResponse {
  country_code: string;
  country_name: string;
  error?: boolean;
  reason?: string;
}

// Cache the location result to avoid multiple API calls
let cachedLocation: { countryCode: string; timestamp: number } | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetches the user's country based on their IP address
 * Uses ipapi.co free API (rate limit: 1000 requests/day)
 */
export const getUserCountry = async (): Promise<string | null> => {
  // Check cache first
  if (cachedLocation) {
    const now = Date.now();
    if (now - cachedLocation.timestamp < CACHE_DURATION) {
      return cachedLocation.countryCode;
    }
  }

  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch location:', response.status);
      return null;
    }

    const data: LocationResponse = await response.json();

    if (data.error) {
      console.error('Location API error:', data.reason);
      return null;
    }

    // Cache the result
    cachedLocation = {
      countryCode: data.country_code,
      timestamp: Date.now(),
    };

    return data.country_code;
  } catch (error) {
    console.error('Error fetching user location:', error);
    return null;
  }
};

/**
 * Checks if the user is located in Côte d'Ivoire
 * @returns Promise<boolean> - true if user is in Côte d'Ivoire, false otherwise
 */
export const isUserInCoteDivoire = async (): Promise<boolean> => {
  const countryCode = await getUserCountry();
  
  // CI is the ISO country code for Côte d'Ivoire
  return countryCode === 'CI';
};

/**
 * Clears the location cache (useful for testing)
 */
export const clearLocationCache = (): void => {
  cachedLocation = null;
};

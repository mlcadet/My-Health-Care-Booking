const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
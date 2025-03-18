const apiUrl = import.meta.env.VITE_API_BASE_URL; // e.g., http://localhost:3002

export const fetchDoctors = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/doctor/doctors`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        email: 'admin1@example.com',       // must match a real admin or user in DB
        password: 'securePassword123'      // exact match of the stored password
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};


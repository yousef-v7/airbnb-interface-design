export const get_Explore = async () => {
  try {
    const Base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${Base_url}/b/4G1G`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.error("Error fetching explore data:", error);
  }
};

export const get_Live = async () => {
  try {
    const Base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${Base_url}/b/VHHT`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const liveData = await res.json();
    return liveData ;
  } catch (error) {
    console.error("Error fetching explore data:", error);
  }
};

export const get_SearchResult = async () => {
  try {
    const Base_url = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${Base_url}/b/5NPS`);
    const searchResultDate = await res.json();
    return searchResultDate;
  } catch (error) {
    console.log(error);
  }
};
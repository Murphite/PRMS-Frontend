export const getCategories = async () => {
    try {
      const res = await axios.get('api/v1/category'); 
  
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  
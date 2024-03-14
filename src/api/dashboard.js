export const getCategories = async () => {
    try {
      const res = await axios.get('/api/category'); 
  
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  
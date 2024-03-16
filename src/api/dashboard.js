export const getCategories = async () => {
    try {
      const res = await axios.get('/category'); 
  
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  
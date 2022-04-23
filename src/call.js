const call = async (id) => {
    const response = await fetch(
      `https://quiet-fortresponses-06303.herokuapp.com/api/chars/${id}`,
      { method: "post" }
    );
    const data = await response.json();
    return data.name    
  };

  export { call };

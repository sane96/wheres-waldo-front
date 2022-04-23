const call = async (id) => {
    const response = await fetch(
      `www.app.com/api/chars/${id}`,
      { method: "post" }
    );
    const data = await response.json();
    return data.name    
  };

  export { call };

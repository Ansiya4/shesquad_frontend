import { api } from "../AxiosUtils/AxiosUtils";

// ----------------------------Get methods-------------------------------------//
const GetCategorylist = () => {
  return api
    .get('/admin-panel/category/')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error fetching user list:', error);
      throw error;
    });
};


// ----------------------------Post methods-------------------------------------//

const AddCategoryUrl = (values) => {
  return api
    .post('/admin-panel/category/', values, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error fetching user list:', error);
      throw error;
    });
};

// ----------------------------Put patch methods-------------------------------------//
const EditCategoryUrl = (values,id) => {
  return api
    .patch(`/admin-panel/category/${id}/`, values, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error fetching user list:', error);
      throw error;
    });
};


export { GetCategorylist, AddCategoryUrl,EditCategoryUrl };

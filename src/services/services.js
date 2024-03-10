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

const GetExpertsCategoryWise = (cat_id) => {
  return api
    .get(`/admin-panel/expert-category/?cat_id=${cat_id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error fetching user list:', error);
      throw error;
    });
};

const GetChatuserListUserSide = (user_id) => {
  return api
    .get(`/chat/addtochat-user-list/${user_id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error fetching user list:', error);
      throw error;
    });
};

const GetChatExpertListUserSide = (expert_id) => {
  return api
    .get(`/chat/addtochat-expert-list/${expert_id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error('Error fetching user list:', error);
      throw error;
    });
};

// Dashboard users list 
const GetLastloginList = () => {
  return api
    .get('/admin-panel/last-login-list/')
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

const AddToChat = (values) => {
  return api
    .post('/chat/addtochat/', values, {
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


export { GetCategorylist, AddCategoryUrl,EditCategoryUrl ,GetExpertsCategoryWise, AddToChat,GetChatuserListUserSide,GetChatExpertListUserSide,GetLastloginList};

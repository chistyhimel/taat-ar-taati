export const USER_BASE_URL = `https://dev.classforma.com:5004`;
export const FILE_BASE_URL = `https://dev.classforma.com:5003`;
export const DATASET_BASE_URL = `https://dev.classforma.com:5001/datasets`;

export const api = {
  user: {
    signUp: `${USER_BASE_URL}/register/`,
    verifyEmail: (key) => {
      return `${USER_BASE_URL}/verify/?key=${key}`;
    },
    signIn: `${USER_BASE_URL}/login/`,
    getInfo: `${USER_BASE_URL}/get_info/`,
    updateInfo: `${USER_BASE_URL}/update_info/`,
    deleteUser: `${USER_BASE_URL}/delete/`,
    password_recovery: (email) => {
      return `${USER_BASE_URL}/password_recovery/${email}`;
    },
  },

  file: {
    getUploadUrl: `${FILE_BASE_URL}/get_upload_url`,
    listFolderContent: `${FILE_BASE_URL}/list_folder_content`,
    createFolder: `${FILE_BASE_URL}/create_folder`,
  },

  dataset: {
    create: `${DATASET_BASE_URL}/create`,
  },
};

export const storeData = (userData) => {
  localStorage.setItem("userData", JSON.stringify(userData));
};

export const storeToken = (token) => {
  localStorage.setItem("token", "Bearer " + token);
};

export const userData = (key) => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const userDataTranslated = JSON.parse(userData);
    return userDataTranslated[key] ? userDataTranslated[key] : null;
  } else {
    return null;
  }
};

export const logout = () => {
  localStorage.clear();
};

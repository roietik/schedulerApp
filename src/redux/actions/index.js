export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id,
  };
};

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};

export const editItem = (item) => {
  return {
    type: 'EDIT_ITEM',
    payload: item,
  };
};

export const changeNotification = (notification) => {
  return {
    type: 'NOTIFICATION',
    payload: notification,
  };
};

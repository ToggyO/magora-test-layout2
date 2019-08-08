export const MODAL_ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};


export const modalOpen = (modalKey, options) => {
  return {
    type: MODAL_ACTIONS.OPEN_MODAL,
    payload: {
      modalKey: modalKey,
      options: options
    },
  };
};

export const modalClose = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_MODAL
  };
};


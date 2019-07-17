export const MODAL_ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};


export const modalOpen = () => {
  return {
    type: MODAL_ACTIONS.OPEN_MODAL
  };
};

export const modalClose = () => {
  return {
    type: MODAL_ACTIONS.CLOSE_MODAL
  };
};


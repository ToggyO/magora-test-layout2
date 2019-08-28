export const MODAL_ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};


export const modalOpen = (modalKey, options) => ({
  type: MODAL_ACTIONS.OPEN_MODAL,
  payload: {
    modalKey,
    options,
  },
});

export const modalClose = () => ({
  type: MODAL_ACTIONS.CLOSE_MODAL,
});

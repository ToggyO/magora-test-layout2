export const ERROR_WRAPPER = {
  ERROR_TRUE: 'ERROR_TRUE',
  ERROR_FALSE: 'ERROR_FALSE',
};


export const errorWrapperTrue = () => ({
  type: ERROR_WRAPPER.ERROR_TRUE,
});


export const errorWrapperFalse = () => ({
  type: ERROR_WRAPPER.ERROR_FALSE,
});

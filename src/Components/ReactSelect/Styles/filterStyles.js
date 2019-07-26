export const styles = {
  menu: (provided, state) => ({
    ...provided,
    paddingTop: '20px',
    marginTop: '-20px',
    zIndex: '9'
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#2F2F2F' : '#666',
    backgroundColor: state.isSelected ? '#dff8ff' : 'transparent',
    padding: 20,
    '&:hover': {
      backgroundColor: '#dff8ff'
    },
    '&:active': {
      backgroundColor: '#dff8ff'
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    flexWrap: 'nowrap',
    maxWidth: '270px',
    minWidth: '100px',
    overflow: 'hidden',
    height: '34px'
  }),
  container: (provided, state) => ({
    ...provided,
    position: 'relative',
    boxShadow: '0 9px 23px 0 rgba(0,0,0,0.15)',
    borderRadius: '24.5px',
  }),
  control: (provided, state) => {
   return {
    ...provided,
    // none of react-select's styles are passed to <Control />
    minWidth: '180px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '24.5px',
    zIndex: state.selectProps.menuIsOpen ? '11' : '0',
    borderColor: state.isFocused ? '#35D0DE' : 'white',
    boxShadow: 'none',
    height: '49px',
    '&:hover': {
      borderColor: 'none'
    }
  }},
  input: (provided, state) => ({
    ...provided,
    marginLeft: '11.5px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    content: '"Sort By..."',
    marginLeft: '11.5px',
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: 'normal',
    lineHeight: '18px',
    color: '#99B0BE'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none'
  }),
  dropdownIndicator: (provided, state, props) => {

    return {
    ...provided,
      transition: 'all .2s ease',
      transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : null
    }
  },
  noOptionsMessage: (provided, state) => ({
  ...provided,
    backgroundColor: '#fff'
}),
  singleValue: (provided, state) => ({
    ...provided,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 'normal',
    lineHeight: 18,
    color: '#2F2F2F',
  })

};


// borderRadius: '24.5px 24.5px 0 0'

// singleValue: (provided, state) => {
//   // const opacity = state.isDisabled ? 0.5 : 1;
//   // const transition = 'opacity 300ms';
//   const color = 'red'
//
//   return { ...provided, color };
// }
import React from 'react';
import PropTypes from 'prop-types';
import s from './Select.module.sass';
import Option from './Option/Option';
import ReduxFormInputWrapper from '../ReduxFormInputWrapper/InputWrapper';


class ReduxFormSelect extends React.Component {
  render() {
    const {
      input,
      label,
      options,
      meta,
    } = this.props;

    return (
      <div>
        <ReduxFormInputWrapper
          label={label}
          error={meta.error}
          touched={meta.touched}
        >
          <div className={s.select_container}>
            <select
              className={s.select}
              name={input.name}
              onChange={input.onChange}
              value={input.value}
              onBlur={input.onBlur}
            >
              {options.map((o, i) => <Option key={i} value={o.value} title={o.title}/>)}
            </select>
          </div>
        </ReduxFormInputWrapper>
      </div>
    );
  }
}

export default ReduxFormSelect;


ReduxFormSelect.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.object,
};

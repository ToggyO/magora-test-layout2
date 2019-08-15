import React from 'react';
import s from './Select.module.sass';
import Option from './Option/Option';
import InputWrapper from "../InputWrapper/InputWrapper";


class ReduxFormSelect extends React.Component {

  render() {

    const { input, label, option, name, state, onChange,  error, visited } = this.props;

    return (
      <div>
        <InputWrapper label={label} error={error} visited={visited}>
          <div className={s.select_container}>
            <select  className={s.select} name={name} onChange={onChange} value={state}>
              {option.map( (o, i) => <Option key={i} value={o.value} title={o.title}/>)}
            </select>
          </div>
        </InputWrapper>
      </div>

    )
  }
}

export default ReduxFormSelect;
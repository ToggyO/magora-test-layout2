import React from "react";
import DatePicker from "react-datepicker";
// import moment from 'moment';
import "./react-datepicker_custom.css";
import DateStyledWrapper from "./DateStyledWrapper";
import Icon from '../../Icons/Icons';


export default class DatePickerStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
    // this.state = {
    //   startDate: new Date(),
    //   endDate: new Date(),
    // };

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }



  handleChangeStart(date) {
    this.setState({
      ...this.state,
      startDate: date,
    });
  }

  handleChangeEnd(date) {
    this.setState({
      ...this.state,
      endDate: date,
    });
  }

  render() {
    return (
      <>
        <DateStyledWrapper>
          <DatePicker
            placeholderText="Date from..."
            dateFormat="dd/MM/yyyy"
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            // onSelect={}
          />
          <div
            className='datepicker-custom__calendar'
            style={
              {
                alignSelf: 'center',
                position: 'absolute',
                right: '12px',
                top: '10px',
                marginLeft: '-30px',
              }
            }
            onChange={this.handleChange}
          >
            <Icon iconName='calendar' />
          </div>
        </DateStyledWrapper>
        <DateStyledWrapper>
          <DatePicker
            placeholderText="Date to..."
            dateFormat="dd/MM/yyyy"
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            minDate={this.state.startDate}
            onChange={this.handleChangeEnd}
          />
          <div
            className='datepicker-custom__calendar'
            style={
              {
                alignSelf: 'center',
                position: 'absolute',
                right: '12px',
                top: '10px',
                marginLeft: '-30px',
              }
            }
            onChange={this.handleChange}
          >
            <Icon iconName='calendar' />
          </div>
      </DateStyledWrapper>
    </>
    );
  }
};


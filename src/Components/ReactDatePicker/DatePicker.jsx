import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import "./react-datepicker_custom.css";
import DateStyledWrapper from "./DateStyledWrapper";
import Icon from '../../Icons/Icons';


export default class DatePickerStart extends React.Component {
  render() {

    let startDateFromState = this.props.startDate && moment(this.props.startDate).toDate();
    let endDateFromState = this.props.endDate && moment(this.props.endDate).toDate();

    return (
      <>
        <DateStyledWrapper>
          <DatePicker
            placeholderText="Date from..."
            dateFormat="dd/MM/yyyy"
            selected={startDateFromState}
            selectsStart
            startDate={startDateFromState}
            endDate={endDateFromState}
            onSelect={(date) => this.props.datePick(moment(date).toISOString(), 'startDate')}
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
            dateFormat="dd/MM/yyyy/"
            selected={endDateFromState}
            selectsEnd
            startDate={startDateFromState}
            endDate={endDateFromState}
            minDate={startDateFromState}
            onSelect={(date) => this.props.datePick(moment(date).toISOString(), 'endDate')}
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















// constructor(props) {
//   super(props);
//   this.state = {
//     startDate: null,
//     endDate: null,
//   };
//   // this.state = {
//   //   startDate: new Date(),
//   //   endDate: new Date(),
//   // };
//
//   this.handleChangeStart = this.handleChangeStart.bind(this);
//   this.handleChangeEnd = this.handleChangeEnd.bind(this);
// }
//
// handleChangeStart(date) {
//   this.setState({
//     ...this.state,
//     startDate: date,
//   });
// }
//
// handleChangeEnd(date) {
//   this.setState({
//     ...this.state,
//     endDate: date,
//   });
// }
import React from 'react';
import { components } from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { projectsSortCheckboxValues } from '../../../Store/Actions/fetchedData/actionFetchProjectsData';


const Option = (props) => <div
      onClick={() => props.projectsSortCheckboxValues(props.value, !!props.isSelected)}
    >
      <components.Option {...props}>
        <input
          type="checkbox"
          defaultChecked={props.isSelected}
          style={
            {
              display: 'none',
              fontSize: '18px',
              fontWeight: '600',
              letterSpacing: 'normal',
              lineHeight: '18px',
            }
          }
        />
        {props.label}
        <span
          style={
            {
              position: 'absolute',
              right: '20px',
              margin: 'auto',
              display: 'inline-block',
              borderRadius: '3px',
              height: '20px',
              width: '20px',
              border: '1px solid #35d0de',
              background: props.isSelected ? '50% 50% url("/img/findProjects/checkbox.svg")' : null,
            }
          }
        >
      </span>
      </components.Option>
    </div>;


const mapStateToProps = ({ fetchedOptions, fetchedProjectsData }) => ({
  fetchedOptions, fetchedProjectsData,
});
const mapDispatchToProps = (dispatch) => ({
  projectsSortCheckboxValues: bindActionCreators(projectsSortCheckboxValues, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Option);

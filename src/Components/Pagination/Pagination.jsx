import React from 'react';
import ReactPaginate from 'react-paginate';
import { parse, stringify } from 'qs';
import './Pagination.scss';
import history from '../../history';
import PaginationArrow from "./PaginationArrow/PaginationArrow";
// import PropTypes from 'prop-types';

class Pagination extends React.Component {

  // static propTypes = {
  //   totalCardsCount: PropTypes.number,
  //   pageSize: PropTypes.number,
  //   location: PropTypes.object,
  //   currentPage: PropTypes.any,
  //
  // };
  // static defaultProps = {
  //   totalCardsCount: 1,
  //   pageSize: 9,
  //   location: {},
  //   currentPage: null,
  // };
  onPageChange = ({ selected: selectedPage = 0 }) => {
    // if (typeof this.props.customPageClick === 'function') {
    //   return this.props.customPageClick(selectedPage + 1);
    // }
    // const { location = {} } = history;
    // const { search = '', pathname } = location;
    const { location,  } = this.props;
    const queries = parse(location.search, { ignoreQueryPrefix: true }) || {};
    queries.page = selectedPage + 1;
    history.push(`${location.pathname}?${stringify(queries)}`);
  };


  render() {

    const { location, projectsData } = this.props;

    // const { location = {} } = history;
    // const { search = '' } = location;
    const queries = parse(location.search, { ignoreQueryPrefix: true }) || {};

    const initialPage = queries.page || projectsData.history.page || 1;

    const { totalCardsCount = 0, pageSize } = projectsData;
    const pageCount = Math.ceil(totalCardsCount / pageSize);
    if (pageCount <= 1) {
      return null;
    }

    return (
      <div className="pagination-container">
        <ReactPaginate
          onPageChange={this.onPageChange}
          containerClassName="pagination"
          pageClassName="pagination__page"
          activeClassName="pagination__page-active"
          previousClassName="pagination__previous"
          nextClassName="pagination__next"
          disabledClassName="pagination__disabled"
          pageLinkClassName="pagination__page-link"
          previousLinkClassName="pagination__previous-link"
          nextLinkClassName="pagination__next-link"
          breakClassName="pagination__break"
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          forcePage={+initialPage - 1}
          previousLabel={<PaginationArrow />}
          nextLabel={<PaginationArrow />}
        />
      </div>
    );
  }
}

export default Pagination;
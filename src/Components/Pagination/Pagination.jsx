import React from 'react';
import ReactPaginate from 'react-paginate';
import { parse, stringify } from 'qs';
import './Pagination.scss';
import history from '../../history';
import PaginationArrow from "./PaginationArrow/PaginationArrow";

class Pagination extends React.Component {

  // static propTypes = {
  //   total: PropTypes.number,
  //   pageSize: PropTypes.number,
  //   history: PropTypes.object,
  //   page: PropTypes.any,
  //   customPageClick: PropTypes.any,
  // };
  // static defaultProps = {
  //   total: 1,
  //   pageSize: 1,
  //   history: {},
  //   page: null,
  //   customPageClick: null,
  // };
  onPageChange = ({ selected: selectedPage = 0 }) => {
    // if (typeof this.props.customPageClick === 'function') {
    //   return this.props.customPageClick(selectedPage + 1);
    // }
    // const { history } = this.props;
    // const { location = {} } = history;
    // const { search = '', pathname } = location;
    const queries = parse(this.props.location.search, { ignoreQueryPrefix: true }) || {};
    queries.page = selectedPage + 1;
    history.push(`${this.props.location.pathname}?${stringify(queries)}`);
  };
  render() {
    console.log(this.props);
    // const { history } = this.props;
    // const { location = {} } = history;
    // const { search = '' } = location;
    const queries = parse(this.props.location.search, { ignoreQueryPrefix: true }) || {};

    const initialPage = queries.page || this.props.fetchedProjectsData.currentPage || 1;

    const { totalCardsCount = 0, pageSize } = this.props.fetchedProjectsData;
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
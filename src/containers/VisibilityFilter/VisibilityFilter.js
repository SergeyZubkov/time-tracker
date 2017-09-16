import React, { Component } from 'react';
import './VisibilityFilter.css';
import Counter from '../../Counter/Counter';
import {changeVisibility} from '../../actions/visibilityFilter';
import {connect} from 'react-redux';

class VisibilityFilter extends Component {
  showActive = () => {
    this.props.onChangeVisibility('ACTIVE');
  }

  showAll = () => {
    this.props.onChangeVisibility('ALL');
  }

  showComplete = () => {
    this.props.onChangeVisibility('COMPLETE');
  }

  render() {
    const isActive = (value) => this.props.visibility === value ? 'visibility-filter__option_active' : 'visibility-filter__option';
    console.log(this.props)
    return (
      <div className="visibility-filter">
        <div
          className={"visibility-filter__option " + isActive('ACTIVE')}
          onClick={this.showActive}
        >
          <Counter
            number={this.props.items.filter(item => item.status === 'ACTIVE').length}
          />
          <div className="visibility-filter__option-text">
            активные
          </div>
        </div>
        <div
          className={"visibility-filter__option " + isActive('COMPLETE')}
          onClick={this.showComplete}
        >
          <Counter
            number={this.props.items.filter(item => item.status === 'COMPLETE').length}
          />
          <div className="visibility-filter__option-text">
            завершенные
          </div>
        </div>
        <div
          className={"visibility-filter__option " + isActive('ALL')}
          onClick={this.showAll}
        >
          <Counter
            number={this.props.items.length}
          />
          <div className="visibility-filter__option-text">
            все
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  visibility: state.visibilityFilter
});

const mapDispatchToProps = {
  onChangeVisibility: changeVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);

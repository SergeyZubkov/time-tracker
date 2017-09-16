import React, { Component } from 'react';
import './VisibilityFilter.css';
import Counter from '../Counter/Counter';

class VisibilityFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: 'ACTIVE'
    }
  }

  showActive = () => {
    this.setState({show: 'ACTIVE'}, () => this.props.onChange(this.state.show));
  }

  showComplete = () => {
    this.setState({show: 'COMPLETE'}, () => this.props.onChange(this.state.show));

  }

  showAll = () => {
    this.setState({show: 'ALL'}, () => this.props.onChange(this.state.show));
  }

  render() {
    const isActive = (value) => this.state.show === value ? 'visibility-filter__option_active' : 'visibility-filter__option';

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

export default VisibilityFilter;

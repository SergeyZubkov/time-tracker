import React from 'react';
import "./Editable.css";

class Editable extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			value: this.props.value,
			isEditMode: this.props.isEditMode
		}
	}

	handleChange = (e) => {
		this.setState({value: e.target.value})
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isEditMode !== this.state.isEditMode) {
			this.setState({
				isEditMode: nextProps.isEditMode
			}, () => {
				if (!this.state.isEditMode) {
					this.props.onAfterEdit(this.props.prop, this.state.value)
				}
				this.setState({
					value: this.props.value
				})
			})
		}
	}

	render() {
		let child;

			// throw 'Editable может содержать только текст или число'

		const clName = 'editable'


		if (this.state.isEditMode) {
			if (this.props.type === 'text') {
				child = (
					<textarea
						className={clName}
						value={this.state.value}
						onChange={this.handleChange}
					/>
				)
			} else {
				child = (
					<input
						className={clName}
						type={this.props.type ==='string' ? 'text' : 'number'}
						value={this.state.value}
						onChange={this.handleChange}
					/>
				)
			}
		} else {
			child = (
				<span
					className={clName}
				>
					{this.props.children}
				</span>
			)
		}

		return child
	}
}

export default Editable;
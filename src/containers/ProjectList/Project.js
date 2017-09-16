import React from 'react';
import './Project.css';
import Dropdown from '../../Dropdown/Dropdown';
import FontAwesome from 'react-fontawesome';
import dataService from '../../dataService';
import Editable from '../../Editable/Editable';
import PlayBtn from '../../PlayBtn/PlayBtn';

// перенести в пропсы все свойства объекта project (излишне каждый раз обращаться к объекту project)
// если мы меняем проекту статус на "COMPLETE", при этом он является отслеживаемым, то таймер должен выключаться
//  + завершенные проекты не дожны иметь компонент PlayBtn

class Project extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
			newValue: {},
			isTrackering: this.props.project.isTrackering
		}
	}

	startTimer() {
		const tick = () => {
			let {
				id,
				time
			} = this.props.project;

			dataService.updateProject(id, {time: time + 1});
		}

		tick();

		this.timer = setInterval(tick, 1000);
	}

	stopTimer() {
		clearInterval(this.timer);
	}

	setupTimer() {
		let isTrackering = this.state.isTrackering;
		if (isTrackering) {
			this.startTimer();
		} else {
			this.stopTimer();
		}
	}

	componentWillMount() {
		this.setupTimer();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.project.isTrackering === this.props.project.isTrackering) return

		this.setState(
			{isTrackering: nextProps.project.isTrackering},
			() =>	this.setupTimer()
		)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	edit = () => {
		this.setState({
			editMode: !this.state.editMode
		})
	}

	updateValue = (prop, val) => {
		this.setState({
			newValue: Object.assign(this.state.newValue, {[prop]: val})
		})
		console.log(this.state)
	}

	update = () => {
		this.setState({
			editMode: !this.state.editMode
		}, () => {
			console.log(dataService);
			dataService.updateProject(this.props.project.id, this.state.newValue);
		})
	}

	exitEdit = () => {
		this.setState({
			editMode: !this.state.editMode
		})
	}

	complete = () => {
		dataService.completeProject(this.props.project.id);
		if(this.timer) {
			clearInterval(this.timer)
		}
	}

	resume = () => {
		dataService.updateProject(this.props.project.id, {status: 'ACTIVE'});
	}

	delete = () => {
		dataService.removeProject(this.props.project.id);
	}

	toggleTracking = () => {
		dataService.updateProject(this.props.project.id, {isTrackering: !this.props.project.isTrackering})
	}

	render() {
		const {
			status,
			title,
			rate,
			time
		} = this.props.project;

		const getStatusClName = () => {
			let postfix;

			switch (status) {
				case 'ACTIVE':
					postfix = '_active';
					break
				case 'COMPLETE':
					postfix = '_complete';
					break
			}

			return 'project-item__status project-item__status' + postfix;
		}

		return (
			<div
				className='project-item'
			>
				<Dropdown
					className={`project-item__dropdown`}
					title={<FontAwesome name='ellipsis-v' />}
				>
					<div
						onClick={this.complete}
						style={
							{display: status === 'COMPLETE' ? 'none': ''}
						}
					>
						Завершить
					</div>
					<div
						onClick={this.resume}
						style={
							{display: status === 'COMPLETE' ? '': 'none'}
						}
					>
						Возобновить
					</div>
					<div
						style={
							{
								display: this.state.editMode ? 'none' : ''
							}
						}
						onClick={this.edit}
					>
						Редактировать
					</div>
					<div onClick={this.delete}> Удалить </div>
				</Dropdown>
				<span
					className={getStatusClName()}
					style={{
						display: this.props.indicateStatus ? '' :  "none"
					}}
				>
				</span>
				<span
					className='project-item__title'
				>
					<Editable
						type='string'
						prop='title'
						value={title}
						isEditMode={this.state.editMode}
						onAfterEdit={this.updateValue}
					>
						{title}
					</Editable>
				</span>
				<span
					className='project-item__rate'
				>
					<Editable
						type='number'
						prop='rate'
						value={rate}
						isEditMode={this.state.editMode}
						onAfterEdit={this.updateValue}
					>
						{rate}
						<FontAwesome
							name='rub'
						/>
						/ час
					</Editable>
				</span>
				<span
					className='project-item__time'
				>
					<Editable
						type='number'
						prop='time'
						value={time}
						isEditMode={this.state.editMode}
						onAfterEdit={this.updateValue}
					>
						{time}
					</Editable>
				</span>
				<span
					className='project-item__play-btn'
					style={
						{display: this.state.editMode||this.props.project.status==='COMPLETE' ? 'none' : ''}
					}
				>
					<PlayBtn
						play={this.props.project.isTrackering}
						onClick={this.toggleTracking}
					/>
				</span>
				<span
					style={
						{
							display: this.state.editMode ? 'none' : ''
						}
					}
					className='project-item__sum'
				>
					{Math.round(time / 60 / 60 * rate)}
					<FontAwesome
							name='rub'
					/>
				</span>
				<span
					style={
						{
							display: !this.state.editMode ? 'none' : ''
						}
					}
				>
					<FontAwesome
						name='check'
						onClick={this.update}
						/>
					<FontAwesome
						name='times'
						onClick={this.exitEdit}
					/>
				</span>
			</div>
		)
	}
}

export default Project;

import React, {Component, Fragment} from 'react';

import { Checkbox } from 'antd';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				// {title: '展耀', checked: true},
				// {title: '白羽瞳', checked: false},
				// {title: '陸離', checked: false},
				// {title: '池震', checked: true},
			]
		}
	}

	// 使用Button增加
	addTodo = () => this.shoeList();

	// 使用enter增加
	addTodoKey = (e) => {
		// 按下enter才增加數據
		if (e.keyCode === 13 || e.keyCode === 108) {
			this.shoeList();
		}

	};

	removeTodo = (index) => {
		const list = this.state.list;
		list.splice(index, 1);

		this.setState({
			list,
		});
	};

	// 顯示列表的方法
	shoeList = () => {
		const inputValue = this.refs.inputValue.value;
		const list = this.state.list;
		list.unshift({
			inputValue,
			checked: false
		});

		// 輸入的值放到list裡免
		this.setState({
			list,
		});

		this.refs.inputValue.value = '';     // 清空輸入框

	};

	// todolist和finish的切換
	checkboxChange = (index) => {
		const list = this.state.list;
		list[index].checked = !list[index].checked;

		this.setState({
			list,
		});
	};

	render() {
		const {list} = this.state;
		return (

			// input
			<Fragment>
				<header className="ui input focus">
					<input type="text"
					       placeholder="Input   todolist   use   Enter   or   Add"
					       ref='inputValue'
					       style={{width: 250}}
					       onKeyUp={this.addTodoKey}
					/>
					<button className="ui primary button"
					        onClick={this.addTodo}> Add
					</button>
				</header>

				<br/>	<br/>

				{/* TodoList */}
				<div>
					<h3>TodoList</h3>

					<div>
						{
							list.map((value, index) => {
								if (!value.checked) {
									return (
										<div key={index} className="ui message" style={{width: 318, marginTop: 10}}>
											<Checkbox checked={value.checked}
											          onChange={this.checkboxChange.bind(this, index, value.checked)}
											/>&nbsp;
											{value.inputValue}&emsp;&emsp;
											<button className="ui red button"
											        onClick={this.removeTodo.bind(this, index)}
											>Delete</button>
										</div>
									)
								}
							})
						}
					</div>

				</div>


				<hr/>

				{/* Finish */}
				<div>
					<h3>Finish</h3>
					<div>
						{
							list.map((value, index) => {
								if (value.checked) {
									return (
										<div key={index} className="ui message" style={{width: 318, marginTop: 10}}>
											<Checkbox checked={value.checked}
											          onChange={this.checkboxChange.bind(this, index, value.checked)}/>&nbsp;
											{value.inputValue}&emsp;&emsp;
											<button className="ui red button"
											        onClick={this.removeTodo.bind(this, index)}
											>Delete</button>
										</div>
									)
								}
							})
						}
					</div>
				</div>


			</Fragment>
		);
	}
}



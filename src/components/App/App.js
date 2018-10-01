import React, { Component } from "react";
import PropTypes from "prop-types";

import Balloon from "../Balloon";

const styles = {
	root: { textAlign: 'center' },
};

const defaultState = { size: 0 };

class App extends Component {
	static propTypes = {
		step: PropTypes.number
	};

	static defaultProps = {
		step: 0.05,
	};

	state = defaultState;

	handleButtonClick = () => {
		this.setState({ size: this.state.size + this.props.step });
	}

	handleResetClick = () => {
		this.setState({ size: 0 });
	}

	render() {
		return (
			<div style={styles.root}>
				<button onClick={this.handleButtonClick}>
					Fouk
				</button>
				<button onClick={this.handleResetClick}>
					Reset
				</button>
				<hr />
				<Balloon size={this.state.size} label="Nafoukni mě!" />
			</div>
		);
	}
}

export default App;
import { Component } from 'react';

const styles = {
	button: {
		backgroundColor: '#ff7d00',
		color: '#fff',
		padding: '15px 20px',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
	},
};
class Button extends Component {
	state = {};
	render() {
		return <button style={styles.button} {...this.props} />;
	}
}

export default Button;

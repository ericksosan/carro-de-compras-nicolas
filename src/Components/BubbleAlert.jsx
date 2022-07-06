import { Component } from 'react';

const styles = {
	bubbleAlert: {
		backgroundColor: '#E9725A',
		borderRadius: '15px',
		padding: '2px 10px',
		color: '#fff',
		fontSize: '.9rem',
		with: '20px',
	},
};

class BubbleAlert extends Component {
	render() {
		return <span style={styles.bubbleAlert}>5</span>;
	}
}

export default BubbleAlert;

import { Component } from 'react';
import BubbleAlert from './BubbleAlert';

const styles = {
	carro: {
		padding: '15px',
		border: 'none',
		backgroundColor: '#359A2C',
		color: '#fff',
		borderRadius: '.3rem',
		cursor: 'pointer',
	},
	bubble: {
		position: 'relative',
        left: 12,
        top: 20
	},
};

class Carro extends Component {
	render() {
		return (
			<div>
				<span style={styles.bubble}>
					<BubbleAlert />
				</span>
				<button style={styles.carro}>Carro</button>
			</div>
		);
	}
}

export default Carro;

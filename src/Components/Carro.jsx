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
		top: 20,
	},
};

class Carro extends Component {
	render() {
		const { carro } = this.props;
		const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
		return (
			<div>
				<span style={styles.bubble}>
					{cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
				</span>
				<button style={styles.carro}>Carro</button>
			</div>
		);
	}
}

export default Carro;

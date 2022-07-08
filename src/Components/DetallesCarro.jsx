import { Component } from 'react';

const styles = {
	detallesCarro: {
		backgroundColor: '#fff',
		position: 'absolute',
		marginTop: 30,
		boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
		borderRadius: '5px',
		width: '300px',
		right: 50,
	},ul:{
        padding: 0,
        margin:0
    },
	producto: {
		listStyle: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
	},
};

class DetallesCarro extends Component {
	render() {
		const { carro } = this.props;
		console.log(carro);
		return (
			<div style={styles.detallesCarro}>
				<ul style={styles.ul}>
					{carro.map((producto) => (
						<li key={producto.name} style={styles.producto}>
							<img alt={producto.name} src={producto.img} width="50px" />
							{producto.name} <span>{producto.cantidad}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default DetallesCarro;

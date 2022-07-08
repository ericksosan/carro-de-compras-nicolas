import { Component } from 'react';
import Productos from './Components/Productos';
import Layout from './Components/Layout';
import Title from './Components/Title';
import Navbar from './Components/Navbar';

class App extends Component {
	state = {
		productos: [
			{ name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
			{ name: 'Arvejas', price: 2500, img: '/productos/arvejas.jpg' },
			{ name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
		],
		carro: [],
	};

	agregarAlCarro = (producto) => {
		const { carro } = this.state;
		if (carro.find((x) => x.name === producto.name)) {
			const newCarro = carro.map((x) =>
				x.name === producto.name ? { ...x, cantidad: x.cantidad + 1 } : x
			);
			return this.setState({ carro: newCarro });
		}
		return this.setState({
			carro: this.state.carro.concat({
				...producto,
				cantidad: 1,
			}),
		});
	};

	render() {
		return (
			<div>
				<Navbar carro={this.state.carro} />
				<Layout>
					<Title />
					<Productos
						agregarAlCarro={this.agregarAlCarro}
						productos={this.state.productos}
					/>
				</Layout>
			</div>
		);
	}
}

export default App;

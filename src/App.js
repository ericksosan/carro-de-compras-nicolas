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
	};
	render() {
		return (
			<div>
			<Navbar/>
				<Layout>
					<Title/>
					<Productos
						agregarAlCarro={() => console.log('No hace nada')}
						productos={this.state.productos}
					/>
				</Layout>
			</div>
		);
	}
}

export default App;

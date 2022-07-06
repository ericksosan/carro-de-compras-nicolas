import {Component} from 'react'

const styles = {
    title:{
        marginBottom:'30px'
    }
}

class Title extends Component {
    state = {  } 
    render() { 
        return (
            <h1 style={styles.title}>Tienda</h1>
        );
    }
}

export default Title;
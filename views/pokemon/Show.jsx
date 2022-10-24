const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
    render(){
        const { name, imageLink} = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return(
            <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
                <h2>{capName}</h2>
                <img src={imageLink} alt={name}></img>
            </Default>
        )
    }
}

module.exports = Show
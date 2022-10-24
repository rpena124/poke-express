const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component{
    render(){
        const {name, _id, imageLink} = this.props.pokemon
        return(
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
                <form method='POST' action={`/pokemon/${_id}?_method=PUT`}>
                    Name:<input type='text' name='name' defaultValue={name} /><br/>
                    Image link:<input type='text' name='imageLink' defaultValue={imageLink} /><br/>
                    <input type='submit' value='Submit Pokemon'/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit
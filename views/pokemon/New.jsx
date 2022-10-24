const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
    render(){
        return(
            <Default title='Create a New Pokemon'>
                <form method='POST' action='/pokemon'>
                    Name:<input type='text' name='name' placeholder='Name of Pokemon'></input><br/>
                    Image link:<input type='text' name='imageLink' placeholder='link'></input><br/>
                    <input type='submit' value='Submit Pokemon'></input>
                </form>
            </Default>
        )
    }
}
module.exports = New
const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return(
            <Default title='Pokemon Index'>
                <ul>
                    {
                        pokemon.map((pokemon)=>{
                            const{name} = pokemon
                            return(
                                <li key={pokemon._id}>
                                    <a href={`/pokemon/${pokemon._id}`}>{name}</a>
                                     <form method='POST' action={`/pokemon/${pokemon._id}?_method=DELETE`}>
                                     <input type='submit' value='Delete' />
                                    </form>
                                </li>

                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index
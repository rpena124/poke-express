const React = require('react')

class Default extends React.Component{
    render(){
        const {pokemon, title} = this.props
        return(
            <html>
                <head>
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokemon">Home</a>
                        <a href="/pokemon/new">Add a New Pokemon</a>
                        {pokemon ? <a href={`/pokemon/${pokemon._id}/edit`}>{pokemon.name} Edit Page</a> : ''}
                        {pokemon ? <a href={`/pokemon/${pokemon.id}`}>{pokemon.name} Show Page</a> : ''}
                    </nav>
                    <h1>{title}</h1>
                    {this.props.children}

                </body>
            </html>

        )
    }
}
module.exports = Default
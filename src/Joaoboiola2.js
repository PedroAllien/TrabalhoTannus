import React from 'react'

class JoaoBoiola2 extends React.Component {
    render(props){
        return(
            <div class="alert alert-danger">  
                <ol type="1">
                    <li>{this.props.indice.nome}</li>
                    <li>{this.props.indice.time}</li>
                    <li>{this.props.indice.pais}</li>
                </ol>

            </div>
            
        )
    }
}

export default JoaoBoiola2
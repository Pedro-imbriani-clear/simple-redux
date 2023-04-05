import Card from './Card'

export default props =>{

    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max-min) + min)

    return(
        <Card title='Sortei de um Números' Purple>
            <div>
                <span>
                    <span>Sorteio</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}
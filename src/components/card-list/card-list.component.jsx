import "./card-list.style.css"

const CardList = ({monsters}) =>(
    <div className="card-list">
        {monsters.map((pokemon) => (
            <div className="card-container" key={pokemon.name}>
                <img className="viz" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                <h2 className="title">{pokemon.name}</h2>
                <div className="types">
                    {pokemon.types.map((pokeType) => (

                        <button className={`btn ${pokeType.type.name}`} >{pokeType.type.name}</button>
                    ))}

                </div>
                
            </div>
        ))}

    </div>
    
    
)

export default CardList;
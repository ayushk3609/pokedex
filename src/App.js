import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';

const App = () => {

const [searchField, setSearchField] = useState('');
const [monsters, setMonsters] = useState([])
const [filteredMonsters,setFilteredMonsters] = useState([])
  console.log('render');

  useEffect(()=>{

    const promises =[];
    for (let index = 1; index <= 151; index++) {
      
      const url = `https://pokeapi.co/api/v2/pokemon/${index}`
      promises.push(fetch(url).then(res => res.json()));
    }
  
    Promise.all(promises).then(pokemons => setMonsters(pokemons))
  
  }, [])

  const OnSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

 useEffect(()=>{

  let newFilteredMonsters = monsters.filter((pokemon) => {
    return (pokemon.name.toLocaleLowerCase().includes(searchField));
  });

  setFilteredMonsters(newFilteredMonsters);

 },[monsters,searchField])

  return(
    <div className="App">
      <div className='app-title'><i>Pokédex</i></div>
      <SearchBox className = 'Search-box' onChangeHandler = {OnSearchChange} placeholder = "Who's that pokemon" />
      <CardList  monsters = {filteredMonsters} />
    </div>

  )

}


// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters : [],
//       searchField : ''
//     }
//   }

// componentDidMount(){
//   
// }

// OnSearchChange = 



//   render(){

//     const {monsters,searchField} = this.state;
//     const {OnSearchChange} = this

//    

//     return (
//      
//     )
//   }
// }

export default App;

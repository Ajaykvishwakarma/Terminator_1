import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/SimpleCounter/Counter';
import { Counter1, Counter2 } from './Components/Counter_with_Props/Counter1';
import { Counter3 } from './Components/Counter_With_Datatypes/Counter3';


function App() {
  return (
    <div className="App">
     <Counter />
     <Counter1 value={10} isMarried={true}/>
     <Counter2 name={"AJAY"} age={21} gender={"male"} />
     <Counter3 value={ 40 } name = "Ajay"  age={20} salaries = {[2000000,3000000]} friends = {{a:"Santosh"}} bolean = {true}/>
    </div>
  );
}

export default App;

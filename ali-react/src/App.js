import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Mycomponents/Header';
import { Footer } from './Mycomponents/Footer';
import { Todos } from './Mycomponents/Todos';
import { Todoitem } from './Mycomponents/Todoitem';

function App(){
const onDelete=(Todo)=>{
  console.log("I am onDelete");
}
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy food",
    },
    {
      sno: 2,
      title: "Go to India",
      desc: "Very important to go to India to meet my family",
    },
    {
      sno: 3,
      title: "Go to the electronic shop",
      desc: "Buy a new laptop",
    },
  ];

  return (
    <>
      <Header title="My Todo List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
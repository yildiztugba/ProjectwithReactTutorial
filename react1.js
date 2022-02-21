function Button(props) {

 // const handleClick= () => setCounter(counter+1);
	return <button onClick={props.onClickFuncton}>+1</button>;
}

function Display(props){
  return (
    <div>{props.message}</div>
  );
}

function App(){
 const [counter, setCounter] = useState(43);
  const incrementCounter = () => setCounter(counter+1);
 return (
  <div>
  <Display message={counter}/>
  <Button onClickFuncton= {incrementCounter}/>
  </div>
  );
}

ReactDOM.render(

  <App />,
  document.getElementById('mountNode'),
)
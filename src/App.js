import Component from "./Component";

function App(){
  // return <Component name="Sally" />
  // this would return hella erros, objects are not renderable by react
  return <Component renderable={<Component />} />
}

export default App;
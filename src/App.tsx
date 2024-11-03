import AddBlock from "./components/ui/AddBlock";

function App() {
  return (
    <div>
      <div className="flex space-x-6 m-5 p-10 bg-black">
        <AddBlock color={"green"} name={"PROJECT"} />
        <AddBlock color={"pink"} name={"STAGE"} />
      </div>
    </div>
  );
}

export default App;

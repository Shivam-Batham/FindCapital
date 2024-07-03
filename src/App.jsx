import Countries from "./Countries";
import Capital from "./Capital";
import yourhandle from "countrycitystatejson";
import { useState } from "react";
function App() {
  const arr = yourhandle.getCountries();
  const [coutriesArray, setCountriesArray] = useState(arr);
  const [capital, setCapital] = useState("");
  return (
    <div className="bg-indigo-100">
      <h1 className=" p-5 m-3 text-center   sm:text-5xl text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">Welcome to Capital Finding Project</h1>
      <div className="grid grid-cols-2 rounded-sm border border-indigo-400">
        <div className="sm:col-span-1  h-[500px] overflow-auto">
          <Countries coutries={coutriesArray} setCapital={setCapital}/>
        </div>
        <div className="sm:col-span-1 border-2 h-[500px] ">
        <h1 className="text-center   sm:text-5xl text-4xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">Capital is</h1>
          <Capital capital={capital}  />
        </div>
      </div>
    </div>
  );
}

export default App;

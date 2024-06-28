import "./App.css";
import JobApplication from "./components/JobApplication";
import JobRequirement from "./components/JobRequirement";
import JobPreview from "./components/JobPreview";
import JobTitle from "./components/JobTitle";
import Navbar from "./components/Navbar";
import JobDesc from "./components/JobDesc";
import Company from "./components/Company";

function App() {
  return (
    <div>
      <div className=" h-[109px] shadow-nav gap-[10px] m-[10px]">
        <Navbar />
      </div>
      <div className="w-full h-[67px] border-solid border-[1px] border-[#E7E7E7]">
        <JobPreview />
      </div>
      <div className="flex">
        <div>
          <div>
            <JobTitle />
          </div>
          <div>
            <JobRequirement />
          </div>
          <div>
            <JobDesc />
          </div>
          <div>
            <Company />
          </div>
        </div>
        <div>
          <JobApplication />
        </div>
      </div>
    </div>
  );
}

export default App;

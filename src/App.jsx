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
      <div className=" h-[109px] shadow-nav gap-[10px] m-[10px] flex items-center">
        <Navbar />
      </div>
      <div className="flex items-center w-full h-[67px] border-solid border-[1px] border-[#E7E7E7] ">
        <JobPreview />
      </div>
      <div className="flex w-full justify-between">
        <div className="flex ml-[100px] flex-col">
          <div className="w-max">
            <JobTitle />
          </div>
          <div className="h-[1px] bg-border w-[1319px] mt-[19px]"></div>
          <div>
            <JobRequirement />
          </div>
          <div className="h-[1px] bg-border w-[1319px] mt-[19px]"></div>
          <div className="h-max w-max">
            <JobDesc />
          </div>
          <div className="h-[1px] bg-border w-[1319px] mt-[19px]"></div>
          <footer className="w-max h-max">
            <Company />
          </footer>
        </div>
        <div className="w-full h-\ border-2 border-black border-solid">
          <JobApplication />
        </div>
      </div>
    </div>
  );
}

export default App;

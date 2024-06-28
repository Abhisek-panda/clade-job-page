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
      <div className="flex justify-between">
        <div className="flex flex-col w-[73%] h-full">
          <div className="w-max ml-[100px]">
            <JobTitle />
          </div>
          <div className="h-[1px] bg-border w-full mt-[19px]"></div>
          <div className="ml-[100px]">
            <JobRequirement />
          </div>
          <div className="h-[1px] bg-border w-full mt-[19px]"></div>
          <div className="h-max w-max ml-[100px]">
            <JobDesc />
          </div>
          <div className="h-[1px] bg-border w-full mt-[19px]"></div>
          <footer className="w-max h-max ml-[100px]">
            <Company />
          </footer>
        </div>
        <div className="h-[1150px] w-[27%] mx-auto border-[1px] border-solid border-border border-r-0 border-b-0 border-t-0 ">
          <JobApplication />
        </div>
      </div>
    </div>
  );
}

export default App;

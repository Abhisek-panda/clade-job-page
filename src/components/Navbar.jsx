const Navbar = () => {
  return (
    <nav className=" border-2 border-solid border-red-500  flex justify-between items-center">
      <div className="bg-[#E7E7E7]  text-xl font-bold w-[100px] h-[61px] flex justify-center items-center">
        <p className="font-satoshi text-accent leading-[27px]">Logo</p>
      </div>
      <div className="flex w-[538px] h-[74px] items-center justify-between gap-4 rounded-[36px] border-solid border-[0.5px] border-[#D1D1D1] ">
        <p>Jobs</p>
        <p>Messages</p>
        <p>Payments</p>
      </div>
      <div>
        <p>Notification</p>
      </div>
    </nav>
  );
};

export default Navbar;

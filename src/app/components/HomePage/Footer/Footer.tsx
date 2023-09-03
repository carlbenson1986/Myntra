import BorderLine from "./BorderLine";
import FirstBlock from "./FirstBlock";
import ForthBlock from "./ForthBlock";
import PopSeaches from "./PopSeaches";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
export const Footer = () => {
  return (
    <>
      <div className="bg-slate-50 grid grid-cols-3 py-2 px-10 md:grid-cols-5 md:py-4 md:px-28">
          {/* 1st block */}
          <FirstBlock />
          {/* 2rd */}
          <SecondBlock />
          {/* social media handles*/}
          <ThirdBlock />
          {/* 4th */}
          <ForthBlock />
      </div>

      {/* border line */}
      <BorderLine />

      {/* popular searches */}
      <PopSeaches />
      
      {/* border line */}
      <BorderLine />
    </>
  );
};

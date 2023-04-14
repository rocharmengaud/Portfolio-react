export const WorkItem = ({ img, codeURL, demoURL }) => {
  return (
    <div
      /* The reason backticks are needed here instead of regular quotes is because the style property is a JavaScript object, 
      and the backgroundImage property needs to be written as a CSS-style string with a URL value. */
      /* content-div is a custom property set in index.css */
      style={{ backgroundImage: `url(${img})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover effects */}
      <div className="group-hover:opacity-100 opacity-0">
        <span className="text-2xl font-bold tracking-wider text-white">PLACEHOLDER</span>
        <div className="pt-8 text-center">
          <a href="/">
            <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Demo</button>
          </a>
          <a href="/">
            <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

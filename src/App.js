import React from "react";
import GridContent from "./GridContent";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="bg-gray-400 h-full">
      <div className="container mx-auto px-6 md:px-0">
        <div className="bg-gray-600 h-screen">
          {/* <GridContent></GridContent> */}

          <HomePage></HomePage>
        </div>
      </div>
    </div>
  );
}

export default App;

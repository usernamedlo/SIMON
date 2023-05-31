import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <p className="">Your Score : 0</p>
        <button>Start Game</button>
      </div>

      <div class="wrapper bg-white h-600 w-600 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg hidden">sqzs</div>

      <div class="h-[500px] w-[500px] bg-gray-900 rounded-[8%] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="h-52 w-52 absolute cursor-pointer bg-[#006400] rounded-tl-lg top-8 left-8"></div>
        <div className="h-52 w-52 absolute cursor-pointer bg-[#800000] rounded-tr-lg top-8 right-8"></div>
        <div className="h-52 w-52 absolute cursor-pointer bg-[#00008b] rounded-br-lg bottom-8 right-8"></div>
        <div className="h-52 w-52 absolute cursor-pointer bg-[#808000] rounded-bl-lg bottom-8 left-8"></div>
        <div id="score" className="text-white text-2xl">
          00
        </div>
      </div>
    </>
  );
}

export default App;

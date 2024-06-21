import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/List";
import Add from "./components/Add";

function App() {
  //改名
  useEffect(() => {
    document.title = "Todo List";
  }, []);

  const [listData, setListData] = useState([]);

  return (
    <div className="App">
      {/* 标题 */}
      <div className="head">Todo List</div>

      {/* 输入代办名与选择日期 */}
      <div className="add">
        <Add listData={listData} setListData={setListData}></Add>
      </div>

      {/* 代办列表 */}
      <div className="list">
        <TodoList listData={listData} setListData={setListData} />
      </div>
    </div>
  );
}

export default App;

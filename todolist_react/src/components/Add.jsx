import React, { useState } from "react";
import "../App.css";
import { Input, Button, DatePicker, message } from "antd";
import moment from "moment";
import todos from "../Todos.json";

//全局变量声明报警信息
const ERROR_MESSAGE = "请输入任务名称和截止时间";

//实现输入代办名称和日期并点击“添加”按钮后添加代办
function Add({ listData, setListData }) {
  //报警信息
  const [messageApi, contextHolder] = message.useMessage();

  //输入代办名
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  //选择日期
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  //点击“添加”按钮后提交数据
  const handleOnClick = () => {
    if (inputValue && selectedDate) {
      const newItem = {
        id: moment().valueOf(),
        task: inputValue,
        date: selectedDate,
      };
      setListData([...listData, newItem]);
      setInputValue(null);
      setSelectedDate(null);
    } else {
      messageApi.open({
        type: "error",
        content: ERROR_MESSAGE,
      });
    }
  };
  return (
    <div>
      {contextHolder}

      {/* 输入代办名称 */}
      <div>
        <Input
          onChange={handleOnChange}
          value={inputValue}
          placeholder="输入任务名称"
          id="inputNote"
        />
      </div>
      {/* 输入截止时间 */}
      <div>
        <DatePicker
          onChange={handleDateChange}
          placeholder="选择截止时间"
          id="inputDate"
          value={selectedDate ? moment(selectedDate, "YYYY-MM-DD") : null}
          style={{ position: "relative", top: "5px" }}
        />
        {/* “添加”按钮 */}
        <Button
          type="primary"
          id="add"
          onClick={handleOnClick}
          style={{ position: "relative", left: "10px", top: "5px" }}
        >
          添加
        </Button>
      </div>
    </div>
  );
}

export default Add;

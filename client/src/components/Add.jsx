import React, { useState, useContext } from "react";
import "../App.css";
import { Input, Button, DatePicker, message } from "antd";
import moment from "moment";
import axios from "axios";
import { AuthContext } from "../context/authContext";

//全局变量声明报警信息
const ERROR_MESSAGE = "请输入任务名称和截止时间";

//添加代办组件
function Add({ listData, setListData }) {
  //当前用户
  const { currentUser } = useContext(AuthContext);

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
  const handleOnClick = async (e) => {
    e.preventDefault();
    if (inputValue && selectedDate) {
      //创建一个newItem作为临时容器
      const newItem = {
        id: moment().valueOf(),
        task: inputValue,
        date: selectedDate,
        uid: currentUser.id,
        selected: false,
        overdue: moment(selectedDate) < moment(),
      };
      //更新listData和输入区
      setListData([...listData, newItem]);
      setInputValue(null);
      setSelectedDate(null);

      //对后端进行post请求，添加代办信息到数据库
      try {
        await axios.post("http://localhost:8800/api/todos/add", newItem);
        console.log("已执行发送操作");
      } catch (err) {
        console.log(err);
      }
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

import React, { useState } from "react";
import { List, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "../App.css";

//待办列表组件
function TodoList({ listData, setListData }) {
  //选择id、选择代办、是否未逾期
  const [selectedIds, setSelectedIds] = useState([]);

  //修改代办列表
  const onChange = async (id) => {
    const updatedIds = selectedIds.includes(id)
      ? selectedIds.filter((Id) => Id !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedIds);

    //后端进行post请求，发送被修改代办的id，从数据库修改对应id的代办的状态
    try {
      await axios.post("http://localhost:8800/api/todos/update", { id: id });
      setListData((prevListData) =>
        prevListData.map((item) =>
          item.id === id ? { ...item, selected: !item.selected } : item
        )
      );
      console.log("已执行数据更改操作");
    } catch (err) {
      console.log(err);
    }
  };

  //删除代办
  const onDelete = async (id) => {
    const updatedList = listData.filter((item) => item.id !== id);
    setListData(updatedList);
    console.log(id);

    //对后端进行post请求，发送被删除代办的id，从数据库删除对应id的代办
    try {
      await axios.post("http://localhost:8800/api/todos/delete", { id: id });
      console.log("已执行数据删除操作");
    } catch (err) {
      console.log(err);
    }
  };

  //修改代办格式，未逾期或已完成黑色；逾期且未完成红色；已完成黑色、划线
  const getStyle = (item) => {
    return {
      textDecoration: item.selected ? "line-through" : "none",
      color: item.selected || !item.overdue ? "white" : "red",
    };
  };

  return (
    <List
      size="large"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item.id} style={{border:"1px white solid", borderRadius:"5px",marginTop:"13px"}}>
          <span className="item" style={getStyle(item)}>
            {item.name || item.task}
            <br />
            截止时间：{item.time || item.date}
          </span>
          <span>
            <Checkbox onChange={() => onChange(item.id)} />
            <br />
            <DeleteOutlined
              onClick={() => onDelete(item.id)}
              className="delete"
            />
          </span>
        </List.Item>
      )}
    />
  );
}

export default TodoList;

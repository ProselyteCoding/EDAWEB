import React, { useState } from "react";
import { List, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "../App.css";
import moment from "moment";

function TodoList({ listData, setListData }) {
  //selectedIds为未完成数组
  const [selectedIds, setSelectedIds] = useState([]);

  //添加或去除已完成的代办
  const onChange = (id) => {
    const updatedIds = selectedIds.includes(id)
      ? selectedIds.filter((Id) => Id !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedIds);
  };

  //删除代办
  const onDelete = (id) => {
    const updatedList = listData.filter((item) => item.id !== id);
    setListData(updatedList);
  };

  //修改代办格式，未逾期或已完成黑色；逾期且未完成红色；已完成黑色、划线
  const getStyle = (item) => {
    const isItemSelected = selectedIds.includes(item.id);
    const isDateValid = moment(item.date) >= moment();

    return {
      textDecoration: isItemSelected ? "line-through" : "none",
      color: isDateValid || isItemSelected ? "black" : "red",
    };
  };

  return (
    <List
      size="large"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <span className="item" style={getStyle(item)}>
            {item.task}
            <br />
            截止时间：{moment(item.date).format("YYYY-MM-DD")}
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

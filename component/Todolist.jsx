import React, { useState } from "react";
import { List, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "../App.css";
import moment from "moment";

function TodoList({ listData, setListData }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const onChange = (id) => {
    const updatedIds = selectedIds.includes(id)
      ? selectedIds.filter((Id) => Id !== id)
      : [...selectedIds, id];
    setSelectedIds(updatedIds);
  };

  const onDelete = (id) => {
    const updatedList = listData.filter((item) => item.id !== id);
    setListData(updatedList);
  };

  const getStyle = (item) => {
    const isItemSelected = selectedIds.includes(item.id);
    const isDateValid = moment(item.date) >= moment();
    return {
      textDecoration: isItemSelected ? "line-through" : "none",
      color: isDateValid ? "black" : "red",
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
            <DeleteOutlined onClick={() => onDelete(item.id)} className="delete" />
          </span>
        </List.Item>
      )}
    />
  );
}

export default TodoList;
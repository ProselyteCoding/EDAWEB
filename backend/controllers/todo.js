import { db } from "../db.js";

//登入成功时加载该用户的待办列表
export const getTodos = (req, res) => {
  const q = "SELECT * FROM todos WHERE uid = ?";

  db.query(q, [req.query.uid], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

//添加一个新代办
export const addTodo = (req, res) => {
  const q =
    "INSERT INTO todos(`id`,`name`,`time`,`uid`,`selected`,`overdue`) VALUES (?)";
  const id = req.body.id.toString();
  const values = [
    id,
    req.body.task,
    req.body.date,
    req.body.uid,
    req.body.selected,
    req.body.overdue,
  ];
  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Task has been added.");
  });
};

//删除任意一个代办
export const deleteTodo = (req, res) => {
  const q = "DELETE FROM todos WHERE id = ?";
  const id = req.body.id.toString();
  db.query(q, [id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Task has been deleted.");
  });
};

//修改任意一个代办
export const updateTodo = (req, res) => {
  const q = `  
  UPDATE todos  
  SET selected = CASE   
                     WHEN selected = 0 THEN 1   
                     WHEN selected = 1 THEN 0   
                     ELSE selected   
                 END  
  WHERE id = ?;  
  `;
  const id = req.body.id.toString();
  db.query(q, [id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Task has been deleted.");
  });
};

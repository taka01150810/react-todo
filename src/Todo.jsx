import "./styles.css";

export const Todo = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          <div className="list-row">
            <li>TODOです</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          <div className="list-row">
            <li>TODOでした</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};

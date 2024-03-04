import "./styles.css";

export const Todo = () => {
  return (
    <>
    <div>
      <input placeholder="Todoを入力" />
      <button>追加</button>
    </div>
    <div>
      <p>未完了のTodo</p>
      <ul>
        <li>TODOです</li>
        <button>完了</button>
        <button>削除</button>
      </ul>
    </div>
    <div>
      <p>完了のTodo</p>
      <ul>
        <li>TODOでした</li>
        <button>戻す</button>
      </ul>
    </div>
    </>
  );
}

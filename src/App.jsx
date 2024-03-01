import { ColorfullMessage } from "./components/ColorfullMessage";

// exportで他のファイルからも使えるようにする
export const App = () => {
  const onclickButton = () => {alert('こんにちは')};
    return (
      <div>
        {/* オブジェクトでCSSを表現することができる */}
        <h1 style={{ color: 'red' }}>こんにちは！</h1>

        <ColorfullMessage color="blue" >お元気ですか？</ColorfullMessage>
        <ColorfullMessage color="green" message="元気です！" />

        <button onClick={() => {alert('こんにちは')}}>ボタン</button>
        { console.log('こんにちは') }
        <button onClick={onclickButton}>ボタン</button>
      </div>
    );
};
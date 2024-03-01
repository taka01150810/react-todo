import { useState } from 'react';
import { ColorfullMessage } from "./components/ColorfullMessage";

// exportで他のファイルからも使えるようにする
export const App = () => {
  const onclickButton = () => {alert('こんにちは')};

  // useStateは階層の一番上でないと呼び出すとができない
  const [num, setNum] = useState(0);

  // const onclickCountUp = () => {
  //   setNum(num + 1)
  // };
  // 結果 1 2 3 4

  // stateの値を更新したらコンポーネントが再レンダリングされる
  // （具体的にいうと）　setNumが呼び出されたら、もう一度Appコンポーネントが呼び出されるので二つ書いてもsetNumは1回しか実行さればい
  // const onclickCountUp = () => {
  //   setNum(num + 1)
  //   setNum(num + 1)
  // };
    // 結果 1 2 3 4

  // stateの値を更新した後に、もう一度更新したい場合
  const onclickCountUp = () => {
    setNum( (prev) => prev + 1 )
    setNum( (prev) => prev + 1 )
  };
  // 結果 2 4 6 8

    return (
      <div>
        {/* オブジェクトでCSSを表現することができる */}
        <h1 style={{ color: 'red' }}>こんにちは！</h1>

        <ColorfullMessage color="blue" >お元気ですか？</ColorfullMessage>
        <ColorfullMessage color="green" message="元気です！" />

        <button onClick={() => {alert('こんにちは')}}>ボタン</button>
        { console.log('こんにちは') }
        <button onClick={onclickButton}>ボタン</button>

        <p>{ num }</p>
        <button onClick={onclickCountUp}>カウントアップ</button>

      </div>
    );
};
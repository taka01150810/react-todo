import { useEffect, useState } from 'react';
import ColorfullMessage from "./components/ColorfullMessage";

// exportで他のファイルからも使えるようにする
export const App = () => {
  /* 再レンダリング（　レンダリングが2回　）がおこなわれる条件
  1. StrictModeかつ開発時
  2. stateが更新された時
  3. コンポーネントのpropsの値が更新された時
  4. 親コンポーネントが呼び出された時、子コンポーネントも際レンダリングされる
  */
  console.log('---App---')

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
  };
  // 結果 2 4 6 8

  const [isShowFace, setIsShowFace] = useState(true);
  const onClickToggle = () => {
    setIsShowFace(!isShowFace)
  }

  // useEffectでnumかisShowFaceに変更がある時だけ関数を実行することができる
  // useEffect(() => {
  //   console.log('---useEffect---')
  // }, [num, isShowFace])

  // 条件分岐 isShowFaceはToo many re-renders対策。
  // stateの値が更新されたらレンダリングされてreturn以下に無限に辿り着かない。
  // if (num > 0) {
  //   if (num % 3 === 0) {
  //     isShowFace || setIsShowFace(true)
  //   } else {
  //     isShowFace && setIsShowFace(false)
  //   }
  // }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true)
      } else {
        isShowFace && setIsShowFace(false)
      }
    }
  }, [num])

    return (
      <div>
        {/* オブジェクトでCSSを表現することができる */}
        <h1 style={{ color: 'red' }}>こんにちは！</h1>

        <ColorfullMessage color="blue" >お元気ですか？</ColorfullMessage>
        <ColorfullMessage color="green" message="元気です！" />

        <button onClick={() => {alert('こんにちは')}}>ボタン</button>
        {/* { console.log('こんにちは') } */}
        <button onClick={onclickButton}>ボタン</button>

        <p>{ num }</p>
        <button onClick={onclickCountUp}>カウントアップ</button><br></br>

        <button onClick={ onClickToggle }>表示/非表示</button>
        { isShowFace && <p>┌(┌՞ਊ՞)┐ｷｪｧｧｧｪｪｪｪｧｧｧ</p> }
      </div>
    );
};
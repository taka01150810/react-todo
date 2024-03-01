// exportで他のファイルからも使えるようにする
export const App = () => {
  const onclickButton = () => {alert('こんにちは')};
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  }
    return (
      <div>
        {/* オブジェクトでCSSを表現することができる */}
        <h1 style={{ color: 'red' }}>こんにちは！</h1>
        <h1 style={ contentStyle }>こんにちは！</h1>

        <p>お元気ですか？</p>

        {/* JSの書き方 */}
        {/* <button onclick={() => {alert('こんにちは')}}>ボタン</button> */}

        {/* 
        Reactの書き方 
        {}の中でJSのコードを実行できる
        */}
        <button onClick={() => {alert('こんにちは')}}>ボタン</button>
        { console.log('こんにちは') }
        <button onClick={onclickButton}>ボタン</button>
      </div>
    );
};
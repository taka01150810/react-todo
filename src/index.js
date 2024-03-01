import React, { createRoot } from "react-dom/client";
// Reactの厳しいモードを設定
import { StrictMode } from "react";

// id="root"のDom取得
const rootElement = document.getElementById("root");

// Reactでレンダリング
const root = createRoot(rootElement)

const App = () => {
  return (
    // divタブを使いたくない時はReact.Fragmentを使う
    // <React.Fragment>
    //   <h1>こんにちは！</h1>
    //   <p>お元気ですか？</p>
    // </React.Fragment>

    // 空タブの書き方でも可能
    // <>
    //   <h1>こんにちは！</h1>
    //   <p>お元気ですか？</p>
    // </>
    <div>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </div>
  );
};

// こんな感じでも書くことができる
// const App = () =>  <h1>こんにちは！</h1>;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


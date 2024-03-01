import React, { createRoot } from "react-dom/client";
// Reactの厳しいモードを設定
import { StrictMode } from "react";
import { App } from "./App";

// id="root"のDom取得
const rootElement = document.getElementById("root");
// Reactでレンダリング
const root = createRoot(rootElement)

// こんな感じでも書くことができる
// const App = () =>  <h1>こんにちは！</h1>;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


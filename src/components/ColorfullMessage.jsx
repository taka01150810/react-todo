// export const ColorfullMessage = (props) => {
//     const contentStyleGreen = {
//         color: props.color,
//         fontSize: '18px'
//     }
//     return (
//         <>
//             <p style={ contentStyleGreen }>{ props.message }</p>
//         {/* タブの中の値を受け取るにはprops.childrenを使う */}
//             <p style={ contentStyleGreen }>{ props.children }</p>
//         </>
//     )
// }

// 上記のようにpropsを毎回書くのがめんどくさい場合
export const ColorfullMessage = (props) => {
    console.log('---ColorfullMessage---')
    const { color, children } = props
    const contentStyleGreen = {
        // オブジェクトとプロパティが同じ名前の場合は省略できる
        // color: color
        color,
        fontSize: '18px'
    }
    return (
        <>
            <p style={ contentStyleGreen }>{ props.message }</p>
        {/* タブの中の値を受け取るにはprops.childrenを使う */}
            <p style={ contentStyleGreen }>{ children }</p>
        </>
    )
}

// propsそのものを省略する書き方
// export const ColorfullMessage = ({ color, children }) => {
// }
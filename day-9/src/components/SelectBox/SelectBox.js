import React, {useState} from "react";

// export default class SelectBox extends React.Component {
//   constructor(props) {
//     console.log("constructor!")
//     super(props);
//     this.state = {
//       count: 0
//     }
//     this.minus = this.minus.bind(this)
//     this.plus = this.plus.bind(this)
//   }
//   minus() {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }
//   plus() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render() {
//     console.log("render!!")
//     const {count} = this.state;
//     return (
//       <>
//         <button onClick={this.minus}>-</button>
//         <span className={`count ${count < 0 ? "negative" : count > 0 ? "positive" : ""}`}>
//           {count}
//         </span>
//         <button onClick={this.plus}>+</button>
//       </>
//     )
//   }
// }

export default function selectBox({inventory}) {
  return <select defaultValue={1}>
          {
            [...Array(10).keys()].map((item, idx) => {
              const index = idx + 1;
              return <option value={index} disabled={index > inventory}>{index}</option>
            })
          }
        </select>
}








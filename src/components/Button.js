
import React from "react";

export function Button(props) {
  const { label = "Default", handleClick = () => console.log("I am Default") } =
    props;
  return <button onClick={handleClick}>{label}</button>;
}


// export class Button extends React.Component{
//   constructor(props){
//     super(props)
//   }
// };

// render() {
//   return <button onClick={this.props.handleClick}>{this.props.label}</button>
// }
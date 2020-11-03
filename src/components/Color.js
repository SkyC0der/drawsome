// class Color extends React.Component {
  
//     render () {
//       let style = {
//         backgroundColor: this.props.hexCode
//       }
//       return (
//         <div className="color" onClick={this.props.update.bind(this, this.props.index)} style={style}>
//           <p className="color__code">{this.props.hexCode}</p>
//         </div>
//       );
//     }
//   };
  
  
//   class App extends React.Component {
    
//     state = {
//         colorsNum: 5,
//         colors: []
//       };
//       for (let i = 0; i < this.state.colorsNum; i +=1) {
//         this.state.colors.push({hexCode: this.generateColor()});
//       }
    
      
//     generateColor () {
//       return '#' +  Math.random().toString(16).substr(-6);
//     }
    
//     updateColor (index) {
//       let colors = this.state.colors.slice();
//       const currentColor = this.generateColor();
//       colors[index].hexCode = currentColor;
//       this.setState({
//         colors : colors
//       });
//    }
    
//     render () {
//       return (
//         <div className="color-container">
//           { this.state.colors.map((color, index) => <Color key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode}></Color>) }
//         </div>
//       )
//     }
//   }
  
//   ReactDOM.render(<App />, document.getElementById('root'));
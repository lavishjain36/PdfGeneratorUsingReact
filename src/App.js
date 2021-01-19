import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { PureComponent } from "react";

import jsPDF from "jspdf";

class pdfGenerator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  jsPdfGenerator = () => {
    //new document in jspdf
    var doc = new jsPDF("p", "pt");

    //add some text to pdf document
    doc.text(20, 20, "Welcome to Our Company.");

    //set the font of the pdf document
    doc.setFont("courier");

    // doc.setFontType("normal");
    doc.text(20, 30, "You Have Successfully registered  to our portal.");

    //save the document to generate pdf
    doc.save("generated.pdf");
  };
  //making a rendor function of the component
  render() {
    return <button onClick={this.jsPdfGenerator}>Generate PDF</button>;
  }
}
export default pdfGenerator;

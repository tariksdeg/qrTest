import logo from "./logo.svg";
import "./App.css";

function App() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("trksdeg_cv_tr.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "trksdeg_cv_tr.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="App">
      <button onClick={onButtonClick} style={{ width: "100%", height: "80%" }}>
        indir
      </button>
    </div>
  );
}

export default App;

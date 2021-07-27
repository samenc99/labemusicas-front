import {Routes} from "./Routes/Routes";
import {StylesProvider} from "@material-ui/core";

function App() {
  return (
    <StylesProvider injectFirst>
      <Routes/>
    </StylesProvider>
  );
}

export default App;

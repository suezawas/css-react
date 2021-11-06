import { CssModules } from "./compornents/CssModules";
import { Emotion } from "./compornents/Emotion";
import { InlineStyle } from "./compornents/InlineStyle";
import { StyledComponents } from "./compornents/StyledComponents";
import { StyledJsx } from "./compornents/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

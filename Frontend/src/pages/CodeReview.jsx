import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import '../App.css'; // keep your existing styling

function CodeReview() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1;\n}`);
  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (err) {
      setReview("Error fetching review. Make sure backend is running.");
    }
  }

  function clearCode() {
    setCode("");
    setReview("");
  }

  function copyCode() {
    navigator.clipboard.writeText(code);
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <div className="button-group">
           <button onClick={reviewCode}>Review</button>
           <button onClick={clearCode}>Clear</button>
           <button onClick={copyCode}>Copy</button>
        </div>

      </div>
      <div className="right">
        <div className="review-content">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </div>
    </main>
  );
}

export default CodeReview;
const root = ReactDOM.createRoot(document.getElementById('root'));


const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "htmlInput container p-5 shadow rounded m-5 bg-light" }, /*#__PURE__*/
    React.createElement("h3", { className: "h3" }, "React markdown previewer"), /*#__PURE__*/
    React.createElement("p", null, "Type markdown below to see it render live on the other window. Find out more about markdown ", /*#__PURE__*/React.createElement("a", { href: "https://www.markdownguide.org/basic-syntax/" }, "on their website"), "."), /*#__PURE__*/
    React.createElement("textarea", {
      id: "editor",
      name: "htmleditor",
      class: "shadow rounded",
      onChange: props.onChange }, props.markdown)));


};

const Output = props => {
  const renderMarkdown = marked.parse(props.markdown);
  return /*#__PURE__*/(
    React.createElement("div", { className: "htmlOutput container bg-light p-5 shadow rounded m-5", id: "preview",
      dangerouslySetInnerHTML: { __html: renderMarkdown } }));

};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
    console.log(this.state.markdown);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col md-6" }, /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col md-6" }, /*#__PURE__*/
      React.createElement(Output, { markdown: this.state.markdown }))));




  }}


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const app = /*#__PURE__*/React.createElement(App, null);
root.render(app);
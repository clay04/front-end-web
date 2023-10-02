// create component
class Hello extends React.Component {
    // render function
    render() {
        // return JSX
        return <h1>Hello Using Reactjs !!!</h1>
    }
}
// React dom call function render
ReactDOM.render(<Hello/>, document.getElementById("app"));
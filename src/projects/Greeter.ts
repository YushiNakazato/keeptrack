function Greeter() {
    return <h1>Hello</h1>
}

ReactDom.createRoot(document.getElementById('root')).render(<Greeter />);
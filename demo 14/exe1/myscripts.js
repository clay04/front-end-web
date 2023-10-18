class HeaderPage extends React.Component {
    render() {
        return <h1>This is header</h1>;
    }
}

class FooterPage extends React.Component {
    render() {
        return <h1>This is footer</h1>;
    }
}

class ContentPage extends React.Component {
    render() {
        return <h1>This is content</h1>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderPage />
                <ContentPage />
                <FooterPage />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

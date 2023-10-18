class HeaderPage extends React.Component {
    render() {
        return (
            <h2>Cities</h2>
        );
    }
}

class SidebarPage extends React.Component {
    render() {
        return (
            <ul>
                <li><a href="#">London</a></li>
                <li><a href="#">Paris</a></li>
                <li><a href="#">Tokyo</a></li>
            </ul>
        );
    }
}

class ContentPage extends React.Component {
    render() {
        return (
            <div>
                <h1>London</h1>
                <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
            </div>
        );
    }
}

class FooterPage extends React.Component {
    render() {
        return (
            <p>Footer</p>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <header><HeaderPage /></header>
                <section>
                    <nav><SidebarPage /></nav>
                    <article><ContentPage /></article>
                </section>
                <footer><FooterPage /></footer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
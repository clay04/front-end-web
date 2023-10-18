class Message extends React.Component {
    render () {
        return (
            <div>
                <small>{this.props.user}:</small>
                <p>{this.props.content}</p>
                <hr />
            </div>
        )
    }
}




class ContentPage extends React.Component {
    render() {
        return (
                <div class="main">
                <h2>Live Chat</h2>
                <h5>This is just a demo chats, Oct 31, 2022</h5>
                <Message user = "Clay Mangeber" content = "Hi, how are you bot?"/>
                <Message user = "Chatbot" content = "Hi human, I'm Okey."/>
                <Message user = "Clay Mangeber" content = "Good, are you human?"/>
                <Message user = "Chatbot" content = "Ehmmm.. I'am not human. I'm Your virtual bot"/>
            </div>
        );
    }
}
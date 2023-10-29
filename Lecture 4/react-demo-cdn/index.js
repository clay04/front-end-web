"use strict";
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    
    render() {
        let text;
        if (this.state.liked) {
            text = "Sudah di Like. Batalkan?";
        } else {
            text = "Like";
        }
        return e(
            "button",
            { onClick: () => this.setState({ liked: !this.state.liked }) },
            text
        );
    }
}

const domContainer = document.querySelector("#button");
ReactDOM.render(e(LikeButton), domContainer);

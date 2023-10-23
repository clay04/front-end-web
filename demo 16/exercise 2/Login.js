function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
        login    
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
        logout    
        </button>
    );
}
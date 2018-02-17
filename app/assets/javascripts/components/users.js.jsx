class Users extends React.Component {
   constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      users: props.users,
    };
  }
  handleClick(value){
    console.log(value);
  }
  render() {
    var ref = this;
    return (
      <div className = "container-fluid users">
        <h1>Users on Feeds.com</h1>
        <ul>
        {
         ref.state.users.length != 0 ? ref.state.users.map(function(item, i){
           return <div className="user-entry" onClick={() => { follow(item) }}>
           <h4>
           <b>{i+1}) {item.name}</b>
           </h4>
           <p>{item.email}</p>
           </div>
          }) : null
        }
        </ul>
      </div>
    );
  }
}
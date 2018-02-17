class Users extends React.Component {
   constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      current_user: props.current_user,
      users: props.users,
      relationship: props.relationship,
    };
  }
  handleClick(value){
    console.log(value);
  }
  checkIfFollowing(id){
    if(this.state.relationship == null)
      return false;
    else
    {
      if(this.state.relationship.length != undefined)
      for(var i = 0; i< this.state.relationship.length ; i++)
      {
        if(id == this.state.relationship[i].followed_id && this.state.current_user.id == this.state.relationship[i].follower_id)
          return true;
      }
      else
        if(id == this.state.relationship.followed_id && this.state.current_user.id == this.state.relationship.follower_id)
          return true;
      return false;
    }
    
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
           {ref.checkIfFollowing(item.id) ? <form action="/users/unfollow" method="post">
            <input type="hidden" name="id" value={item.id} />
            <button className="btn btn-danger" type="submit">Unfollow</button>
           </form> : <form action="/users/follow" method="post">
            <input type="hidden" name="id" value={item.id} />
            <button className="btn btn-success" type="submit">Follow</button>
           </form>}
           
           </div>
          }) : null
        }
        </ul>
      </div>
    );
  }
}
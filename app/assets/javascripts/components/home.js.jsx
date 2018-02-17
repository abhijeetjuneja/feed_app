class Home extends React.Component {
   constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      feeds: props.feeds,
      user: props.user,
      filtered: props.feeds[0],
      value: '',
    };
  }
  handleClick(value){
    console.log(value);
    var filtered = this.state.feeds[0].filter(function (el) {
      if(value == "")
        return true;
      else
        return el.user_id == value;
    });
    this.setState({filtered : filtered,value : value});
  }
  render() {
    var ref = this;
    return (
      <div className = "container-fluid home">
        <div className = "row">
          <div className = "col-md-4 section" style={{paddingLeft : '0px',paddingRight : '0px'}}>
            <h1 style={{backgroundColor : 'black',color: 'white',margin : '0px'}}>{ref.state.user.name}</h1>
            <h2>Feeds - {ref.state.feeds[0].length}</h2>
          </div>
          <div className = "col-md-offset-1 col-md-7 section" style={{paddingLeft : '0px',paddingRight : '0px'}}>
            <h1 style={{backgroundColor : 'black',color: 'white',margin : '0px'}}>Feeds&nbsp;<a href="/feeds/add">Add Feed</a></h1>
            <br /><div className="dropdown">&nbsp;&nbsp;Filter Feeds : <a className="dropdown-toggle" data-toggle="dropdown" href="#">All<span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a onClick={() => { this.handleClick('') }}>All</a></li>
              <li><a onClick={() => { this.handleClick(this.state.user.id)}} >Mine</a></li>
            </ul>
            </div><br /><br />
            <ul>
            {
             ref.state.filtered.length != 0 ? ref.state.filtered.map(function(item, i){
               return <div>
               <h4>
               <b>{ref.state.value == '' ? ref.state.feeds[1][i] : ref.state.user.name}</b>
               </h4>
               <li>{item.content}</li><br />
               {ref.state.value != '' ? <form action="/feeds/delete" method="post"><input type="hidden" name="id" value={item.id} /><button className="btn btn-danger" type="submit">Delete</button></form> : null}<br /><br /></div>
             }) : null
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
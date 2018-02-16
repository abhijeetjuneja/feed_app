class Home extends React.Component {
  render() {
    return (
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-md-4">
            <h1>Name - </h1>
            <h2>Feeds - </h2>
          </div>
          <div className = "col-md-8">
            <h1>Feeds&nbsp;<a href="/feeds/add">Add Feed</a></h1>
          </div>
        </div>
      </div>
    );
  }
}
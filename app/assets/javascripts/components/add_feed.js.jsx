class AddFeed extends React.Component {
  render() {
    return (
      <form action="/feeds/add" method="post">

        <div className="container-fluid form">
          <h1 style={{backgroundColor:'white'}}>Add Feed</h1>
          <label htmlFor="content"><b>Content</b></label>
          <input type="text" placeholder="Enter Content" name="content" required />
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}
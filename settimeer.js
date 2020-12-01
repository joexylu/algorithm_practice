class SomeComponent extends Component {
  state = {count:0}
  
  handleClick = async () => {    
    this.increaseCount();
    this.increaseCount();
    await fetch();
    this.increaseCount();
    this.increaseCount();
  setTimeout(() => {
   console.log('count:', this.state.count);
  });
  }
  
  increaseCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1;
    });
  }
  
  render() {
    return (
        <button onClick={this.handleClick}>Click</button>
    )
  }
}
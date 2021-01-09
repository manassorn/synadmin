'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  componentDidMount() { 
    
  }

  render() {
    if (this.state.data) {
      return 'You liked this.' + this.state.data.a;
    }

    return 
  }
}

const domContainer = document.querySelector('#navbar');
ReactDOM.render(e(NavBar), domContainer);

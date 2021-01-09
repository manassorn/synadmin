'use strict';

const e = React.createElement;

class CourseCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  componentDidMount() { 
    
  }

  render() {
    const card = <div class="col-6 col-md-3">
        <div class="card" style="box-shadow: none"> 
         <img class="card-img-top rounded rounded-lg" src="assets/images/avatars/avatar-1.png" alt="Card image cap" style=""/> 
         <div class="card-body p-0"> 
          <p class="card-text">trigonemito</p> 
         </div> 
        </div> 
       </div> ;
    const cards = [card, card]
    return {cards}
  }
}

const domContainer = document.querySelector('#course-cards');
ReactDOM.render(e(CourseCards), domContainer);

import React, {Component} from 'react';
import Mousetrap from 'mousetrap'

// eslint-disable-next-line
class Konami extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        Mousetrap.bind(['1 2 3 4', 'up up down down left right left right b a'], this.popUp);

    }

    componentWillUnmount(){
        Mousetrap.unbind(['1 2 3 4', 'up up down down left right left right b a']);

    }

    popUp(){
        alert('konami code');
    }

render() {
  return (
    <div>hello {this.props.name}, this is konami</div>
  );
 }
}
export default Konami;

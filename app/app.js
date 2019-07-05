import React from 'react';
import ReactDom from 'react-dom';

import GitHub from './components/gitHub';

ReactDom.render(<GitHub />, document.getElementById('app'));


function life(success){
  success ? keepGoin() :
    life(keepTrying());
}


function life(success) {
    success ? keepGoing() :
        life(keepTrying());
}

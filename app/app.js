import React from 'react';
import ReactDom from 'react-dom';

import GitHub from './components/gitHub';

ReactDom.render(<GitHub />, document.getElementById('app'));


function life(success){
  success ? keepGoin() :
    life(keepTrying());
}

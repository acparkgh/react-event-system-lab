// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  constructor() {
    super()
    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        <button onFocus={ () => console.log('Good!') }
                onBlur={ () => console.log('Hey! Eyes on me!') }
        >
          ClickMe!
        </button>  
      </div>
    )
  }

}

export default EyesOnMe
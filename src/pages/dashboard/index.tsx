import React from 'react'

import {ComponentProps} from '../_app';

const Index : React.FC<ComponentProps> = ({ viewer })=> {
  console.log(viewer);
  console.log(viewer.email);
  return (
    <div>
      <h1>Hello dashboard</h1>
    </div>
  )
}

export default Index

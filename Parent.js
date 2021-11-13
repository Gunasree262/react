import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    return (
        <div>
            <h1>parent is a functional component</h1>
            <Child1 name="Guna"/>
            <Child2 name="uma"/>
        </div>
    )
}

export default Parent

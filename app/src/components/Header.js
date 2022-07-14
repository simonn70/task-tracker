import React from 'react'
import Button from './Button'

const Header = ({onAdd,showAdd}) => {
  return (
    <div className='header'>
      <h2>task tracker</h2>
      <Button color={showAdd? 'black':'green'} onClick={onAdd} btn={showAdd? 'close':'add'} />
      </div>
  )
}

export default Header

import Button from './Button'
import '../index.css'

const Header = ({ showForm, changeTextColor }) => {
  return (
    <header className="header">
      <h2 className="app-header">Todo List</h2>
      <Button onClick={showForm} color={changeTextColor ? 'red' : 'green'} text={changeTextColor ? 'Close' : 'Add'} />
    </header>
  )
}

export default Header
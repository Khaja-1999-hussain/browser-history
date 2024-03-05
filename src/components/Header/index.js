// import './index.css'

const Header = props => {
  const {onChangeSearchInput} = props
  return (
    <div className="nav-container">
      <img
        className="logo"
        alt="app logo"
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
      />
      <div className="input-container">
        <img
          className="search-icon"
          alt="search icon"
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
        />
        <input
          className="input"
          onChange={onChangeSearchInput}
          type="search"
          placeholder="Search history"
        />
      </div>
    </div>
  )
}

export default Header

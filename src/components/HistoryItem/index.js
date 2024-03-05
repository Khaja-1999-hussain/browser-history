// import './index.css'

const HistoryItem = props => {
  const {historyData, updatedHistoryData} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyData

  const deleteBtn = () => {
    updatedHistoryData(id)
  }
  return (
    <li>
      <p className="">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="" />
      <p className="">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button
        type="button"
        data-testid="delete"
        className=""
        onClick={deleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem

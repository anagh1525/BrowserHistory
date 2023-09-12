const UserHistory = prop => {
  const {userDetails, deleteUser} = prop
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button data-testid="delete" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default UserHistory

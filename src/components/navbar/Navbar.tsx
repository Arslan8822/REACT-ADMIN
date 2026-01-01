import "./navbar.scss"

const navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>lamadmin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" />
            <img src="/app.svg" alt="" />
            <img src="/expand.svg" alt="" />
            <div className="notifications">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="/user.svg" alt="" />
                <span>Arslan</span>
            </div>
            <img src="/setting.svg" alt="" />

        </div>
    </div>
  )
}

export default navbar
export function Settings() {
  return (
    <div className="app-card">
      <div className="settings">
        <div className="settings-image">
          <img src={require("../assets/avatar.png")} />
        </div>
        <div className="settings-content">
          <div className="row">
            <div className="column">
              <div className="form-group">
                <label>Your Name</label>
                <div className="form-input-box">
                  <input type="text" className="form-input" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <label>Your Name</label>
                <div className="form-input-box">
                  <input type="text" className="form-input" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="form-group">
                <label>Your Name</label>
                <div className="form-input-box">
                  <input type="text" className="form-input" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <label>Your Name</label>
                <div className="form-input-box">
                  <input type="text" className="form-input" />
                </div>
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

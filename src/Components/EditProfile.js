export function EditProfile() {
  return (
    <>
      <div className="app-card">
        <div className="settings">
          <div className="settings-image">
            <img
              src={require("../assets/avatar.png")}
              className="profile-image"
            />
            <div class="profile-container">
             <button>✎</button>
              <input type="file" id="file-input" accept="image/*"/>
            </div>
          </div>
          <div className="settings-content">
            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label>Your Name</label>
                  <div className="form-input-box">
                    <input type="text" className="form-input"  placeholder="Enter your name"/>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="form-group">
                  <label>User Name</label>
                  <div className="form-input-box">
                    <input type="text" className="form-input"  placeholder="Enter your user name"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label>Email</label>
                  <div className="form-input-box">
                    <input type="email" className="form-input" placeholder="Enter your email"/>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="form-group">
                  <label>Password</label>
                  <div className="form-input-box">
                    <input type="password" className="form-input" placeholder="Enter your password"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <div className="form-input-box">
                    <input type="date" className="form-input" placeholder="Enter your date of birth"/>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="form-group">
                  <label>Present Address</label>
                  <div className="form-input-box">
                    <input type="text" className="form-input" placeholder="Enter your present address" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label>Permanent Address</label>
                  <div className="form-input-box">
                    <input type="text" className="form-input" placeholder="Enter your permanent address"/>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="form-group">
                  <label>City</label>
                  <div className="form-input-box">
                    <input type="text" className="form-input" placeholder="Enter your city"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="column">
                <div className="form-group">
                  <label>Postal Code</label>
                  <div className="form-input-box">
                    <input type="text" className="form-input" placeholder="Enter your postal code"/>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="form-group">
                  <label>Country</label>
                  <div className="form-input-box">
                    <input type="text" className="form-input" placeholder="Enter your Country"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn">
              <button className="button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

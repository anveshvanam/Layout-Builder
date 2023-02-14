// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controls-container">
          <div className="responsive-container">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-groups">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  onChange={onChangeContent}
                  checked={showContent}
                  className="checkbox-input"
                />

                <label htmlFor="content">content</label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                  className="checkbox-input"
                />

                <label htmlFor="leftNavbar">Left Navbar</label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                  className="checkbox-input"
                />
                <label htmlFor="rightNavbar">Right Navbar</label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController

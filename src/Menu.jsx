import React from 'react';
import MenuLinks from './MenuLinks';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }

  _handleDocumentClick(e) {
    const { isOpen } = this.state;
    if (isOpen && !this.menuRef.current.contains(e.target)) {
      this.setState({
        isOpen: false,
      });
    }
  }

  _menuToggle(e) {
    e.stopPropagation();
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const menuStatus = isOpen ? 'isopen' : '';

    return (
      <div ref={this.menuRef}>
        <div className="menubar">
          <div label="hambclicker" role="menuitem" className="hambclicker" onClick={this._menuToggle} onKeyDown={() => {}} tabIndex={0} />
          <div id="hambmenu" className={menuStatus}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="title">
            <span>Gallery</span>
          </div>
        </div>
        <MenuLinks menuStatus={menuStatus} />
      </div>
    );
  }
}

export default Menu;

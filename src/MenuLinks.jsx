import React from 'react';
import './Menu.css';

class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'Line',
        link: '/line',
      }],
    };
  }

  render() {
    const { links } = this.state;
    const { menuStatus } = this.props;
    const outLinks = links.map((link, i) => (
      <li ref={i + 1}>
        <a href={link.link}>{link.text}</a>
      </li>
    ));

    return (
      <div className={`${menuStatus} menu`}>
        <ul>
          { outLinks }
        </ul>
      </div>
    );
  }
}

MenuLinks.propTypes = {
  menuStatus: String.isRequired,
};

export default MenuLinks;

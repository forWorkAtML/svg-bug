const CamelCaseSVG = ({ handleClick }) => {
  return (
    <div className="camelCase-container">
      <header className="header">tabIndex</header>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" tabIndex="1">
        <g>
          <circle cx="3.99" cy="12" r="1.96" />
          <circle cx="11.99" cy="12" r="1.96" />
          <circle cx="19.99" cy="12" r="1.96" />
        </g>
      </svg>
      <button onClick={ handleClick }>tolowercase</button>
    </div>
  );
};

const LowercaseSVG = ({ handleClick }) => {
  return (
    <div className="lowercase-container">
      <header className="header">tabindex</header>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" tabindex="1">
        <g>
          <circle cx="3.99" cy="12" r="1.96" />
          <circle cx="11.99" cy="12" r="1.96" />
          <circle cx="19.99" cy="12" r="1.96" />
        </g>
      </svg>
      <button onClick={ handleClick }>toCamelCase</button>
    </div>
  );
};


class SVGBUG extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lowercase: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      lowercase: !this.state.lowercase
    });
  }

  render() {
    return (
      <div className="main">
        <p>Upon pageload:<br/>
        press the TAB key and focus is on the button<br/>
        click the button<br/>
        press the TAB key and focus is on the dots first</p>
        { this.state.lowercase
          ? <LowercaseSVG handleClick={ this.handleClick } />
          : <CamelCaseSVG handleClick={ this.handleClick } />
        }
      </div>
    )
  }
}

ReactDOM.render(
  <SVGBUG/>,
  document.getElementById('root-div')
);

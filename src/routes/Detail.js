import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state !== undefined) {
      return (
        <div>
          <h1>{location.state.title}</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;

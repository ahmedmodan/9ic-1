import React from 'react';
import { Link } from 'react-router';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container" id="genre-list">
          <div className="links">
            <Link to="/genre"> Genre </Link>
          </div>
        </div>
      </div>
    );
  }
}


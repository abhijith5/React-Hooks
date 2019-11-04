import React, { Component } from 'react';
import PlayerContextProvider from './context/PlayerContext';
import Topbar from './components/Topbar';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';

class App extends Component {
  render() {
    return (
      <div className="uk-container">
        <PlayerContextProvider>
          <Topbar></Topbar>
          <div class="uk-child-width-expand@s uk-text-center" uk-grid="true">
            <div>
              <PlayerForm></PlayerForm>

            </div>
            <div>
              <PlayerList></PlayerList>

            </div>

          </div>
        </PlayerContextProvider>
      </div>
    );
  }
}

export default App;

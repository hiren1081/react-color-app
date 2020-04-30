import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from './Palette';
import SinglePaletteColor from './SinglePaletteColor';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from "./ColorHelper";
import './App.css';
class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SinglePaletteColor
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />)}
        />
        <Route
          exact
          path="/"
          render={(routeprops) => <PaletteList palettes={seedColors} {...routeprops} />}

        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
            palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )}
          />)}
          
        />
        
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[1])}/>
      // </div>
    );
  }
}
export default App;



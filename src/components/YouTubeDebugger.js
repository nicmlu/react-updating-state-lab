// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  adjustBitrate = () => this.adjustSettings({ bitrate: 12 });

  adjustResolution = () =>
    this.adjustSettings({ video: { resolution: "720p" } });

  adjustSettings = newSetting => {
    console.log(this.state);
    this.setState(
      {
        settings: {
          ...this.state.settings,
          ...newSetting
        }
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <button className={"bitrate"} onClick={this.adjustBitrate}></button>
        <button
          className={"resolution"}
          onClick={this.adjustResolution}
        ></button>
      </div>
    );
  }
}

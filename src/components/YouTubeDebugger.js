// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
            }
        }
    }

    clickHelper = (e) => {
        this.setState({settings: {
            ...this.state.settings, bitrate: 12
        }})
    }

    clickHelperResolution = () => {
        this.setState({settings: {
            ...this.state.settings, video: {resolution: "720p"}
        }})
    }

    render() {
        return (
            <div>
            <button className="bitrate" onClick={this.clickHelper}></button>
            <button className="resolution" onClick={this.clickHelperResolution}></button>
            </div>
        )
    }
}

export default YouTubeDebugger
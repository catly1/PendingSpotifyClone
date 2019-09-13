import React, { Component } from 'react';
import { withRouter } from 'react-router'

class ContextMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            playlists: [],
            refreshAdd: false,
            refreshRemove: false,
        }
        this.renderContextMenu = this.renderContextMenu.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleIfSongIsInPlaylist = this.handleIfSongIsInPlaylist.bind(this);
    }
    handleAdd(e){
        // let playerAdd = document.querySelector(".song-info-details-first-line").id
        const playlistMenu = document.querySelector(".playlist-menu")
        let song_id = parseInt(playlistMenu.id)
        const playlist_id = parseInt(e.target.id)
        this.props.createPlaylistSong({ playlist_id: playlist_id, song_id: song_id })
        playlistMenu.classList.remove("active")
        this.playlist_id = playlist_id
        this.setState({refreshAdd: true})
    }

    handleRemove(e){
        let playlist = this.handleIfSongIsInPlaylist()
        const playlistMenu = document.querySelector(".playlist-menu")
        let song_id = parseInt(playlistMenu.id)
        let playlist_id = playlist.id
        let playlist_song = playlist.playlist_songs.filter(playlist_song => playlist_song.song_id = song_id)[0]
        this.props.deletePlaylistSong(playlist_song.id)
        playlistMenu.classList.remove("active")
        this.setState({ refreshRemove: true })
    }

    componentDidMount() {
        this.props.currentUser.playlists.forEach(playlist => this.props.requestPlaylist(playlist.id))
    }

    componentDidUpdate(prevProps, prevState) {
        // if (location.hash.includes("playlists") && !this.playlist) {
        //     const playlists = this.props.playlists
        //     this.handleIfSongIsInPlaylist(playlists)
        // }
        
        // if (this.state.refreshRemove) {
        //     this.props.requestPlaylist(this.playlist.id)
        //     this.setState({refreshRemove: false})
        // }

        // if (this.state.refreshAdd) {
        //     this.props.requestPlaylist(this.playlist_id)
        //     this.setState({refreshAdd: false})
        // }

        if (this.state.playlists.length === 0 && this.props.playlists.length > 0) {
            const playlists = this.props.playlists
            this.setState({ playlists: playlists })
        }

        // if (this.playlist && !this.state.playlists.includes(this.playlist)) {
        //     const playlist = this.props.requestPlaylist(this.playlist.id)
        // }

    }

    renderContextMenu() {
        if (this.state.playlists.length > 0) {
        return this.props.playlists.map(playlist => {
        return <span id={playlist.id} onClick={this.handleAdd} key = { playlist.id } className = "playlist-menu-item" > { playlist.name }</span >})
        }


        // let playlist
        // if (this.props.currentUser) playlist = this.props.currentUser.playlists.map(playlist => <span key={playlist.id} className="playlist-menu-item">{playlist.name}</span>)
        // return playlist
    }

    handleIfSongIsInPlaylist(playlists = this.state.playlists){
        let location = this.props.history.location.pathname
        let extract = ""
        for (let i = location.length - 1; location[i] != "/"; i--){
            extract += location[i]
        }
        let playlist_id = parseInt(extract.split("").reverse().join(""))
        let playlist = playlists.filter(playlist => playlist.id = playlist_id)[0]
        this.playlist = playlist
        return playlist
    }
    
    handleRemoveOption(){
        if (location.hash.includes("playlists")){

            return(<span className="playlist-menu-item" onClick={this.handleRemove}>remove</span>)
        }
    }

    handleRender(){
        
        return (<nav className="playlist-menu">
            {this.handleRemoveOption()}
            <span className="playlist-menu-item-header">Add to Playlist:</span>
            {this.renderContextMenu()}
        </nav>)
    }

    render(){
        return(<div>
            {this.handleRender()}
        </div>
        )
    }
}

export default withRouter(ContextMenu)
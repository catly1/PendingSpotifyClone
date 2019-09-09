import { combineReducers } from 'redux';
import artists from './artists_reducer';
import users from './users_reducer';
import songs from './songs_reducer';
import queue from './queue_reducer';

export default combineReducers({
    users, songs, artists, queue
});

import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {takeEvery, put} from "redux-saga/effects";
import logger from "redux-logger";
import axios from "axios";

// __________ ROOT SAGA __________
function* rootSaga() {
	yield takeEvery("FETCH_MOVIES", fetchMovies);
	yield takeEvery("FETCH_GENRES", fetchGenres);
	yield takeEvery("FETCH_DETAILS", fetchDetails);
	yield takeEvery("UPDATE_DETAILS", updateDetails);
}

// __________ MOVIES __________
// movies Redux store
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Movies sagas
// Fetch movies
function* fetchMovies(action) {
	try {
		// get movies from db, then set movies in store
		const res = yield axios.get(`/api/movies`);
		yield put({type: "SET_MOVIES", payload: res.data});
	}
	catch (error) {
		console.log("Error fetching all movies");
	}
}

// __________ GENRES __________
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Genres sagas
function* fetchGenres(action) {
  try {
		// fetch genres from movies, then set genres in store
		const res = yield axios.get(`/api/genres`);
		yield put({type: "SET_GENRES", payload: res.data});
	}
	catch (error) {
		console.log("Error fetching all genres");
	}
}

// __________ DETAILS __________
const details = (state = {}, action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// Details sagas
// Fetch details
function* fetchDetails(action) {
  try {
		// set our details to default so we don't get any flashes of the old details
		yield put({type: "SET_DETAILS", payload: {}});
		// get details from DB, then set details
		const res = yield axios.get(`/api/movies/${action.payload}/details`);
		yield put({type: "SET_DETAILS", payload: res.data});
	}
	catch (error) {
		console.log("Error fetching movie details");
	}
}

// update details
function* updateDetails(action) {
	try {
		// update the database, then fetch details and movies
		yield axios.put(`/api/movies/${action.payload.id}/details`, action.payload);
		yield put({type: "FETCH_DETAILS", payload: action.payload.id});
		yield put({type: "FETCH_MOVIES"});
	}
	catch (error) {
		console.log("Error fetching movie details");
	}
}

// __________ REDUX STORE INSTANCE __________
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create store instance
const store = createStore(
  combineReducers({
    movies,
		genres,
		details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

// export store
export default store;
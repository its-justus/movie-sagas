import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {takeEvery, put} from "redux-saga/effects";
import logger from "redux-logger";
import axios from "axios";

// __________ ROOT SAGA __________
function* rootSaga() {
	yield takeEvery("FETCH_MOVIES", fetchMovies);
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
function* fetchMovies(action) {
	try {
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
  console.log("fetchGenres saga");
}

// __________ REDUX STORE INSTANCE __________
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create store instance
const store = createStore(
  combineReducers({
    movies,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

// export store
export default store;
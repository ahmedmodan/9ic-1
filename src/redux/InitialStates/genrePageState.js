import _ from 'lodash';

let genres = {
  'Adventure': '',
  'Animation': '',
  'Comedy': '',
  'Crime': '',
  'Documentary': '',
  'Drama': '',
  'Family': '',
  'Fantasy': '',
  'Foreign': '',
  'History': '',
  'Horror': '',
  'Music': '',
  'Mystery': '',
  'Romance': '',
  'Science Fiction': '',
  'TV Movie': '',
  'Thriller': '',
  'War': '',
  'Western': ''
};

const initialState = _.mapValues(genres, (item) => {
  return item + 'http://res.cloudinary.com/hhnhfwb0g/image/upload/v1451512279/Chris_mbp08a.png';
});

export default initialState;

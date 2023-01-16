export default function genresList(genres) {
  const genreList = genres.map(({ name }) => name);

  if (!genreList.length) {
    genreList.push('Other');
  }

  // if (genreList.length > 3) {
  //   return [genreList[0], genreList[1], genreList[2]].join(' ');
  // }

  return genreList.join(' ');
}

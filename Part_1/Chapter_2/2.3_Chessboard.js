console.log('========2.3 Chessboard ========= ');


//Chessboard
// String that represents 8x8 grid using \n
const chessboard = (size) => {

  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  console.log(board);
}
chessboard(8);

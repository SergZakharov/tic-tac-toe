class TicTacToe {
	constructor() {               //ind col
			this.grid = [             //row 0 1 2
			[null, null, null],       //    0 1 2
			[null, null, null],       //    0 1 2
			[null, null, null]
                  ];
      this.move = 0;
      this.row=3;
      this.col=3;
	}

	getCurrentPlayerSymbol()
   {
		if (this.move % 2 == 0)
         {return 'x';} //starting x
		else {return 'o';}
	}

	nextTurn(rowIndex, columnIndex) {
		if (!this.grid[rowIndex][columnIndex])    //new move
    {
      this.grid[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this.move++;
			return this.grid[rowIndex][columnIndex];
		}
    else {return this.grid[rowIndex][columnIndex];} //old
	}

checker() {
  // checking winning cases
  var grid_center=this.grid[1][1];
  if (grid_center)
    {
    if (this.grid[0][0] == grid_center && this.grid[2][2] == grid_center)
     {return grid_center;}  //l.top -> r.bottom  x or o
    if (this.grid[2][0] == grid_center && this.grid[0][2] == grid_center)
     {return grid_center;}  //r.top -> l.bottom x or o
    }

	// checking for win in columns case x

		for(var col = 0; col < this.col; col++)
     {
			for(var row = 0; row < this.row; row++)
       {
				if(this.grid[row][col] != 'x')	break;
				if(row == this.row-1) return 'x';
			 }
	   }
  // checking for win in columns case o
		for(var col = 0; col < this.col; col++)
      {
			for(var row = 0; row < this.row; row++)
        {
				if(this.grid[row][col] != 'o') break;
				if(row == this.row-1) return 'o';
			}
		}

// checking for win in rows case x
		for(var col = 0; col < this.col; col++)
    {
			for(var row = 0; row <this.row; row++)
       {
				if(this.grid[col][row] != 'x')break;
				if(row == this.row-1)	return 'x';
			 }
		}
// checking for win in rows case o
		for(var col = 0; col < this.col; col++)
     {
			for(var row = 0; row < this.row; row++)
       {
				if(this.grid[col][row] != 'o')break;
				if(row == this.row-1)	return 'o';
		  }
		}
//---------------max move
		if (this.move == this.row*this.col)
    {return 'draw';}
    else { return 'playing';}
//----------------still playing
	//  return 'playing';
  }

	isFinished()
   {
		if (this.checker() == 'playing') {return false;}
    else {return true;}
	}

	getWinner()
   {
		var check = this.checker();
		if (check == 'playing' || check == 'draw') {return null; }
    else {return check;}
  }

	noMoreTurns()
   {
		if (this.move == this.row*this.col) {return true;}
    else {return false;}
	}

	isDraw()
   {
		if (this.checker() == 'draw') {return true;}
    else {return false;}
	}

	getFieldValue(rowIndex, colIndex)
   {
		return this.grid[rowIndex][colIndex];
	}

}

module.exports = TicTacToe;

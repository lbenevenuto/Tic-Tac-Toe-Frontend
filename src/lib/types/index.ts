type BoardType = [[string, string, string], [string, string, string], [string, string, string]]

export type GameStateType = {
  board: BoardType
  score: {
    x: number
    o: number
  }
  currentTurn: 'x' | 'o'
  victory: string // Can also use 'x' | 'o' | '' if victory is either x, o, or no one yet
}

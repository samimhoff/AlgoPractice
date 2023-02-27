/**
* @param {number[][]} grid
* @return {number}
i: grid in form of array of arrays of 1s and 0s representing 1 - land, 2 - water
o: integer representing surface area
e: There will only be one island.
*/
var islandPerimeter = function(grid) {
/* Strategy:
1) Count all land plots and multiply by 3 for base number
2) Subtract from count all contiguous connections
    a) from horiontal connections
    b) from vertical connections
3) After completing solution, determine whether 1-2 can be changed for more efficient.
*/
    let count = 0;
    //Counting up total
    let prev = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                count+=4;
                if (prev) {
                    count-=2;
                }
                prev = true;
            } else {
                prev = false;
            }
        }
        prev = false;
    }
    //Subtracting contigous segments;
    let prevVert = false;
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] === 1) {
                if (prevVert === true) {
                    count-=2;
                }
                prevVert = true
            } else {
                prevVert = false;
            }
        }
        prevVert = false;
    }
    return count;
};
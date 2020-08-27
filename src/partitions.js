/* The function gets two parameters:
@number_of_teams - how many teams do we desire to get in this partition 
@number_of_players - how many players exist in our player pool

Function prints all possible partitions
*/

function partitions(number_of_teams, number_of_players){
    
    // Team size is the CEILING of number_of_players/number_of_teams
    var team_size = Math.ceil(number_of_players/number_of_teams);
    //Param 'missing' represents how many players are missing to form number_of_teams teams of size team_size
    var missing=(team_size*number_of_teams)-number_of_players;
    //Param partition is an array of arrays representing 1 partition at a time
    var partition = [];
    /*An array of size |number_of_teams|. Initialized to 0. 
    For every index_in_team[i]=j -> we are looking at the j'th player of team i*/
    var index_in_team= Array(number_of_teams).fill(0);
    for (var i = 0; i < number_of_teams; i++) partition[i]= new Array(team_size).fill(0);
    

    /* The function recieves the following params to achieve: Function prints all possible partitions
     @pivot = the current pivot number (always starts at 0),
     @lastfilled =parameter for index of the rightmost filled part
     The rest are as described previously
     */
    function genparts(pivot,lastfilled, number_of_players, team_size, number_of_teams, missing){
        //Stop condition: When we have pivoted with all numbers PRINT the current partition
        if(pivot==number_of_players){
            console.log(partition)
            return;
        }

        //The loop iterates through every TEAM
        for (var i=0;i<Math.min(number_of_teams,lastfilled+2);i++){ 
            //if the current index_in_team exists, then go into the loop
            if (index_in_team[i]<team_size){
                // If this is the last player to be added to the team and there are still 'fake players' to be added (missing>0):
                if (index_in_team[i] == (team_size-1) && (missing > 0)){
                    //Adds a fake player to the team and gives them a unique ID (-1*missing)
                    partition[i][index_in_team[i]]= -1*missing;
                    //continue to the next member in team 
                    index_in_team[i]+=1;
                    //call function again for the remainder and reduce missing by 1
                    genparts(pivot,Math.max(i,lastfilled), number_of_players, team_size, number_of_teams, (missing-1));
                    index_in_team[i]--;  
                }
                else{
                    //Sets the next player in the team to be 'pivot'
                    partition[i][index_in_team[i]]=pivot;
                    //continue to the next member in team 
                    index_in_team[i]+=1;
                    //call function again for the remainder
                    genparts(pivot+1,Math.max(i,lastfilled),number_of_players, team_size, number_of_teams, missing);
                    index_in_team[i]--;
                }
            }

        }
    }
    genparts(0,-1,number_of_players, team_size,number_of_teams,missing);
}    

partitions(3,17);
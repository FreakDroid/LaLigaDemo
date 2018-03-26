import axios from 'axios';

import {
    GET_TEAMS
} from './types';

export const getTeams = () => {
    return(dispatch) =>{
        axios.get('https://api.football-data.org/v1/competitions/399/teams').then(teams =>{
            console.log(teams);
            dispatch({type: GET_TEAMS, payload: teams.data.teams})
        }).catch(err => {
            console.log(err)
        })
    }
}
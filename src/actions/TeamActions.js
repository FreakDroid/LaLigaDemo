import axios from 'axios';

import {
    GET_TEAMS
} from './types';

export const getTeams = () => {
    return(dispatch) =>{
        axios.get('https://api.football-data.org/v1/competitions/399/teams').then(teams =>{
            dispatch({type: GET_TEAMS, payload: teams.data.teams})
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getLeagueTable = () => {
    return(dispatch) => {
        axios.get('https://api.football-data.org/v1/competitions/399/leagueTable').then(position =>{
            console.log(position);
        }).catch(err => {
            console.log(err);
        })
    }
}
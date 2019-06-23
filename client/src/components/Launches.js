import React, { Component , Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
query LaunchesQuery    {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h4>Launches</h4>
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <p> loading.....</p>
                            if(error) return console.log(error);
                            console.log(data);
                            return <Fragment>
                                {
                                    data.launches.map(launch => (
                                        <LaunchItem key={launch.flight_number} launch={launch} />
                                    ))
                                }
                            </Fragment>
                                
                    
                        }
                    }
                </Query>

            </Fragment>
        )
    }
}

export default Launches

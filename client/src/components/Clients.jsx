import { gql, useQuery } from '@apollo/client';

const GET_CLIENTS = gql`
  query GetClients {
    clients {
        id
        name
        email
        phone
    }
  }
`
export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Something broke :(</p>

    return (
        <>
            {!loading && !error && (
                <table className='table table-hover mt-3'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            )}
        </>
    )
}
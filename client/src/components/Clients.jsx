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
    const { loading, error } = useQuery(GET_CLIENTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Something broke :(</p>

    return (
        <>
            {!loading && !error && (
                <h1>Clients</h1>
            )}
        </>
    )
}
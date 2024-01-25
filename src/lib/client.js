import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { gql } from "@apollo/client";



const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://countries.trevorblades.com/"
    })
  })


});

export async function loadData() {
  const { data } = await getClient().query({
    query: gql`
    query GetAllCountries {
      countries {
        code
        name
        native
        capital
        currency
        languages {
          code
          name
        }
      }
    }
    `,
  });
  return data.countries;
}
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

async function loadData() {
  try {
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

    return data;
  } catch (error) {
    console.error("Error loading country data:", error);
    throw error; 
  }
}

export default loadData;


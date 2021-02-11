import fetchGraphQL from "./fetchGraphQL";

import {
    Environment,
    Network,
    RecordSource,
    RequestParameters,
    Store,
    Variables,
} from "relay-runtime";

async function fetchRelay(params: RequestParameters, variables: Variables) {
    console.log(
        `fetching query ${params.name} with ${JSON.stringify(variables)}`,
    );
    return fetchGraphQL(params.text, variables);
}

export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});

const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

module.exports = async function (context, req) {
    const { endpoint, key, databaseId, containerId } = config;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    await dbContext.create(client, databaseId, containerId);
    
    try {
        console.log(`Querying container: Items`);

        const querySpec = { query: "SELECT * from c" };
        const { resources: items } = await container.items.query(querySpec).fetchAll();

        context.res = {
            body: JSON.stringify(items, null, "\t")
        }
    } catch (err) {
        console.log(err.message);
    }
}

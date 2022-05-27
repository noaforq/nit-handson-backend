// @ts-check

const config = {
    endpoint: "",
    key: "",
    databaseId: "Tasks",
    containerId: "Items",
    partitionKey: { kind: "Hash", paths: ["/category"] }
};
  
module.exports = config;
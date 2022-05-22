// @ts-check

const config = {
    endpoint: "https://nithandson2db.documents.azure.com:443/",
    key: "v9SSd4xStOfoLSRpkK9O6Uqe2U1AjBqeLIDfirWiKpyCZEJ9HyCc5b83MiFkbO8zgdqAVvwbH5Dm3Ckq9TxBgg==",
    databaseId: "Tasks",
    containerId: "Items",
    partitionKey: { kind: "Hash", paths: ["/category"] }
};
  
module.exports = config;
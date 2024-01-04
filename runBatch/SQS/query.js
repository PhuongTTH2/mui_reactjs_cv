const fetchGraphQLWithTokens = async (nextToken1, nextToken2) => {
  if (nextToken1 && nextToken2) {
    let hasNextPage1 = true;
    let hasNextPage2 = true;
    let allData1 = [];
    let allData2 = [];

    while (hasNextPage1 || hasNextPage2) {
      const response = await callGraphQLWithTokens(nextToken1, nextToken2);


      nextToken1 = response.data.getPaginatedData.nextToken1;
      nextToken2 = response.data.relatedTable.nextToken2;

      allData1.push(response.data.getPaginatedData.items);
      allData2.push(response.data.relatedTable.items);

      hasNextPage1 = !!nextToken1;
      hasNextPage2 = !!nextToken2;
    }

  } else {
    console.log('');
  }
};

const callGraphQLWithTokens = async (nextToken1, nextToken2) => {
  const query = `
    query GetPaginatedDataWithRelatedInfo($nextToken1: String, $nextToken2: String) {
      getPaginatedData(nextToken: $nextToken1) {
        items {
          relatedTableID
          otherField1
          otherField2
        }
        nextToken1
      }
      relatedTable(nextToken: $nextToken2) {
        items {
          field1
          field2
        }
        nextToken2
      }
    }
  `;

  const variables = {
    nextToken1: nextToken1,
    nextToken2: nextToken2
  };


};


const nextToken1 = 'initialNextToken1';
const nextToken2 = 'initialNextToken2';

fetchGraphQLWithTokens(nextToken1, nextToken2);
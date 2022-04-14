const response1 = {
    page: 1,
    limit: 10,
    total: 50,
    data: {
        correlationId: '1111'
    }
};

const response2 = {
    page: '1',
    limit: '10'
};

const { data, ...rest } = response1;

const matchObject = (smallerObj: Record<string, any>, biggerObj: Record<string, any>) =>
    Object.entries(smallerObj).every(([key, value]) => key in biggerObj && biggerObj[key].toString() === value.toString());

const result = matchObject(response2, rest);

// result = true

export { };
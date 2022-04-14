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

const parseObject = (obj: Record<string, any>) =>
    Object.entries(obj).reduce((prev, [key, value]) => ({ ...prev, [key]: !isNaN(value as any) ? Number(value) : value }), {});

const matchObject = (smallerObj: Record<string, any>, biggerObj: Record<string, any>) =>
    Object.entries(smallerObj).every(([key, value]) => key in biggerObj && biggerObj[key] === value);

const convertedRest = parseObject(response2);

const result = matchObject(convertedRest, rest);

// result = true

export { };
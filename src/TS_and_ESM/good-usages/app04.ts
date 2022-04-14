
const parseObject = (obj: Record<string, any>) =>
    Object.entries(obj).reduce((prev, [key, value]) => ({ ...prev, [key]: !isNaN(value as any) ? Number(value) : value }), {});


const parameters = { page: '1', limit: '10', total: 100 };

const result = parseObject(parameters);

// result = { page: 1, limit: 10, total: 100 };

console.log(result);

export { };
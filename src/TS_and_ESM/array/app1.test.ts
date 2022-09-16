
describe('Array Test 1', () => {
    it('Array length test 1', () => {
        const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

        expect(fruits.length).toEqual(4);
    });

    it('String split to Array test 1', () => {
        const fruitsString = 'Apple,Banana,Orange,Mango';

        const fruits = fruitsString.split(',');

        expect(fruits.length).toEqual(4);
    });

    it('Array join to String test 1', () => {
        const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

        expect(fruits.join(', ')).toEqual('Apple, Banana, Orange, Mango');
    });

    it('Array indexOf test 1', () => {
        const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

        expect(fruits.indexOf('Orange')).toEqual(2);

        expect(fruits.indexOf('Cherry')).toEqual(-1);
    });

    it('Array includes item test 1', () => {
        const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

        expect(fruits.includes('Banana')).toEqual(true);

        expect(fruits.includes('Cherry')).toEqual(false);
    });

    it('Array splice test 1', () => {
        const months = ['January', 'March', 'April', 'June'];

        months.splice(1, 0, 'February');

        expect(months).toEqual(['January', 'February', 'March', 'April', 'June']);

        months.splice(4, 1, 'May', 'June');

        expect(months).toEqual(['January', 'February', 'March', 'April', 'May', 'June']);

        months.splice(-1);

        expect(months).toEqual(['January', 'February', 'March', 'April', 'May']);

        const removedItems = months.splice(2);

        expect(removedItems).toEqual(['March', 'April', 'May']);

        expect(months).toEqual(['January', 'February']);
    });

    it('Remove first item from Array', () => {
        const months = ['January', 'February', 'March', 'April'];

        const firstItem = months.shift();

        expect(firstItem).toEqual('January');

        expect(months).toEqual(['February', 'March', 'April']);
    });

    it('Remove last item from Array', () => {

        const months = ['January', 'February', 'March', 'April'];

        const lastItem = months.pop();

        expect(lastItem).toEqual('April');

        expect(months).toEqual(['January', 'February', 'March']);
    });

    it('Remove first three items from Array', () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June'];

        const firstThreeItems = months.splice(0, 3);

        expect(firstThreeItems).toEqual(['January', 'February', 'March']);

        expect(months).toEqual(['April', 'May', 'June']);
    });

    it('Remove last three items from Array', () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June'];

        const lastThreeItems = months.splice(-3);

        expect(lastThreeItems).toEqual(['April', 'May', 'June']);

        expect(months).toEqual(['January', 'February', 'March']);
    });

    it('Remove middle two items from Array', () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June'];

        const middleTwoItems = months.splice(1, 2);

        expect(middleTwoItems).toEqual(['February', 'March']);

        expect(months).toEqual(['January', 'April', 'May', 'June']);
    });

});
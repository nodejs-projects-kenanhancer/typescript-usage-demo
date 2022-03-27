
{
    type Options = 'yes' | 'no';

    const op = <T extends Options>(value: T): T extends 'yes' ? 'good' : 'bad' => {

        if (value === 'no') {
            return 'bad' as any;
        }

        return 'good' as any;
    };

    const a1: 'bad' = op('no');
    const a2: 'good' = op('yes');
    const a3: 'bad' | 'good' = op(Math.random() ? 'no' : 'yes');
}

{
    type Yes = 'yes';
    type No = 'no';
    type Options = Yes | No;

    type Bad = 'bad';
    type Good = 'good';

    type BadOrGood<T extends Options> = T extends Yes ? Good : Bad;

    const op = <T extends Options>(value: T): BadOrGood<T> => {

        if (value === 'no') {
            return 'bad' as any;
        }

        return 'good' as any;
    }

    const a1: Bad = op('no');
    const a2: Good = op('yes');
    const a3: Bad | Good = op(Math.random() ? 'yes' : 'no');
}


export { };
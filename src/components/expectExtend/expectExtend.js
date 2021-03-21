import React from 'react';

export const bestLaCroixFlavor = () => {
    return "grapefruit"
}

const ExpectExtend = () => {

    return (
        <div>
            <h1>expect.extend(matchers)</h1>
            <p>You can use expect.extend to add your own matchers to Jest. For example, let's say that you're testing a number utility library and you're frequently asserting that numbers appear within particular ranges of other numbers. You could abstract that into a toBeWithinRange matcher:</p>
        </div>
    )
}

export default ExpectExtend;
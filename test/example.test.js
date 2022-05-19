// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem renders a checkbox', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<label><input type="checkbox"><span>4 bananas</span></label>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ qty: 4, name: 'bananas', purchased: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

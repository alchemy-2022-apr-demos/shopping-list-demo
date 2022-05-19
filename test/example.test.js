// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem renders a div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div>4 bananas</div>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ qty: 4, name: 'bananas', purchased: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderItem should add class if purchased', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="complete">4 bananas</div>';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ qty: 4, name: 'bananas', purchased: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

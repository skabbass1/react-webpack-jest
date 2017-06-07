/**
 * Created by sabbas on 6/5/17.
 *
 * This is the main jest configuration file. The configuration can alternatively
 * be defined in the projects package.json but I find  it cleaner to have them
 * in a separate file.
 */

module.exports = {
    //A map from regular expressions to module names that allow to stub out resources,
    // like images or styles with a single module
    moduleNameMapper: {'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'},

    // executed before each test is run to set up the testing environment
    // setupFiles  will execute before setupTestFrameworkScriptFile
    setupFiles:['<rootDir>/jest.setup.js']
}

/**
 * Created by charlie on 5/7/17.
 * Last Update: Apr 27, 2019 (version 2 for the day)
 *
 * ElfDebugEnzyme requires chalk. chalk comes with create-react-app. Otherwise, install
 * it like this:
 *
 *      npm i -D chalk
 *
 * In your tests, initialize ElfDebugEnzyme like this:
 *
 *   import ElfDebugEnzyme from '../ElfDebugEnzyme';
 *   const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Foo.test.js', true);
 *
 * Parameters:
 *    Shown below in the constructor.
 *
 * And then use it in a test:
 *
 *   elfDebugEnzyme.getIndex(wrapper, 'div#addressShow', 3);
 *
 *
 * If you pass in true to the constructor then you always see the output from this code.
 * If you pass false to the constructor, but true to one of the individual methods, then
 * you see the output from only that method. For instance, the true in the call to getLast
 * overrides the false in the constructor:
 *
 *   const elfDebugEnzyme = new ElfDebugEnzyme(false, 'App.test.js');
 *
 *   it('renders and reads H1 text', () => {
 *      const wrapper = shallow(<App />);
 *      const welcome = <h1>Waiting</h1>;
 *      elfDebugEnzyme.getLast(wrapper, welcome.type, true);
 *      expect(wrapper.contains(welcome)).toEqual(true);
 *   });
 *
 */

const debug = require('debug')('elf-debug-enzyme');
const chalk = require('chalk');
const util = require('util');
if (!chalk) {
    console.log('Please install chalk: npm i -D chalk');
}

export default class ElfDebugEnzyme {


    /**
     * @param showData: Whether or not to display output
     *
     * @param callerName: Pass in the name of the class that is
     * using this debug tool. That way, each message written to
     * the console includes the name of the class that is
     * requesting to see the output.
     *
     * @param useDebug: Changes the output showing the element you are searching for.
     * If you use true you see the literal element, if you use false you will see
     * a more complex view the element that can sometimes help you debug it.
     */
    constructor(showData = false, callerName = '', useDebug = true) {
        this.showData = showData;
        this.useDebug = useDebug;
        this.callerName = callerName + ':\n';
        this.showEntireWrapper = false;
    }

    display(value) {
        if (!value) {
            value = 'Not found';
        }
        console.log(
            chalk.bold.yellow('Caller:'), chalk.green(this.callerName) +
            chalk.bold.yellow('Debug value:\n') + chalk.greenBright(value)
        );
    }

    displayWrapper(newWrapper) {
        if (this.showData) {
            console.log('NEW WRAPPER', this.useDebug);
            newWrapper = this.useDebug ? newWrapper.debug() : newWrapper.getElement();
            if (typeof newWrapper === 'object') {
                if (!this.useDebug) {
                    newWrapper = util.inspect(newWrapper);
                } else {
                    newWrapper = JSON.stringify(newWrapper, null, 4);
                }
            }
            this.display(newWrapper);
        }
    }

    getAll(wrapper, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.debug();
            this.display(paragraphData);
        }
    }

    getAllDive(wrapper, showMe) {
        if (this.showData || showMe) {
            const paragraphData = wrapper.dive().debug();
            this.display(paragraphData);
        }
    }

    getElement(wrapper, element, showMe) {
        if (this.showData || showMe) {
            const newWrapper = wrapper.find(element);
            debug(wrapper.find(element).getElement());
            this.displayWrapper(newWrapper);
        }
    }

    getFirst(wrapper, element, showMe) {
        if (this.showData || showMe) {
            if (this.sanity(wrapper, element)) {
                const newWrapper = wrapper.find(element).first();
                debug(wrapper.find(element).first().getElement());
                this.displayWrapper(newWrapper);
            }
        }
    }

    getIndex(wrapper, element, index, showMe) {
        if (this.showData || showMe) {
            const newWrapper = wrapper.find(element).at(index);
            debug(wrapper.find(element).get(index));
            if (!newWrapper.exists()) {
                return this.notFoundError(wrapper, {message: 'Element not found'}, element);
            }
            this.displayWrapper(newWrapper);
        }
    }

    getLast(wrapper, element, showMe) {
        if (this.showData || showMe) {
            if (this.sanity(wrapper, element)) {
                const newWrapper = wrapper.find(element).last();
                debug(wrapper.find(element).last().getElement());
                this.displayWrapper(newWrapper);
            }
        }

    }

    sanity(wrapper, element) {
        if (!wrapper.find(element).exists()) {
            return this.notFoundError(wrapper, {message: 'No elements found'}, element);
        }
        return true;
    }

    notFoundError(wrapper, err, element) {
        if (this.showEntireWrapper === true) {
            console.log(chalk.green(wrapper.debug()));
        }
        console.log(chalk.red.bgYellowBright('ERROR') +
            chalk.yellowBright.bgBlueBright(chalk.black(': ' + err.message)) + '\n' +
            chalk.yellowBright.bgBlueBright('Your ' + element +
                ' element was not found in the wrapper. Are you\n' +
                'sure you are searching on the right element? Are you\n' +
                'searching in the right place? Consider using fit or .only.'));
        this.displayWrapper({debug: () => 'not found', getElement: () => 'not found'});
        return false;
    }
}

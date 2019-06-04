/**
 * Created by charlie on 4/18/17.
 *
 * This logger is designed to be used with React. The doc is here: http://bit.ly/elven-utils
 *
 * At the command line set the ELF_LOGGER environment variable
 * to the name of the module you want to debug:
 *
 *   export REACT_APP_ELF_LOGGER='address'
 *
 * If you want to define two modules, separate them with a semicolon:
 *
 *   export REACT_APP_ELF_LOGGER='address;data-loader'
 *
 * Further information: http://bit.ly/react-app-elf
 *
 * Then start your application and use it like this:
 *
 *   import Logger from '../elf-logger';
 *   const logger = new Logger('address', 'blue', 'yellow', '24px');
 *   logger.log('Hello logger', 'param two', 'param three');
 */
const ElfLogger = class {
    constructor(loggerInit, colorInit, bgInit, fontSizeInit) {
        this.display = false;
        if (!colorInit) {
            colorInit = 'blue';
        }
        if (!bgInit) {
            bgInit = 'yellow';
        }
        if (!fontSizeInit) {
            fontSizeInit = '18px';
        }
        this.textStyle =
            'color: ' +
            colorInit +
            '; background-color: ' +
            bgInit +
            '; font-size: ' +
            fontSizeInit;
        this.titleStyle = 'font-size: ' + fontSizeInit;
        this.logger = loggerInit;
        this.log = this.log.bind(this);
        this.setLogger = this.setLogger.bind(this);
    }

    log(message1, message2 = '', message3 = '') {
        if (process.env.REACT_APP_ELF_LOGGER) {
            const envs = process.env.REACT_APP_ELF_LOGGER.split(';');
            if (envs.indexOf(this.logger) > -1) {
                console.info(this.logger, message1, message2, message3);
            }
        }
    }

    setLogger(newValue) {
        this.logger = newValue;
    }
};

export default ElfLogger;

const display = value => {
    console.log(value);
};

function divider(title) {
    console.log('\n====================================');
    console.log(title);
    console.log('====================================\n');
}

exports.display = display;
exports.divider = divider;

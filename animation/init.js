requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var io = new extIO({
            functions: {
                js: 'indexPower',
                python: 'index_power'
            },
            multipleArguments: true,
        });
        io.start();
    }
);

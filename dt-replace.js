$.extend( $.fn.dataTable.defaults, {
  columnDefs: [
        {
            targets: [1],
            render: function(data, type, row) {
                var d = $.fn.dataTable.render.text().display(data);
                d = d
                .replace(/Technical/g, 'Tech.')
                .replace(/System/g, 'Sys.')
                return d;
            }
        }
  ]
} );

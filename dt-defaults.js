$.extend( $.fn.dataTable.defaults, {
  columnDefs: [
    {
      targets: 1,
      render: function (data, type, row) {
        return data + myGlobal;
      }
    }
  ]
} );

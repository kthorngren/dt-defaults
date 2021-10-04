$.extend( $.fn.dataTable.defaults, {
  columnDefs: [
    {
      targets: "myRender",
      render: function (data, type, row) {
        return data + myGlobal;
      }
    }
  ]
} );

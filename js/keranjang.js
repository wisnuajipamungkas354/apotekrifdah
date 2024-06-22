
$(document).ready(function(){  
    var jmlBarang;
    var jmlStok;
    $('#table-keranjang').on('click', '.barang-decrease', function(){
        jmlBarang = parseInt($(this).closest('tr').find('input.input-number').val());
        jmlStok = parseInt($(this).closest('tr').find('.stok').html());
        
        // Jika Stok tidak 0
        if(jmlStok > 0) {
            if(jmlBarang > 1){
                jmlBarang--;
                $(this).closest('tr').find('input.input-number').val(jmlBarang);
            } else if(jmlBarang < 0) {
                $(this).closest('tr').find('input.input-number').val(1);
            }
        }
    })

    $('#table-keranjang').on('click', '.barang-increase', function(){
        jmlBarang = parseInt($(this).closest('tr').find('input.input-number').val());
        jmlStok = parseInt($(this).closest('tr').find('.stok').html())
        
        if(jmlStok > 0) {
            if(jmlBarang < jmlStok) {
                jmlBarang++;
                $(this).closest('tr').find('input.input-number').val(jmlBarang);
            } else if ( jmlBarang > jmlStok ) {
                $(this).closest('tr').find('input.input-number').val(jmlStok);
            }
        }
    })
});
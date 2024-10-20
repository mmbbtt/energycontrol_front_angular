export class Helper
{
    /**
     * Calcula el indice, en base cero, respecto a un total de elementos, totalLength,
     * correspondiente a la pagina, page, siendo pageSize el número de elementos por
     * página.
     * 
     * @param page Número de página para la cual se queire obtener el índice inicial (la primera es la 0)
     * @param totalLength Total de elementos
     * @param pageSize Número de elementos por página
     * @returns El índice, en base 0, del primer elemento de la página pasada por argumento
     */
    static startIndexOfPage(page: number, totalLength: number, pageSize: number): number
    {
        var startIndex: number = 0;

        var totalPages = Math.ceil(totalLength / pageSize);

        var currentPage = page;
        if(page >= totalPages)
        {
            currentPage = totalPages;
        }
        
        startIndex = page * pageSize;

        return startIndex;
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Noticia
/// </summary>
public class Noticia
{
    DataSetTableAdapters.TbNoticiaTableAdapter dsNoticia = 
        new DataSetTableAdapters.TbNoticiaTableAdapter();

    #region Atributos

    private int not_id;
    private string not_titulo;
    private string not_texto;
    private DateTime not_data;
    private string not_imagem;
    private int cat_id;

    public int Not_id
    {
        get { return not_id; }
    }

    public string Not_titulo
    {
        get { return not_titulo; }
        set { not_titulo = value; }
    }

    public string Not_texto
    {
        get { return not_texto; }
        set { not_texto = value; }
    }

    public DateTime Not_data
    {
        get { return not_data; }
        set { not_data = value; }
    }

    public string Not_imagem
    {
        get { return not_imagem; }
        set { not_imagem = value; }
    }

    public int Cat_id
    {
        get { return cat_id; }
        set { cat_id = value; }
    }

    #endregion

    #region Construtores

    public Noticia()
    {
    }

    public Noticia(int pCat_id)
    {
        DataSet.TbNoticiaDataTable tbNoticia = 
            new DataSet.TbNoticiaDataTable();

        DataSetTableAdapters.TbNoticiaTableAdapter dsNoticia = 
            new DataSetTableAdapters.TbNoticiaTableAdapter();

        tbNoticia = dsNoticia.GetDataById( pCat_id );

        if ( tbNoticia.Rows.Count > 0 )
        {
            DataSet.TbNoticiaRow regNoticia = (DataSet.TbNoticiaRow)tbNoticia.Rows[0];

            this.not_id     = regNoticia.not_id;
            this.not_titulo = regNoticia.not_titulo;
            this.not_texto  = regNoticia.not_texto;
            this.not_data   = regNoticia.not_data;
            this.not_imagem = regNoticia.not_imagem;
            this.cat_id     = regNoticia.cat_id;
        }
    }

    #endregion

    #region Manipulacao dados
    public string salvar(int pNot_id, string pNot_titulo, string pNot_texto, DateTime pNot_data, string pNot_imagem, int pCat_id)
    {
        if ( string.IsNullOrEmpty(pNot_titulo) )
            return "Título é obrigatório";

        try
        {
            if ( pNot_id > 0 )
                dsNoticia.Update( pNot_titulo, pNot_texto, pNot_data, pNot_imagem, pCat_id, pNot_id );
            else
                dsNoticia.Insert( pNot_titulo, pNot_texto, pNot_data, pNot_imagem, pCat_id );
        }
        catch (Exception e)
        {
            return "Erro ao inserir a notícia: " + e.Message;
        }

        return "";
    }

    public string excluir(int pNot_id)
    {
        try
        {
            dsNoticia.Delete( pNot_id );
            return "";
        }
        catch (Exception e)
        {
            return "Erro ao excluir a notícia: " + e.Message;
        }
    }

    #endregion
}

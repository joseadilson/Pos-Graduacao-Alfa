using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Usuario
/// </summary>
public class Usuario
{

    #region Atributos

    private int usu_id;
    private string usu_nome;
    private string usu_login;
    private string usu_senha;
    private bool usu_ativo;

    public int Usu_id {
        get { return usu_id; }
    }
    public string Usu_nome {
        get { return usu_nome; }
        set { usu_nome = value; }
    }
    public string Usu_login {
        get { return usu_login; }
        set { usu_login = value; }
    }
    public string Usu_senha {
        get { return usu_senha; }
        set { usu_senha = value; }
    }
    public bool Usu_ativo {
        get { return usu_ativo; }
        set { usu_ativo = value; }
    }

    #endregion

    public Usuario() { }

    public Usuario(int pUsuId)
    {
        DataSet.TbUsuarioDataTable tbUsuario =
            new DataSet.TbUsuarioDataTable();
        DataSetTableAdapters.TbUsuarioTableAdapter dsUsuario =
            new DataSetTableAdapters.TbUsuarioTableAdapter();
        dsUsuario.FillByUsuId(tbUsuario, pUsuId);
        if (tbUsuario.Rows.Count > 0)
        {
            DataSet.TbUsuarioRow regUsuario =
                (DataSet.TbUsuarioRow)tbUsuario.Rows[0];

            this.usu_id = regUsuario.usu_id;
            this.usu_nome = regUsuario.usu_nome;
            this.usu_login = regUsuario.usu_login;
            this.usu_senha = regUsuario.usu_senha;
            this.usu_ativo = regUsuario.usu_ativo;
        }
    }
}
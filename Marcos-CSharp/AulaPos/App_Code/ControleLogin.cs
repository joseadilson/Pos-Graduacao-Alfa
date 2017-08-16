using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;

/// <summary>
/// Summary description for ControleLogin
/// </summary>
public class ControleLogin
{
	public ControleLogin()
	{
	}

    public bool verUsuarioLogado(Usuario usuario)
    {
        return ((usuario != null) &&
                (string.IsNullOrEmpty(usuario.Usu_login) == false) &&
                (usuario.Usu_ativo));
    }

    public int buscarUsuario(string login, string senha)
    {
        if (string.IsNullOrEmpty(login))
            return 0;

        DataSet.TbUsuarioDataTable tbUsuario = new DataSet.TbUsuarioDataTable();
        DataSetTableAdapters.TbUsuarioTableAdapter dsUsuario =
            new DataSetTableAdapters.TbUsuarioTableAdapter();
        dsUsuario.FillByLogin(tbUsuario, login, senha);

        if (tbUsuario.Rows.Count > 0)
            return int.Parse(tbUsuario.Rows[0]["usu_id"].ToString());
        else
            return 0;
    }

    private string criptografar(string texto)
    {
        return FormsAuthentication.HashPasswordForStoringInConfigFile(texto, "md5");
    }
}
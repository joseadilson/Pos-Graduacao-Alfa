using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Adm_Noticia : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if ( !IsPostBack )
        {
            MultiViewNoticia.ActiveViewIndex = 0;
            habilitarCampos(false);
        }

        BarraEdicao.BtnNovo.Click     += new EventHandler(btnNovoClick);
        BarraEdicao.BtnAlterar.Click  += new EventHandler(btnAlterarClick);
        BarraEdicao.BtnCancelar.Click += new EventHandler(btnCancelarClick);
        BarraEdicao.BtnGravar.Click   += new EventHandler(btnSalvarClick);
        BarraEdicao.BtnExcluir.Click  += new EventHandler(btnExcluirClick);
    }

    private void habilitarCampos(bool habilitar)
    {
        txtNotTitulo.Enabled            = habilitar;
        txtNotTexto.Enabled             = habilitar;
        txtNotImagem.Enabled            = habilitar;
        txtCatId.Enabled                = habilitar;
        BarraEdicao.BtnGravar.Enabled   = habilitar;
        BarraEdicao.BtnCancelar.Enabled = habilitar;

        habilitar                      = !habilitar;
        BarraEdicao.BtnNovo.Enabled    = habilitar;
        BarraEdicao.BtnAlterar.Enabled = habilitar;
        BarraEdicao.BtnExcluir.Enabled = habilitar;
    }

    private void atualizarCampos(int pNotId)
    {
        if ( pNotId > 0 )
        {
            Noticia noticia = new Noticia(pNotId);
            campoID.Value           = noticia.Not_id.ToString();
            txtNotTitulo.Text       = noticia.Not_titulo;
            txtNotTexto.Text        = noticia.Not_texto;
            txtNotData.SelectedDate = noticia.Not_data;
            txtNotImagem.Text       = noticia.Not_imagem;
            txtCatId.SelectedValue  = noticia.Cat_id.ToString();
        }
        else
        {
            campoID.Value          = "0";
            txtNotTitulo.Text      = "";
            txtNotTexto.Text       = "";
            txtNotData             = null;
            txtNotImagem.Text      = "";
            txtCatId.SelectedValue = null;
        }
    }

    protected void btnLista_Click(object sender, EventArgs e)
    {
        MultiViewNoticia.ActiveViewIndex = 0;
    }
    protected void btnCadastrar_Click(object sender, EventArgs e)
    {
        MultiViewNoticia.ActiveViewIndex = 1;
    }

    protected void btnNovoClick(object sender, EventArgs e)
    {
        atualizarCampos(0);
        habilitarCampos(true);
    }

    protected void btnAlterarClick(object sender, EventArgs e)
    {
        if ( !campoID.Equals("0") )
        {
            habilitarCampos(true);
        }
    }

    protected void btnCancelarClick(object sender, EventArgs e)
    {
        atualizarCampos(codigoSelecionado());
        habilitarCampos(false);
    }

    protected void btnExcluirClick(object sender, EventArgs e)
    {
        Noticia noticia = new Noticia();
        string retorno = noticia.excluir(int.Parse(campoID.Value));

        if ( string.IsNullOrEmpty(retorno) )
        {
            atualizarCampos(0);
            ObjectDataSource1.DataBind();
            GridView2.DataBind();
        }
        else
        {
            mostrarMensagem( retorno );
        }
    }

    protected void btnSalvarClick(object sender, EventArgs e)
    {
        Noticia noticia = new Noticia();
        string retorno = noticia.salvar(
            int.Parse(campoID.Value),
            txtNotTitulo.Text.ToString(),
            txtNotTexto.Text.ToString(),
            DateTime.Parse(txtNotData.SelectedDate.ToString()),
            txtNotImagem.Text.ToString(),
            int.Parse(txtCatId.SelectedValue)
        );

        if ( string.IsNullOrEmpty(retorno) )
        {
            mostrarMensagem("Registro salvo com sucesso.");
            atualizarCampos(codigoSelecionado());
            habilitarCampos(false);

            ObjectDataSource1.DataBind();
            GridView2.DataBind();
        }
        else
        {
            mostrarMensagem(retorno);
        }
    }

    protected void GridView2_SelectedIndexChanged(object sender, EventArgs e)
    {
        atualizarCampos(codigoSelecionado());
        btnCadastrar_Click(null, null);
    }

    private void mostrarMensagem(string mensagem)
    {
        ScriptManager.RegisterStartupScript(
            this,
            this.GetType(),
            Guid.NewGuid().ToString(),
            "alert('" + mensagem + "')",
            true
        );
    }

    private int codigoSelecionado()
    {
        if ( GridView2.SelectedDataKey != null )
        {
            return int.Parse( GridView2.SelectedDataKey[0].ToString() );
        }
        else
        {
            return 0;
        }
    }
}
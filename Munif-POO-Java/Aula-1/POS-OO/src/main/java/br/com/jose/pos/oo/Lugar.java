/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.jose.pos.oo;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jose
 */
public class Lugar {

    private String descricao;

    private Lugar norte;
    private Lugar sul;
    private Lugar leste;
    private Lugar oeste;

    private List<Personagem> personagens;

    private List<String> mensagens;

    public Lugar(String descricao) {
        mensagens = new ArrayList<>();
        personagens = new ArrayList<>();
        this.descricao = descricao;
    }

    public List<Personagem> getPersonagens() {
        return personagens;
    }

    public String getDescricao() {
        return descricao;
    }

    public Lugar getNorte() {
        return norte;
    }

    public void setNorte(Lugar norte) {
        this.norte = norte;
    }

    public Lugar getSul() {
        return sul;
    }

    public void setSul(Lugar sul) {
        this.sul = sul;
    }

    public Lugar getLeste() {
        return leste;
    }

    public void setLeste(Lugar leste) {
        this.leste = leste;
    }

    public Lugar getOeste() {
        return oeste;
    }

    public void setOeste(Lugar oeste) {
        this.oeste = oeste;
    }

    public List<String> getMensagens() {
        return mensagens;
    }
}
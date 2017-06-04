/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.jose.pos.oo;

/**
 *
 * @author jose
 */
public class Jogador extends Personagem {

    public Jogador(String nome, Lugar lugar) {
        super(nome, lugar);
    }
    
    @Override
    public void chora() {
        System.out.println("Buabuaba");
    }
    
    public String getNome() {
        return "JOGADOR:" + nome;
    }    
    
}

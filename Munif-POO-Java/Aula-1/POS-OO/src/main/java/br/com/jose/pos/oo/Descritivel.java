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
public interface Descritivel {
    
    final String NOME_JOGO = "JOGO2017";
    
    default String descreve()  {
        return "fooooi";
    }
    
}

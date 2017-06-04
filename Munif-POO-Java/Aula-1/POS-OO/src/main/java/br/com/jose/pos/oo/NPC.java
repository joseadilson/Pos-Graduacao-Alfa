/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.jose.pos.oo;

import java.util.Random;

/**
 *
 * @author jose
 */
public class NPC extends Personagem{
    
    static private Random r = new Random();
    
    static private String[] possiveisNomes={"A","B","C","D","E"};

    public NPC(Lugar lugar) {
        super(possiveisNomes[r.nextInt(possiveisNomes.length)], lugar);
    }
    
    @Override
    public void chora() {
        System.out.println("ChuaChuaCHua");
    }
}
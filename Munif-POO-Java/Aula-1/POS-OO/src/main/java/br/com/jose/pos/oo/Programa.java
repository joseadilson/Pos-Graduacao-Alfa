/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.jose.pos.oo;

import java.util.Scanner;

/**
 *
 * @author jose
 */
public class Programa {
    
    public static void main(String ... args){
        Scanner scanner = new Scanner(System.in);
        Mapa mapa = Mapa.getInstancia();
        
        System.out.println("-------->"+Descritivel.NOME_JOGO);
        
        Personagem jogador = new Jogador("Maria",mapa.getLugarInicialJogador());
        Personagem npc     = new NPC(mapa.getLugarInicialNPC());
        
        while (true){
            Lugar lc = jogador.getLugar();
            System.out.println(jogador.getNome()+"!");
            System.out.println("Voce está no(a):"+lc.getDescricao());
            
            if (lc.getLeste()!=null){
                System.out.println("1) Para leste "+lc.getLeste().getDescricao());
            }
            if (lc.getOeste()!=null){
                System.out.println("2) Para Oeste "+lc.getOeste().getDescricao());
            }
            if (lc.getNorte()!=null){
                System.out.println("3) Para Norte "+lc.getNorte().getDescricao());
            }
            if (lc.getSul()!=null){
                System.out.println("4) Para Sul "+lc.getSul().getDescricao());
            }
            
            int opcao=scanner.nextInt();
            
            if (opcao==1 && lc.getLeste()!=null){
                jogador.setLugar(lc.getLeste());
            }
            else if (opcao==2 && lc.getOeste()!=null){
                jogador.setLugar(lc.getOeste());
            }
            else if (opcao==3 && lc.getNorte()!=null){
                jogador.setLugar(lc.getNorte());
            }
            else if (opcao==4 && lc.getSul()!=null){
                jogador.setLugar(lc.getSul());
            }
            else{
                System.out.println("Opcao inválida");
            }
            System.out.println("------------------");                        
        }        
    }
    
    /*
    public static void mainVelho(String []args){
        try {
            System.out.println("Ola Mundo!!!");
            
            Liquidificador liq1=new Liquidificador ();
            
            liq1.setVelocidade(2);
            System.out.println(liq1.getVelocidade());
            System.out.println(liq1.praQue());
            liq1.setVelocidade(-3);
            System.out.println(liq1.getVelocidade());
            System.out.println(liq1.praQue());
        } catch (LiqException ex) {
            System.out.println("Problemas "+ex.getMessage());
        }
        catch(NumberFormatException ex){
            System.out.println ("Erro na entrada de dados");
        }     
    }*/    
}